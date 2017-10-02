
const apiUsername = username => `https://api.github.com/users/${username}`;


class githubApi {
  static getProfile(username) {
    return fetch(apiUsername(username))
      .then(response => {
        if (!response.ok) {
          throw Error(username + ' '+ response.statusText.toLocaleLowerCase());
        }
        return response;
      })
      .then(data => {
        return data.json();
      }).then(data => {
        return data;
      });
  }
}

export default githubApi;