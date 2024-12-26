import axios from 'axios';

//Local
//const url = 'http://localhost:8080/';
//Production
const url = 'https://rajeshs.co.in';

export const addMessage = async (data) => {
  try {
    const response = await axios.post(`${url}/api/messages`, data);

    return response.data;
  } catch (error) {
    console.error('Error while sending message:', error);
    return null;
  }
};

export const getMessage = async () => {
  try {
    const response = await axios.get(`${url}/api/messages`, {
    });
    return response.data;
  } catch (error) {
    console.log('Error while calling getMessage API', error);
  }
};