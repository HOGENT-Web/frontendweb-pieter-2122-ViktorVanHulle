import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import StarRatings from "react-star-ratings";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

function Review() {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const sendDataToEmailApi = (values) => {
    console.log(values);
    // emailjs.send(serviceID, templateID, templateParams, publicKey);
    return true; // to show the send process was successful
  };

  const handleSubmit = (values) => {
    const emailWasSent = sendDataToEmailApi(values);
    if (emailWasSent) {
      // resetForm();
      // setSubmitting(false);:
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email Address").required("Required"),
    message: Yup.string()
      .min(7, "More details are always helpful.")
      .required("Required"),
  });

  return (
    <section id="contact">
      <h1>Contact Form</h1>
      <div className="form-header">
        <p>
          <StarRatings
            rating={rating}
            starRatedColor="gold"
            starEmptyColor="grey"
            changeRating={(rating) => setRating(rating)}
            numberOfStars={6}
            name="rating"
          />
        </p>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <div className="form_container">
            <Form>
              <div className="input_box">
                <label htmlFor="userName">{t("username")}</label>
                <Field
                  id="userName"
                  name="userName"
                  placeholder={t("username")}
                />
                {errors.name && touched.name ? (
                  <div className="errors_container">{errors.userName}</div>
                ) : null}
              </div>
              <div className="input_box">
                <span htmlFor="email">{t("email")}</span>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t("email")}
                />
                {errors.email && touched.email ? (
                  <div className="errors_container">{errors.email}</div>
                ) : null}
              </div>
              <div className="input_box">
                <span htmlFor="password">{t("message")}</span>
                <Field
                  id="message"
                  name="message"
                  type="text"
                  placeholder={t("message")}
                />
                {errors.message && touched.message ? (
                  <div className="errors_container">{errors.message}</div>
                ) : null}
              </div>
              <div className="input_box">
                <input type="submit" value={t("send")} />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </section>
  );
}

export default Review;
