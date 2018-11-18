import App from './App';
import Parks from './Parks';
import Resorts from './Resorts';

export default () => {
  const app = new App();
  const parks: any = new Parks();
  const resorts: any = new Resorts();
  return {
    app,
    parks,
    resorts
  };
};
