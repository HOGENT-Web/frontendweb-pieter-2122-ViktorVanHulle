import React, { useCallback } from "react";
import { useNavigate, Navigate } from "react-router";
import { useLogin, useSession } from "../../context/AuthProvider";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const SignupSchema = Yup.object().shape({
  userName: Yup.string().required("Dit veld moet ingevuld worden"),
  password: Yup.string().required("Dit veld moet ingevuld worden"),
});

function Login(props) {
  const history = useNavigate();
  const { t } = useTranslation();
  const { loading, error, isAuthed } = useSession();
  const login = useLogin();
  let nrOfTries = 0;

  useEffect(() => {
    if (isAuthed) {
      console.log("AUTHED");
      return <Navigate from="/login" to="/" />;
    }
  }, [isAuthed, history]);

  const handleLogin = useCallback(
    async ({ userName, password }) => {
      console.log("HandleLogin", userName, password);
      const success = await login(userName, password);

      if (success) {
        console.log(isAuthed);
        props.onLoginChange(!props.login);
        nrOfTries = 0;
      } else {
        nrOfTries += 1;
        if (nrOfTries >= 3) {
          document.getElementById("errorForBlocking").innerHTML =
            "Uw account werd geblokkeerd wegens teveel pogingen.";
        }
      }
    },
    [history, login]
  );

  return (
    <section id="login">
      <div className="form-header">
        <h1>{t("form")}</h1>
      </div>
      <Formik
        initialValues={{
          userName: "",
          password: "",
        }}
        enableReinitialize={true}
        onSubmit={(values) => {
          handleLogin(values);
        }}
        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => (
          <div className="form_container">
            <Form>
              <div id="errorForBlocking" className="errors_container">
                {error}
              </div>
              <div className="input_box">
                <label htmlFor="userName">{t("username")}</label>
                <Field
                  id="userName"
                  name="userName"
                  placeholder={t("username")}
                />
                {errors.userName && touched.userName ? (
                  <div className="errors_container">{errors.userName}</div>
                ) : null}
              </div>
              <div className="input_box">
                <span htmlFor="password">{t("password")}</span>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  placeholder={t("password")}
                />
                {errors.password && touched.password ? (
                  <div className="errors_container">{errors.password}</div>
                ) : null}
              </div>
              <div className="input_box">
                <input
                  id="login-button"
                  type="submit"
                  value={t("submit")}
                  disabled={loading}
                />
              </div>
            </Form>
            <p className="form-footer">
              Need an Account?<br></br>
              Send me an email at{" "}
              <a href="mailto: viktor.van.hulle@gmail.com">
                viktor.van.hulle@gmail.com
              </a>
            </p>
          </div>
        )}
      </Formik>
    </section>
  );
}

export default Login;
