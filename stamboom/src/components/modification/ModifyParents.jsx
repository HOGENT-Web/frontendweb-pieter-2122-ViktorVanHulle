// NOT FINISHED
import React from "react";
import { useTranslation } from "react-i18next";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

function ModifyParents(id) {
  const { t } = useTranslation();

  // NOT FINISHED
  const handleSubmit = (values) => {
    document.getElementById("mod_parents_msg").innerHTML = t("addedParent");
    document.getElementById("mod_parents_msg").style.display = "inherit";

    console.log("Added a child!");
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t("required")),
    birth: Yup.string().required(t("required")),
    biography: Yup.string().min(15, t("details")).required(t("required")),
  });

  return (
    <div className="modification">
      <p id="mod_parents_msg"></p>
      <Formik
        initialValues={{
          name: "",
          birth: "",
          death: "",
          biography: "",
        }}
        enableReinitialize={true}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <div className="form_container">
            <Form>
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
                <span htmlFor="birth">{t("birth")}</span>
                <Field
                  id="birth"
                  name="birth"
                  type="date"
                  placeholder={t("birth")}
                />
                {errors.birth && touched.birth ? (
                  <div className="errors_container">{errors.birth}</div>
                ) : null}
              </div>
              <div className="input_box">
                <span htmlFor="death">{t("death")}</span>
                <Field
                  id="death"
                  name="death"
                  type="date"
                  placeholder={t("death")}
                />
                {/* {errors.death && touched.death ? (
                  <div className="errors_container">{errors.death}</div>
                ) : null} */}
              </div>
              <div className="input_box">
                <span htmlFor="biography">{t("bio")}</span>
                <Field
                  id="biography"
                  name="biography"
                  type="text"
                  placeholder={t("bio")}
                />
                {errors.biography && touched.biography ? (
                  <div className="errors_container">{errors.biography}</div>
                ) : null}
              </div>
              <div className="input_box">
                <input type="submit" value={t("addParent")} />
              </div>
            </Form>
            <p className="form-footer"></p>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default ModifyParents;
