import axios from './index.js';

const getRepos = function() {
  return axios.get('https://api.github.com/users/RYANLWJ/repos')
};

export { getRepos };
