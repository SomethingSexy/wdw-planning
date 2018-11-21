import App from './App';
import Days from './Days';
import Parks from './Parks';
import Resorts from './Resorts';

export default () => {
  const app = new App();
  const days = new Days();
  const parks: any = new Parks();
  const resorts: any = new Resorts();
  return {
    app,
    days,
    parks,
    resorts
  };
};
