export const User = {
  state: {
    loggedIn: false,
    userInfo: {
      email: "mail@mustafamasa.com",
      name: "Mustafa Maşa",
      password: "xw9l05pao"
    }
  },
  reducers: {
    setUserInfo(state, userInfo) {
      return { ...state, loggedIn: true, userInfo };
    },
    logout() {
      return { loggedIn: false, userInfo: {} };
    },
  },
  effects: (dispatch) => ({
    async login(data) {
      await new Promise((resolve) => { setTimeout(resolve, 1500) })
      dispatch.User.setUserInfo(data)
    }
  })
};
