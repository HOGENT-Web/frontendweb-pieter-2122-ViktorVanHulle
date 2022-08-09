import React, { useState } from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
// components
import Canvas from './components/three.js/Canvas';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
// pages
import Welcome from './pages/Welcome';
import Tree from './pages/Tree';
import Info from './pages/Info';
// translation
import './components/i18n/i18n';
// css
import './App.css'
import i18next from 'i18next';
// redux
import { useSelector } from "react-redux";
import { selectUser } from './redux/userSlice';


function App() {

  const [login, setLogin] = useState(false);
  
  // token
  const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className='App'>
      <Navbar login={login} onLoginChange={setLogin} />
        <Canvas />
        <BrowserRouter>
        <Switch>
          <Route exact path='/' element={!login ? <Welcome/> : <Login login={login} onLoginChange={setLogin} />}/>
          <Route  path='/Stamboom' element={!login ? <Tree/> : <Login login={login} onLoginChange={setLogin} />}/>
          <Route  path='/info/:id' element={!login ? <Info/> : <Login login={login} onLoginChange={setLogin} />}/>
        </Switch>
        </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App
