import axios from 'axios';

const url = 'http://localhost:5000';

export const addMessage = async (data) => {
  try {
    const response = await axios.post(`${url}/api/messages`, data, {
        headers: {
            'Content-Type': 'application/json',
        },
    });

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