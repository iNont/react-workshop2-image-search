import axios from 'axios';
import config from './config';
import './ExternalFunctions';

const URL_PREFIX = "https://api.unsplash.com";
const Axios = axios.create({
  baseURL: URL_PREFIX,
  timeout: 10000
});

class API {
  static get = function (ele) {
    let path = ele.path + (ele.data ? window.jsonToQueryString(ele.data) : "");
    console.log("CALL GET "+path);
    path += "&client_id="+config.accessKey
    return Axios.get(path)
      .then( response => response )
  }
  static post = function (ele) {
    let path = ele.path
    let data = ele.data || {};
    let config = {};
    console.log("CALL POST "+path);
    return Axios.post(path, data, config)
      .then( response => response )
  }
}

export default API;
