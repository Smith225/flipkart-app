import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home.js";
import Navbar from './components/Navbar';

function App() {

  return (

      <Router>

        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />

        </Routes>

      </Router>
  );
}


export default App;