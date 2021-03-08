import { useState, useRef } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import LanguageSwitch from "./LanguageSwitch";

const Login = ({ t, login }) => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const submitButton = useRef(null);

  const nameRequired = t("loginForm.name.errorMessage.required");
  const emailRequired = t("loginForm.email.errorMessage.required");
  const passwordRequired = t("loginForm.password.errorMessage.required");
  const invalidEmail = t("loginForm.email.errorMessage.invalid");
  const passwordTooShort = t("loginForm.password.errorMessage.tooShort");

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required(nameRequired),
    email: Yup.string().email(invalidEmail).required(emailRequired),
    password: Yup.string().min(6, passwordTooShort).required(passwordRequired),
  });

  const toogleModal = () => setShowModal((showModal) => !showModal);

  const onSubmit = (values, { resetForm }) => {
    setLoading(true);
    login(values)
      .then(() => {
        toogleModal();
        resetForm();
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <a className="button is-primary" onClick={() => toogleModal()}>
        {t("nav.login")}
      </a>
      <div className={`modal ${showModal && "is-active"}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{t("loginForm.title")}</p>
            <LanguageSwitch />
          </header>

          <section className="modal-card-body">
            <Formik
              validationSchema={SignupSchema}
              onSubmit={onSubmit}
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="field">
                    <label className="label">{t("loginForm.name.label")}</label>
                    <Field name="name" className="input" />
                    {errors.name && touched.name ? (
                      <p className="has-text-danger">{errors.name}</p>
                    ) : null}
                  </div>

                  <label className="label">{t("loginForm.email.label")}</label>
                  <Field name="email" type="email" className="input" />
                  {errors.email && touched.email ? (
                    <p className="has-text-danger">{errors.email}</p>
                  ) : null}

                  <label className="label">
                    {t("loginForm.password.label")}
                  </label>
                  <Field name="password" type="password" className="input" />
                  {errors.password && touched.password ? (
                    <p className="has-text-danger">{errors.password}</p>
                  ) : null}

                  <input
                    type="submit"
                    ref={submitButton}
                    style={{ display: "none" }}
                  />
                </Form>
              )}
            </Formik>
          </section>

          <footer className="modal-card-foot">
            <button
              className={`button is-primary ${loading && "is-loading"}`}
              onClick={() => submitButton.current.click()}
            >
              {t("loginForm.okButton")}
            </button>
            <button className="button" onClick={() => toogleModal()}>
              {t("loginForm.cancelButton")}
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

const mapState = ({ Locale }) => ({
  t: (key) => Locale.useTranslation(key),
});
const mapDispatch = ({ User }) => ({ ...User });

export default connect(mapState, mapDispatch)(Login);
