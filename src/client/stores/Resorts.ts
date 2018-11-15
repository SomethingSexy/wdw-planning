import 'fetch-everywhere';
import { action, computed, observable, runInAction } from 'mobx';
import Resort, { IResort } from './Resort';
import { ILocationStore } from './types';
import { alphabetical } from './utils';

export interface IResortsStore {
  // tslint:disable-next-line:prefer-array-literal
  all: Array<ILocationStore<IResort>>;
  findById: (id: string) => ILocationStore<IResort> | undefined;
  isLoading: boolean;
  loaded: boolean;
  toJson: IResort[];
}

interface IActivity {
  id: string;
}

class ResortStore implements IResortsStore {
  @observable public isLoading: boolean = false;
  // tslint:disable-next-line:prefer-array-literal
  @observable public all: Array<ILocationStore<IResort>> = [];
  @observable public loaded = false;

  @action
  public async fetch(): Promise<void> {
    if (this.loaded) {
      return;
    }
    this.isLoading = true;
    const response = await fetch(`${process.env.API_URL}/resorts`);
    const resorts: IResort[] = await response.json();
    runInAction(() => {
      // sort parks by name
      resorts.sort(alphabetical.bind(undefined, 'name'));
      this.all = resorts.map(resort => new Resort(resort));
      this.loaded = true;
      this.isLoading = false;
    });
  }

  public findById(id: string): ILocationStore<IResort> | undefined {
    return this.all.find(resort => resort.id === id);
  }

  @computed
  public get toJson(): IResort[] {
    return this.all.map(resort => resort.toJson);
  }
}

export default ResortStore;
