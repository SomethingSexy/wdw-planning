import 'fetch-everywhere';
import { action, computed, observable, runInAction } from 'mobx';
import { alphabetical } from './utils';

export interface IResortStore {
  id: string;
  isLoading: boolean;
  toJson: IResort;
}

interface IActivity {
  id: string;
}

export interface IResort {
  activities?: any[];
  activitiesCount: number;
  areas: string[];
  description: string;
  dining?: any[];
  diningCount: number;
  id: string;
  image: string;
  name: string;
  type: string;
  location: string;
}

class Resort implements IResortStore {
  @observable public isLoading: boolean = false;
  @observable public loaded = false;
  public id: string;
  private description: string;
  private image: string;
  private areas: string[];
  private activitiesCount: number;
  private diningCount: number;
  @observable private activities: any[] | undefined = undefined;
  private dining: any[] | undefined = undefined;
  private location: string;
  private name: string;
  private type: string;

  constructor(json) {
    this.id = json.id;
    this.description = json.description;
    this.image = json.image;
    this.areas = json.areas.slice().sort(alphabetical.bind(undefined, null));
    this.activitiesCount = json.activitiesCount;
    this.diningCount = json.diningCount;
    this.name = json.name;
    this.type = json.type;
    this.location = json.location;
    this.loaded = true;
  }

  /**
   * Retrieves the activities for a given park
   * @param id
   */
  @action
  public async fetchActivities(): Promise<void> {
    if (!this.loaded) {
      throw new Error('Cannot fetch activities of a park that has not been loaded.');
    }

    if (!this.activities) {
      this.isLoading = true;
      const response = await fetch(`${process.env.API_URL}/resorts/${this.id}/activities`);
      const activities: IActivity[] = await response.json();
      runInAction(() => {
        activities.sort(alphabetical.bind(undefined, 'name'));
        this.activities = activities;
        this.isLoading = false;
      });
    }
  }

  @computed
  public get toJson(): IResort {
    return {
      activities: this.activities,
      activitiesCount: this.activitiesCount,
      areas: this.areas,
      description: this.description,
      dining: this.dining,
      diningCount: this.diningCount,
      id: this.id,
      image: this.image,
      location: this.location,
      name: this.name,
      type: this.type
    };
  }
}

export default Resort;
