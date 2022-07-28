import { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Canvas from './components/three.js/Canvas';
import Tree from './pages/Tree';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Welcome from './pages/Welcome';
import './App.css'



function App() {
  // useEffect(() => {
  //     i18n.on('languageChanged', (lng) => setLocale(i18n.language));
  //   }, []);

  const [login, setLogin] = useState(false);
  // const [locale, setLocale] = useState(i18n.language);
  // token
  const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className='App'>
    {/* <LocaleContext.Provider value={{locale, setLocale}}> */}
      {/* To make sure the components are rendered once i18next and the translation files have been loaded */}
      {/* <Suspense fallback={<Loading />}> */}
      <Navbar login={login} onLoginChange={setLogin}/>
        <Canvas />
        <BrowserRouter>
        <Switch>
          <Route exact path='/(index.html)?' component={!login ? Welcome : Login} />
          <Route  path='/Stamboom' component={!login ? Tree : Login}/>
        </Switch>
        </BrowserRouter>
        <Footer />
        {/* </Suspense>      */}
    {/* </LocaleContext.Provider> */}
    </div>
  );
}

export default App
