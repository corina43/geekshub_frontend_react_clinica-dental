import axios from 'axios';

const root = "https://geekshubs-fsd-val-proyecto41-production-de02.up.railway.app"

export const logMe = async (body) => {

    return await axios.post(`${root}/auth/login`, body);
} 

export const bringUsers = async (token) => {
    let config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };

    return await axios.get(`${root}/api/users`, config);
}

export const createUserProfile = async (body) => {

  return await axios.post(`${root}/auth/register`, body)
};
 
export const gettUserProfile = async (body, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {
    username: body.username,
    password: body.password,
  };
  try {
    let res = await axios.patch(`${URL}/users/edit`, bodyParameters, config);
    return res.data.resp;
  } catch (error) {
    console.error(error);
  }
};