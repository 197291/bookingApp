import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL = './hotels.json';

class Api {
  static _instance: Api = new Api();

  static getInstance(): Api {
    return Api._instance;
  }

  constructor() {
    if (Api._instance) {
      throw new Error('Instantiation failed: use Api.getInstance() instead of new.');
    }
  }

  get(url: string, config?: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      axios
        .get(this.getUrl(url), config)
        .then(({ data }) => resolve(data))
        .catch((error: any) => reject(error));
    });
  }

  put(url: string, payload: any = {}, config?: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      axios
        .put(this.getUrl(url), payload, config)
        .then(({ data }) => resolve(data))
        .catch((error: any) => reject(error));
    });
  }

  post(url: string, payload: any = {}, config?: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      axios
        .post(this.getUrl(url), payload, config)
        .then(({ data }) => resolve(data))
        .catch((error: any) => reject(error));
    });
  }

  delete(url: string, config?: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
      axios
        .delete(this.getUrl(url), config)
        .then(({ data }) => resolve(data))
        .catch((error: any) => reject(error));
    });
  }

  get CancelToken() {
    return axios.CancelToken;
  }

  private getUrl(url: string): string {
    return url || BASE_URL;
  }
}

export default Api.getInstance();
