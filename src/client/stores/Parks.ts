import 'fetch-everywhere';
import { action, observable, runInAction } from 'mobx';

export interface IParkStore {
  isLoading: boolean;
  all: IPark[];
  findById: (id: string) => IPark | undefined ;
}

interface IActivity {
  id: string;
}

interface IPark {
  activities?: any[];
  areas: string[];
  id: string;
  name: string;
  type: string;
  location: string;
}

const alphabetical = (key: string | null, a, b) => {
  const aLookup = key ? a[key] : a;
  const bLookup = key ? b[key] : b;

  if (aLookup < bLookup) {
    return -1;
  }
  if (aLookup > bLookup) {
    return 1;
  }
  return 0;
};

class ParkStore implements IParkStore {
  @observable public isLoading: boolean = false;
  @observable public all: IPark[] = [];
  @observable public loaded = false;

  @action
  public async fetch(): Promise<void> {
    if (this.loaded) {
      return;
    }
    this.isLoading = true;
    const response = await fetch(`${process.env.API_URL}/parks`);
    const parks: IPark[] = await response.json();
    runInAction(() => {
      // sort parks by name
      parks.sort(alphabetical.bind(undefined, 'name'));
      // do any internal manipulation
      parks.forEach(park => park.areas.sort(alphabetical.bind(undefined, null)));
      this.all = parks;
      this.loaded = true;
      this.isLoading = false;
    });
  }

  @action
  public async fetchParkActivities(id: string): Promise<void> {
    if (!this.loaded) {
      await this.fetch();
    }
    const park = this.findById(id);

    if (!park) {
      throw new Error(`Could not find park ${id}.`);
    }

    if (!park.activities) {
      this.isLoading = true;
      const response = await fetch(`${process.env.API_URL}/parks/${id}/activities`);
      const activities: IActivity[] = await response.json();
      runInAction(() => {
        activities.sort(alphabetical.bind(undefined, 'name'));
        this.all = this.all.map(p => {
          if (p.id !== park.id) {
            return p;
          }

          return {
            ...p,
            activities
          };
        });
        this.isLoading = false;
      });
    }
  }

  public findById(id: string): IPark | undefined {
    return this.all.find(place => place.id === id);
  }
}

export default ParkStore;
