
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar'; 
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type}
    );
  }
  setTimeout(()=>{
    setAlert(null);
  },1500)
  return (
    <>
<BrowserRouter>
    <Navbar title="TextUtils" />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces"/>}/>
    </Routes>
    </div>
    </BrowserRouter>

    </>
  );
}

export default App;
