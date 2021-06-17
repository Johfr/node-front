import { requestAPI } from './api.js';

export const getUid = async () => {
  try {
    let response = await requestAPI('GET', `http://localhost:3000/api/stuff/` + location.pathname.split('/')[2]);
    const userIdStored = sessionStorage.getItem('UID')

    let userId = null

    if (userIdStored === response.data.userId) {
      return userId = response.data.userId;
    }
    
    return userId;
  } catch (error) {
    throw new Error(error.message);
  }
};
