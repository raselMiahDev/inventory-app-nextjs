class Session {
  setToken(token) {
    return localStorage.setItem("token", token);
  }
  getToken() {
    const token = localStorage.getItem("token");
    return token;
  }
}

export const { setToken, getToken } = new Session();
