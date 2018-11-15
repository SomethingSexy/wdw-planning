import 'fetch-everywhere';
import { action, computed, observable, runInAction } from 'mobx';
import Park, { IPark } from './Park';
import { ILocationStore } from './types';
import { alphabetical } from './utils';

export interface IParksStore {
  // tslint:disable-next-line:prefer-array-literal
  all: Array<ILocationStore<IPark>>;
  findById: (id: string) => ILocationStore<IPark> | undefined;
  isLoading: boolean;
  loaded: boolean;
  toJson: IPark[];
}

interface IActivity {
  id: string;
}

class ParkStore implements IParksStore {
  @observable public isLoading: boolean = false;
  // tslint:disable-next-line:prefer-array-literal
  @observable public all: Array<ILocationStore<IPark>> = [];
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
      this.all = parks.map(park => new Park(park));
      this.loaded = true;
      this.isLoading = false;
    });
  }

  public findById(id: string): ILocationStore<IPark> | undefined {
    return this.all.find(park => park.id === id);
  }

  @computed
  public get toJson(): IPark[] {
    return this.all.map(park => park.toJson);
  }
}

export default ParkStore;
