import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
