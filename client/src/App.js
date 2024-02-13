// import "antd/dist/antd.min.css";
import './App.css';
import {
  BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ItemPage from './pages/ItemPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route path="/item" element={<ItemPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
