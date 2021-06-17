import { requestAPI } from './api.js';

export const postDatas = async () => {
  try {
    let response = await requestAPI('POST', `http://localhost:3000/api/stuff`);
    if (response.status === 200) {
      return response;
    }
    return response;
  } catch (error) {
    return error;
  }
};