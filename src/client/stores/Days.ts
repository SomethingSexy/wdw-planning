import 'fetch-everywhere';
import { action, computed, observable, runInAction } from 'mobx';

interface IDays {
  active: string;
  days: IDay[];
}

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
  next: ()  => void;
  previous: () => void;
  today: IDay | undefined;
  toJson: IDay[];
}

/**
 * Stores information about a giving day, park hours, weather, etc
 */
class DayStore implements IDayStore {
  @observable public isLoading: boolean = false;
  @observable public all: IDay[] = [];
  @observable public loaded = false;
  @observable public nextLink: string | null = null;
  @observable public prevLink: string | null = null;
  @observable private activeDay: string | null = null;

  @action
  public async fetch(): Promise<void> {
    if (this.loaded) {
      return;
    }
    this.isLoading = true;
    const response = await fetch(`${process.env.API_URL}/dates/today`);
    const json: any = await response.json();
    const { data, links } = json;
    runInAction(() => {
      this.all = data.days;
      // The current/active date will come from the service
      this.activeDay = data.active;
      this.nextLink = links.next;
      this.prevLink = links.prev;
      this.loaded = true;
      this.isLoading = false;
    });
  }

  public findById(date: string): IDay | undefined {
    return this.all.find(day => day.date === date);
  }

  @action
  public async next() {
    // given the current, go to the next
    if (!this.activeDay) {
      return;
    }

    const index = this.all.findIndex(day => day.date === this.activeDay);
    if (index === -1) {
      return;
    }

    // if this does not exist we need to fetch
    const next = this.all[index + 1];
    if (!next) {
      // if it doesn't exist we need to check we have a next link
      if (this.nextLink) {
        this.isLoading = true;
        const response = await fetch(this.nextLink);
        const dates: IDays = await response.json();
        this.activeDay = null;
      } else {
        this.activeDay = null;
      }
    } else {
      this.activeDay = next.date;
    }
  }

  @action
  public async previous() {
    // given the current, go to the next
    if (!this.activeDay) {
      return;
    }

    const index = this.all.findIndex(day => day.date === this.activeDay);
    if (index === -1) {
      return;
    }

    // if this does not exist we need to fetch
    const next = this.all[index - 1];
    if (!next) {
      // TODO: fetch
      this.activeDay = null;
    } else {
      this.activeDay = next.date;
    }
  }

  @computed
  public get today(): IDay | undefined {
    if (!this.activeDay) {
      return;
    }

    return this.findById(this.activeDay);
  }

  @computed
  public get toJson(): IDay[] {
    return this.all;
  }
}

export default DayStore;
