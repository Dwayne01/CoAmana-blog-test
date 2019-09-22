import axios from 'axios';

export const baseURL = 'https://epower.ng/wp-json/wp/v2';


axios.defaults.baseURL = baseURL;

const DEFAULT_CONFIG = { headers: { 'Content-Type': 'application/json' } };

const getAPIConfig = (contentType = 'application/json') => ({
  headers: {
    'Content-Type': contentType,
  }
});

const processResponse = (promise, successCB, failureCB) => {
  if (!(promise instanceof Promise)) { throw Error('invalid argument: promise must be an instance of Promise'); }
  promise.then((response) => {
    successCB(response.data);
  })
    .catch(error => {
      const message = getErrorMessage(error);
      failureCB(message);
    });
};

const getErrorMessage = error => {
  let errorValue = error;
  if ((!error.response || !error.response.data) && error.message) {
    return error.message;
  }
  errorValue = error.response.data;
  if (errorValue.message) {
    return errorValue.message;
  }
  if (errorValue[0] && errorValue[0].message) {
    return errorValue[0].message;
  }
  return JSON.stringify(errorValue);
}

const post = (url, data, successCB, failureCB, config = DEFAULT_CONFIG, requestParams = {}) => {
  processResponse(axios.post(url, data, { ...config, params: requestParams }), successCB, failureCB);
};




export default {
  get: (url, params = {}) => new Promise((resolve, reject) => {
    processResponse(axios.get(url, { ...getAPIConfig(), params }), responseData => resolve(responseData), error => reject(error));
  }),

  post: (url, data, contentType = 'application/json', params = {}) => new Promise((resolve, reject) => {
    post(url, data, responseData => resolve(responseData), error => reject(error), getAPIConfig(contentType), params);
  }),
  getAPIConfig,
  baseURL
};
