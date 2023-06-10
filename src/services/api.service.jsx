/* eslint-disable no-undef */
import axios from "axios";

const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

export const signIn = async (data) => {
  return await axios.post(`${apiKey}api/v1/auth/sign_in`, data);
};

export const retrieveUsers = async (data) => {
  const res = await axios.get(`${apiKey}api/v1/users`, {
    headers: data,
  });
  return await res.data;
};

export const retrieveChannels = async (data) => {
  const res = await axios.get(`${apiKey}api/v1/channels`, {
    headers: data,
  });
  return res.data;
};

export const createChannel = async ({ data, name, user_ids }) => {
  return await axios.post(
    `${apiKey}api/v1/channels`,
    { name, user_ids },
    { headers: data }
  );
};

export const retrieveChannel = async (data, id) => {
  const res = await axios.get(`${apiKey}api/v1/channels/${id}`, {
    headers: data,
  });
  return await res.data;
};

export const addMember = async ({ data, id, member_id }) => {
  return await axios.post(
    `${apiKey}api/v1/channel/add_member`,
    { id, member_id },
    { headers: data }
  );
};
