/* eslint-disable no-undef */
import axios from "axios";

export const retrieveChannels = async (data) => {
  const res = await axios.get("http://206.189.91.54/api/v1/channels", {
    headers: data,
  });
  return res.data;
};

export const createChannel = async ({ data, name, user_ids }) => {
  return await axios.post(
    process.env.URL + "api/v1/channels",
    { name, user_ids },
    { headers: data }
  );
};

export const retrieveChannelDetails = async (data, id) => {
  const res = await axios.get(process.env.USER_ID + `api/v1/channels/${id}`, {
    headers: data,
  });
  return await res.data;
};
