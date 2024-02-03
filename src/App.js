import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Indexpage from './Pages/Indexpage';
import Home from './Pages/home';
import Login from './login';
import Craetepage from './Pages/accountcreate';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/"  element={<Indexpage />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/newaccountcreate' element={<Craetepage />}/>
     


      </Routes>
    </Router>
  );
}

export default App;
