// import "antd/dist/antd.min.css";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ItemPage from './pages/ItemPage';
import Resigter from './pages/Resigter';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProtectedRoute><Homepage/></ProtectedRoute>} />
        <Route path="/item" element={<ProtectedRoute><ItemPage/></ProtectedRoute>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Resigter/>} />
      </Routes>
    </Router>
  );
}

export default App;

export function ProtectedRoute({children}){
  const token = localStorage.getItem('token');
  if(token){
    return children;
  }
  else{
    return <Navigate to="/login" />;
  }
}
