
import './App.css';
import Router from './Pages/Router';
import { Provider } from "react-redux";
import store from './store/index'
import { AuthProvider } from './hooks/AuthProvider';



function App() {
  
  return <>
    <Provider store = {store}>
      <AuthProvider>
        <Router/>
      </AuthProvider>
      
    </Provider>
  </>
  
}

export default App;
