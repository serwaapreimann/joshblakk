import Home from "./components/Home/Home";
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} /> 
          </Routes>
     
     </BrowserRouter>
    </>
  )
}

