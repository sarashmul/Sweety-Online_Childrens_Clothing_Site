
import './App.css';

import NavBar from './component/Global/NavBar';
import Footer from './component/Global/Footer';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
   <div className="app-container">
    <NavBar/>
    <Footer/>
   </div>
   </Provider>
  );
}

export default App;
