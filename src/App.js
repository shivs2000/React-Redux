
import './App.css';
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux';
import store from './redux/Store';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <>
    <Provider store={store}>
    <CakeContainer/>
    <IceCreamContainer/>
    </Provider>
    </>
  );
}

export default App;
