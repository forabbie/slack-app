/* eslint-disable no-undef */
import axios from "axios";

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
