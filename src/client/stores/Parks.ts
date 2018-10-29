import 'fetch-everywhere';
import { action, observable, runInAction } from 'mobx';

export interface IParkStore {
  isLoading: boolean;
  all: IPark[];
  findById: (id: string) => IPark | undefined ;
}

interface IPark {
  id: string;
  name: string;
  type: string;
  search: string;
  location: string;
}

class ParkStore implements IParkStore {
  @observable public isLoading: boolean = false;
  @observable public all: IPark[] = [];
  @observable public loaded = false;

  @action
  public async fetch(): Promise<void> {
    const response = await fetch(`${process.env.API_URL}/parks`);
    this.all = await response.json();
  }

  public findById(id: string): IPark | undefined {
    return this.all.find(place => place.id === id);
  }
}

export default ParkStore;
