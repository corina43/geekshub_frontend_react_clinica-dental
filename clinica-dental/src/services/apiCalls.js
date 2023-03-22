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
 

export const getUserProfile = async (body, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = {
    username: body.username,
    password: body.password,
  };
  try {
    let res = await axios.patch(`${root}/users/edit`, bodyParameters, config);
    return res.data.resp;
  } catch (error) {
    console.error(error);
  }
};

export const getPatientInfo = async (token) => {

  let config = {
      headers: {
          'Authorization': 'Bearer '+ token,  
      }
  }

  return await axios.get(`${root}/patient/profile`, config);
};