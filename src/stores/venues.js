import { observable, action, computed } from 'mobx';

class VenuesStore {
  @observable isLoading = false;
  @observable venues = observable.map();
}

export default new VenuesStore();
