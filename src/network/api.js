import RequestHelper from '../helpers/request_helper';
import {appConfig} from '../config/config';

export default class Api {

/*
  * get users data 
  * params : page, per_page
  * response: page, per_page, total_pages, total, data
 */

  static getUsers(params) {
    return RequestHelper.get(appConfig.apiUrl + 'users', params);
  }

}
