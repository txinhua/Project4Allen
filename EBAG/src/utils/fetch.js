import API from '../api/config'

const normalheader = {
    
}

function get(url,opts = {}) {
    opts = {...opts, method:'GET',...normalheader}
    return _fetchData(url,opts)
}

function post(url,opts = {}) {
    opts = {...opts, method:'POST',...normalheader}
    return _fetchData(url,opts)
}

function _getFullPathUrl(url) {
  return API.fullpath(url)
}

async function _fetchData(url, opts){
  return fetch(_getFullPathUrl(url), opts)
      .then(response => response.json())
      .then(responseJSON => {
        return responseJSON
      })
      .catch(error => {
        console.error(error);
      });
}

export default {
    get,
    post
}

