import Modal from "./Modal";
import Input from "../forms/Input";
import Button from "../forms/Button";
import { useState } from "react";

/* eslint-disable react/prop-types */
const ChannelFormModal = (props) => {
  const { open, auth, users, createChannel, fetchChannels, onClick } = props;

  const [channelName, setChannelName] = useState("");
  const [serchUser, setSerchUser] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputChannelNameClass = [
    "input input-bordered w-full",
    hasError ? "input-error" : "",
  ].join(" ");

  const errorMessageClass = [
    "text-error text-start",
    hasError ? "" : "hidden",
  ].join(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createChannel({
        data: auth.headers,
        name: channelName,
        user_ids: [],
      });
      if (!response.data.errors) {
        onClick();
        fetchChannels();
      } else {
        setHasError(true);
        setErrorMessage(response.data.errors);
      }
    } catch (error) {
      console.log("e", error);
    }
  };

  const onChannelNameChange = (value) => {
    setChannelName(value);
  };

  const onSearchuUser = (value) => {
    setSerchUser(value);
  };

  const onCancel = () => {
    setHasError(false);
    onClick();
  };

  return (
    <Modal open={open}>
      <h3 className="font-bold text-lg text-start">Create a channel</h3>
      <div className="pt-4">
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full mb-4">
            <label
              htmlFor="withdraw-input"
              className="text-md text-start normal-case mb-2"
            >
              Channel Name
            </label>
            <Input
              type="text"
              label={""}
              input={channelName}
              placeholder=""
              className={inputChannelNameClass}
              onChange={onChannelNameChange}
            />
            <p className={errorMessageClass}>{errorMessage}</p>
          </div>

          <div className="form-control w-full">
            <label
              htmlFor="withdraw-input"
              className="text-md text-start normal-case mb-2"
            >
              Add user
            </label>
          </div>
          <div className="modal-action">
            <Button
              type="button"
              onClick={onCancel}
              className="btn btn-outline"
              label={"Cancel"}
            />
            <Button type="submit" className="btn" label={"Create"} />
          </div>
        </form>
      </div>
    </Modal>
  );
};
export default ChannelFormModal;
