import { connect } from "react-redux";

const UserInfo = ({ t, userInfo, logout }) => {
  const { name, email } = userInfo;

  return (
    <div className="dropdown is-hoverable">
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu4"
        >
          <span>{name}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div
        className="dropdown-menu"
        id="dropdown-menu4"
        role="menu"
      >
        <div className="dropdown-content">
          <a className="dropdown-item">
            {email}
          </a>
          <hr className="dropdown-divider" />
          <a onClick={() => logout()} className="dropdown-item">
            {t('nav.userInfo.logout')}
          </a>
        </div>
      </div>
    </div>
  )
}

const mapState = ({ User, Locale }) => ({
  ...User,
  t: (key) => Locale.useTranslation(key)
})

const mapDispatch = ({ User }) => ({ ...User })

export default connect(mapState, mapDispatch)(UserInfo);