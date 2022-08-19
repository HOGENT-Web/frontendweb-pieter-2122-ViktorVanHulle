import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import StarRatings from "react-star-ratings";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

function Review() {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const sendDataToEmailApi = (values) => {
    emailjs
      .sendForm(
        "service_idn3pht",
        "template_b2flvmj",
        "#review_form",
        "rklOmW9_DoaP11r6p"
      )
      .then(
        (result) => {
          console.log("email sent!");
        },
        (error) => {
          throw new Error(t("error"), error.text);
        }
      );

    return true;
  };

  const handleSubmit = (values) => {
    const emailWasSent = sendDataToEmailApi(values);
    if (emailWasSent) {
      document.getElementById("contact_msg").innerHTML =
        t("contact_msg");
      document.getElementById("contact_msg").style.display = "inherit";
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t("required")),
    email: Yup.string().email(t("invalid_email")).required(t("required")),
    message: Yup.string()
      .min(15, t("details"))
      .required(t("required")),
  });

  return (
    <section id="contact">
      <div className="form-header">
        <p id="contact_msg"></p>
        <h1>Contact Form</h1>
      </div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
          rating: "",
        }}
        enableReinitialize={true}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <div className="form_container">
            <Form id="review_form">
              <p className="rating">
                <StarRatings
                  rating={rating}
                  starRatedColor="gold"
                  starEmptyColor="grey"
                  changeRating={(rating) => setRating(rating)}
                  numberOfStars={4}
                  name="rating"
                  starDimension={40}
                />
              </p>
              <div className="input_box">
                <span htmlFor="name">{t("name")}</span>
                <Field
                  id="name"
                  name="name"
                  type="name"
                  placeholder={t("name")}
                />
                {errors.name && touched.name ? (
                  <div className="errors_container">{errors.name}</div>
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
            <p className="form-footer"></p>
          </div>
        )}
      </Formik>
    </section>
  );
}

export default Review;
