import axios from 'axios';

const instance = axios.create({
  timeout: 30000,
});

const handleError = error => {
  console.log('Request error');
};

export default class RequestHelper {
  static async getHeader(): void {
    return {
      'Content-Type': 'application/json'
    };
  }

  static async get(url: string, params: {}): void {
    const header = await this.getHeader();
    return instance
      .get(url, {
        headers: header,
        params: params,
      })
      .then(data => {
        return data.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }

}
