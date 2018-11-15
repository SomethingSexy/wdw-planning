export interface ILocationStore<T> {
  id: string;
  isLoading: boolean;
  toJson: T;
}
