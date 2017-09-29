
const apiUsername = username => `https://api.github.com/users/${username}`;


class githubApi {
  static getProfile(username) {
    return fetch(apiUsername(username))
      .then(data => {
        return data.json();
      }).then(data => {
        return data;
      });
  }
}

export default githubApi;