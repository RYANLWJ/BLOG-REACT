import axios from './index.js';
import fetchJsonp from 'fetch-jsonp';

const getRepos = function () {
  return axios.get('https://api.github.com/users/RYANLWJ/repos')
};
const getEpidemicData = function () {
  return new Promise((resolve, reject) => {
    fetchJsonp('https://interface.sina.cn/news/wap/fymap2020_data.d.json')
      .then(res => res.json())
      .then(resolve)
      .catch(reject)
  })
};

export {
  getRepos,
  getEpidemicData
};