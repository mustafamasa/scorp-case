import { useState } from "react";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import CountrySelect from "./CountrySelect";

const ContactForm = ({ t }) => {
  const { register, handleSubmit, errors } = useForm();
  const [selectedOption, setSelectedOption] = useState(null);

  const onSubmit = (data) => {
    console.log({
      ...data,
      countryCode: selectedOption?.value,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label className="label">{t("contact.form.name.label")}</label>
        <div className="control">
          <input
            type="text"
            name="name"
            className={`input ${errors.name && "is-danger"}`}
            ref={register({
              required: t("contact.form.name.errorMessage.required"),
            })}
          />
        </div>
        {errors.name && (
          <p className="has-text-danger">{errors?.name?.message}</p>
        )}
      </div>

      <div className="field">
        <label className="label">{t("contact.form.email.label")}</label>
        <div className="control">
          <input
            type="text"
            name="email"
            className={`input ${errors.email && "is-danger"}`}
            ref={register({
              required: t("contact.form.email.errorMessage.required"),
              pattern: /^\S+@\S+$/i,
            })}
          />
        </div>
        {errors.email && (
          <p className="has-text-danger">{errors?.email?.message}</p>
        )}
      </div>

      <div className="field">
        <label className="label">{t("contact.form.phoneNumber.label")}</label>
        <div className="control">
          <input
            type="text"
            name="phoneNumber"
            className={`input ${errors.phoneNumber && "is-danger"}`}
            ref={register({
              required: t("contact.form.phoneNumber.errorMessage.required"),
              pattern: {
                value: /^0|[1-9]\d*$/,
                message: t("contact.form.phoneNumber.errorMessage.onlyNumber"),
              },
            })}
          />
        </div>
        {errors.phoneNumber && (
          <p className="has-text-danger">{errors?.phoneNumber?.message}</p>
        )}
      </div>

      <div className="field">
        <label className="label">{t("contact.form.countrySelect.label")}</label>
        <div className="control">
          <CountrySelect
            countries={t("countries")}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">{t("contact.form.text.label")}</label>
        <div className="control">
          <textarea
            name="text"
            className={`textarea ${errors.text && "is-danger"}`}
            ref={register({
              required: t("contact.form.text.errorMessage.required"),
            })}
          />
        </div>
        <p className="has-text-danger">{errors?.text?.message}</p>
      </div>

      <input
        className="button is-primary"
        type="submit"
        value={t("contact.form.submit")}
      />
    </form>
  );
};

const mapState = ({ Locale }) => ({ t: (key) => Locale.useTranslation(key) });

export default connect(mapState)(ContactForm);
