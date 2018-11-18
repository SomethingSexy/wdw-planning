import 'fetch-everywhere';
import { action, computed, observable, runInAction } from 'mobx';
import { ILocationStore } from './types';
import { alphabetical } from './utils';

export interface IAppStore {
  setShowDay: (showDay: boolean) => void;
  showDay: boolean;
}

class App implements IAppStore {
  @observable public showDay: boolean = false;

  /**
   * Retrieves the activities for a given park
   * @param id
   */
  @action
  public setShowDay(showDay: boolean): void {
    this.showDay = showDay;
  }
}

export default App;
