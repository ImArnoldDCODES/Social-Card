import './App.css'
import Land from './Land/Land';
import Create from './Create/Create';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<Land />}/>
    <Route path='/create' element={<Create />}/>
    </Routes>
    </Router>
  );
}

export default App;
