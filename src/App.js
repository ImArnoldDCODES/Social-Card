import './App.css'
import Land from './Land/Land';
import Create from './Create/Create';
import Card from './Card/Card';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Land />} />
        <Route path='/create' element={<Create />} />
        <Route path='/card' element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
