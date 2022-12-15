function fetchUser() {
    return axios.get(`${VUE_APP_LOCAL_URI}users`);
  }