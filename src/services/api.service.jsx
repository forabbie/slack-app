/* eslint-disable no-undef */
import axios from "axios";

export const signUpUser = async ({ email, password, passwordConfirmation }) => {
  const signUpResponse = await axios.post(
    'http://206.189.91.54/api/v1/auth/',
    {
      email,
      password,
      password_confirmation: passwordConfirmation,
    },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const { 'access-token': accessToken, client, expiry, uid } = signUpResponse.headers;

  return {
    signUpResponse: signUpResponse.data,
    accessToken,
    client,
    expiry,
    uid,
  };
};

export const retrieveUserList = async ({ accessToken, client, expiry, uid }) => {
  const userListResponse = await axios.get('http://206.189.91.54/api/v1/users', {
    headers: {
      'access-token': accessToken,
      client,
      expiry,
      uid,
    },
  });

  return userListResponse.data;
};

export const loginUser = async ({ email, password }) => {
  const response = await axios.post(
    'http://206.189.91.54/api/v1/auth/sign_in',
    {
      email,
      password,
    }
  );
  return response.data;
};

export const retrieveUsers = async (data) => {
  const res = await axios.get("http://206.189.91.54/api/v1/users", {
    headers: data,
  });
  return await res.data;
};

export const retrieveChannels = async (data) => {
  const res = await axios.get("http://206.189.91.54/api/v1/channels", {
    headers: data,
  });
  return res.data;
};

export const createChannel = async ({ data, name, user_ids }) => {
  return await axios.post(
    "http://206.189.91.54/api/v1/channels",
    { name, user_ids },
    { headers: data }
  );
};

export const retrieveChannel = async (data, id) => {
  const res = await axios.get(`http://206.189.91.54/api/v1/channels/${id}`, {
    headers: data,
  });
  return await res.data;
};
