import Parks from './Parks';
import Resorts from './Resorts';

export default () => {
  const parks: any = new Parks();
  const resorts: any = new Resorts();
  return {
    parks,
    resorts
  };
};
