import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Registration from './Components/Registration';
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Router>
        <Routes>
        <Route path="/home" element={<Home />}> </Route>
          <Route path="/" element={<Login />}> </Route>
          <Route path="/registration" element={<Registration />}> </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
