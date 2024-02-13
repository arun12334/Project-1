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
import Imports from './Pages/Imports';
import Exports from './Pages/Exports';
import Masters from './Pages/Masters';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" index element={<Indexpage />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/home' element={<Home />}/>
      <Route path='/newaccountcreate' element={<Craetepage />}/>
      <Route path='/imports' element={<Imports />} />
      <Route path='/exports' element={<Exports />} />
      <Route path='/masters' element={<Masters />} />
      </Routes>
    </Router>
  );
}

export default App;
