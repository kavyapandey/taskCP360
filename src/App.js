import { useState } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';

function App() {
  const [isLoggedIn,setUserLoggedIn] = useState(false);

  const loginStatus = (status) =>{
    setUserLoggedIn(status)
  }
  return (
    <>
    {isLoggedIn ? (<Home/>) : (<Login loginStatus={loginStatus}/>)}
    </>
  );
}

export default App;
