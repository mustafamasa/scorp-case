import { connect } from "react-redux";

const Footer = ({ t }) => {
  return (
    <footer>
      <div className="container has-text-centered">
        <p>{t('footer')}</p>
      </div>
    </footer>
  );
};


const mapState = ({ Locale }) => ({ t: (key) => Locale.useTranslation(key) })

export default connect(mapState)(Footer);