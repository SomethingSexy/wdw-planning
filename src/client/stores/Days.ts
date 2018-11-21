import 'fetch-everywhere';
import { action, computed, observable, runInAction } from 'mobx';
import { alphabetical } from './utils';

const tempDays: IDay[] = [{
  date: '2018-10-20',
  id: '1',
  label: 'Thursday, March 2nd 2019',
  parkHours: [{
    close: '12:00 AM',
    id: 'a',
    name: 'Magic Kingdom',
    open: '10:00 AM',
  }]
}];

export interface IParkHour {
  close: string;
  id: string;
  name: string;
  open: string;
}

export interface IDay {
  date: string;
  id: string;
  label: string;
  parkHours: IParkHour[];
}

export interface IDayStore {
  all: IDay[];
  findById: (id: string) => IDay| undefined;
  isLoading: boolean;
  loaded: boolean;
  today: IDay;
  toJson: IDay[];
}

/**
 * Stores information about a giving day, park hours, weather, etc
 */
class DayStore implements IDayStore {
  @observable public isLoading: boolean = false;
  @observable public all: IDay[] = [];
  @observable public loaded = false;
  @observable private activeDayIndex: number = 0;

  @action
  public async fetch(): Promise<void> {
    if (this.loaded) {
      return;
    }
    this.isLoading = true;
    // const response = await fetch(`${process.env.API_URL}/days/`);
    // const parks: IPark[] = await response.json();
    runInAction(() => {
      this.all = tempDays;
      // The current/active date will come from the service
      this.activeDayIndex = 0;
      this.loaded = true;
      this.isLoading = false;
    });
  }

  public findById(id: string): IDay | undefined {
    return this.all.find(day => day.id === id);
  }

  @computed
  public get today(): IDay {
    return this.all[this.activeDayIndex];
  }

  @computed
  public get toJson(): IDay[] {
    return this.all;
  }
}

export default DayStore;
