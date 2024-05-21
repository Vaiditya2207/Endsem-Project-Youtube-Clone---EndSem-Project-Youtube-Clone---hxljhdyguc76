import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import NavigationBar from "./components/NavigationBar";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import { useState } from 'react';
import MovieDetail from './components/MovieDetails';
import { Redirect } from 'react-router-dom';

function RedirectToHome() {
  const navigate = useNavigate();
  navigate('/home');
  return null;
}

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");

  let userdata = {
    isLoggedin: isLoggedin,
    username: username,
    token: token,
    email: email
  };

  let setUserdata = {
    setIsLoggedin: setIsLoggedin,
    setUsername: setUsername,
    setToken: setToken,
    setEmail: setEmail
  };

  return (
    <Router>
      <NavigationBar userdata = {userdata} setUserdata = {setUserdata}/>
      <Routes>
        <Route path="/home" element={<Home userdata = {userdata}/>} />
        <Route path = "/signup" element = {<SignUp />} />
        <Route path="/signin" element= {<SignIn setUserdata = {setUserdata}/>} />
        <Route path="/detail/:id" element={<MovieDetail userdata = {userdata} />} />
        <Route path="*" element={<RedirectToHome />} />
      </Routes>
    </Router>
  );
}

export default App;