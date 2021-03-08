import Link from "next/link";
import { connect } from "react-redux";
import LanguageSwitch from "./LanguageSwitch";
import Login from "./Login";
import UserInfo from "./UserInfo";

const Header = ({ t, loggedIn }) => {
  /*
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * The Bulma package does not come with any JavaScript.
   * Here is however an implementation example, which toggles the class is-active on both the navbar-burger
   * and the targeted navbar-menu, in Vanilla Javascript.
   */
  const toggleStyles = () => {
    document.querySelector("#burger").classList.toggle("is-active");
    document.querySelector("#navbarmenu").classList.toggle("is-active");
  };

  return (
    <header>
      <nav className="navbar" role="navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="/vercel.svg" />
            </a>
            <a
              id="burger"
              onClick={toggleStyles}
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarmenu"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarmenu" className="navbar-menu">
            <div className="navbar-start">
              <Link href="/">
                <a className="navbar-item">{t("nav.home")}</a>
              </Link>
              <Link href="/contact">
                <a className="navbar-item">{t("nav.contact")}</a>
              </Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <LanguageSwitch />
                {loggedIn ? <UserInfo /> : <Login />}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

const mapState = ({ Locale, User }) => ({ ...User, t: (key) => Locale.useTranslation(key) })

export default connect(mapState)(Header);
