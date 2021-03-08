import { connect } from "react-redux";
import TurkeyFlag from "../public/images/flags/turkey.svg";
import UnitedKingdomFlag from "../public/images/flags/united-kingdom.svg";

const flagStyle = {
  height: 48,
  cursor: 'pointer',
  marginRight: 16
}

const LanguageSwitch = ({ locale, setLocale }) => {
  if (locale === "tr")
    return <img src={UnitedKingdomFlag} style={flagStyle} onClick={() => setLocale("en")} />

  return <img src={TurkeyFlag} style={flagStyle} onClick={() => setLocale("tr")} />
}

const mapState = ({ Locale }) => ({ ...Locale })
const mapDispatch = ({ Locale }) => ({ setLocale: (lang) => Locale.setLocale(lang) })

export default connect(mapState, mapDispatch)(LanguageSwitch);