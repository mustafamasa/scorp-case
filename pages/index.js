import Head from "next/head";
import { connect } from "react-redux";

const Home = ({ t }) => {
  return (
    <div className="container">
      <Head>
        <title>{t("main.title")}</title>
      </Head>
      <section className="section">
        <h1 className="title">{t("main.title")}</h1>
        <p>{t("main.paragraph")}</p>
      </section>
    </div>
  );
};

const mapState = ({ Locale }) => ({ t: (key) => Locale.useTranslation(key) });

export default connect(mapState)(Home);
