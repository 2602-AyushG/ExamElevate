import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Explore from './components/Explore';
import Login from './components/Login';
import Profile from './components/Profile';
import Goal from './components/Goal';
import StudyMaterial from './components/StudyMaterial';
import About from './components/About';
import Class from './components/Class'
import Alert from "./components/Alert";
import Classroom from './components/Classroom';
import Room from './components/Room';
import Comingsoon from './components/Comingsoon';
import StudyMaterialState from './context/studymaterial/StudyMaterialState';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, display) => {
    setAlert({
      theme: type,
      message: display
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    // all under JSX fragment(<> & </>) as we need to pass only one element in the return();
    <>
      <StudyMaterialState>
        <BrowserRouter>
        <Alert alert={alert} />
          <Navbar Page='Not_Home' showAlert={showAlert} />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/classroom" element={<Classroom />} />
            <Route exact path="/room/:roomId" element={<Room />} />
            <Route exact path="/comingsoon" element={<Comingsoon />} />
            <Route exact path="/login" element={<Login Task='logIn' showAlert={showAlert} />} />
            <Route exact path="/profile" element={<Profile username='Aman Gupta' emailid='aman@gmail.com' />} />
            <Route exact path="/goal/:id" element={<Goal />} />
            <Route exact path="/signup" element={<Login Task='signup' showAlert={showAlert} />} />
            <Route exact path="/studymaterial/:subject" element={<StudyMaterial />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/class/:id" element={<Class />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </StudyMaterialState>
    </>
  );
}

export default App;
