import { requestAPI } from './api.js';

export const getDatas = async () => {
  try {
    let response = await requestAPI('GET', `http://localhost:3000/api/stuff`);
    if (response.status === 200) {
      console.log(response)
    }
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
