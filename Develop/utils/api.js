const axios = require("axios");

function getUsers(username) {
  const queryURL = `https://api.github.com/users/${username}`;
  console.log(queryURL);
  return axios.get(queryURL).then(function (res) {
    return res.data;
  });
}

module.exports = getUsers;
