class Session {
  setToken(token) {
    return localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }
}

export const { setToken, getToken } = new Session();
