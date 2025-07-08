import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Success from './Pages/Success';
// import SuccessPopup from './Pages/Success';
import Error from './Pages/Error';
import './App.css'
import Login from './Pages/Login';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <>
      <BrowserRouter>
        <div className="relative">
          {showPopup && <Success onClose={() => setShowPopup(false)} />}
          <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
            {/* <Route path='/' element={<Home setShowPopup={setShowPopup} />}></Route> */}
           <Route path='/Home' element={<Home setShowPopup={setShowPopup} />}></Route>
            <Route path='/success' element={<Success />}></Route>
            <Route path='/*' element={<Error />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;