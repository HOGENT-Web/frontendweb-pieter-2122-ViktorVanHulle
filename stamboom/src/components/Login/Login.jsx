import React, { useRef, useState, useEffect } from "react";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import AuthContext from "../../context/AuthProvider";

import axios from "../../api/axios";
const LOGIN_URL = '/auth';

function Login(props) {

  const { t } = useTranslation();

  const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    // prevent default behavior of form
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL, 
        JSON.stringify({user, pwd}),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        });
      console.log(JSON.stringify(response?.data));
      const accesToken = response?.data?.accesToken;
      const roles = response?.data?.roles;

      setAuth({ user, pwd, roles, accesToken });
      setUser('');
      setPwd('');
      props.setSucces(true);
    }catch(err) {
      if(!err?.response) {
        setErrMsg('no Server Response');
      }else if(err.response?.status === 400){
        setErrMsg('Missing email or Password');
      }else if(err.response?.status === 401){
        setErrMsg('Unauthorized');
      }else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  }

  return (
    <section id="login">
      <div className="form-header">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1>{t("form")}</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label>{t("email")}</label>
        <input alt="email" type="email" ref={userRef} onChange={(e) => setUser(e.target.value)} value={user} />
        <label>{t("password")}</label>
        <input alt="password" type="password" onChange={(e) => setPwd(e.target.value)} value={pwd} />
        <div className="remember">
          <input type="checkbox" />
          <label>{t("remember")}</label>
        </div>
        <input type="submit" id="login-button" value={t("submit")} />
        <p className="form-footer">
          Need an Account?<br></br>
          Send me an email at <a href="mailto: viktor.van.hulle@gmail.com">viktor.van.hulle@gmail.com</a>
        </p>
      </form>
    </section>
  );
}

export default Login;
