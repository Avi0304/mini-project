// import "antd/dist/antd.min.css";
import './App.css';
import {
  BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ItemPage from './pages/ItemPage';
import Resigter from './pages/Resigter';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/item" element={<ItemPage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/resigter" element={<Resigter/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
