import Head from "next/head";
import { connect } from "react-redux";
import ContactForm from "../components/ContactForm";

const Contact = ({ t }) => {
  return (
    <div className="container">
      <Head>
        <title>{t("contact.title")}</title>
      </Head>

      <section className="section">
        <h1 className="title">{t("contact.title")}</h1>
        <ContactForm />
      </section>
    </div>
  );
};

const mapState = ({ Locale }) => ({ t: (key) => Locale.useTranslation(key) });

export default connect(mapState)(Contact);
