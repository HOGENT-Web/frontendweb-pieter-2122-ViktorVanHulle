import React, { useState } from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
// components
import Canvas from "./components/three.js/Canvas";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
// pages
import Welcome from "./pages/Welcome";
import Tree from "./pages/Tree";
import Info from "./pages/Info";
// translation
import "./components/i18n/i18n";
// css
import "./App.css";
// redux (NOT USED)
// import { useSelector } from "react-redux";
// import { selectUser } from "./redux/userSlice";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Review from "./components/Review/Review";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <Navbar login={login} onLoginChange={setLogin} />
      <Canvas />
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            element={
              !login ? (
                <Welcome />
              ) : (
                <Login login={login} onLoginChange={setLogin} />
              )
            }
          />
          <Route
            exact
            path="/Stamboom"
            element={
              !login ? (
                <Tree />
              ) : (
                <Login login={login} onLoginChange={setLogin} />
              )
            }
          />
          <Route exact path="/info/:id" elem={<PrivateRoute />}>
            <Route
              exact
              path="/info/:id"
              element={
                !login ? (
                  <Info />
                ) : (
                  <Login login={login} onLoginChange={setLogin} />
                )
              }
            />
          </Route>
          <Route exact path="/review" elem={<PrivateRoute />}>
            <Route
              exact
              path="/review"
              element={
                !login ? (
                  <Review />
                ) : (
                  <Login login={login} onLoginChange={setLogin} />
                )
              }
            />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
