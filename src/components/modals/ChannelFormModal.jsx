import Modal from "./Modal";
import Input from "../forms/Input";
import Button from "../forms/Button";
import { useState } from "react";

/* eslint-disable react/prop-types */
const ChannelFormModal = (props) => {
  const { open, auth, user, users, createChannel, fetchChannels, onClick } =
    props;

  const [channelName, setChannelName] = useState("");
  const [members, setMembers] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inputClass = [
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
        data: auth,
        name: channelName,
        user_ids: [],
      });
      if (response) {
        onClick();
        fetchChannels();
      }
      // console.log(data.data);
    } catch (error) {
      console.log("e", error);
    }
    // console.log("log me");
  };

  const onChannelNameChange = (value) => {
    setChannelName(value);
  };

  // const onMemberChange = (value) => {
  //   setMember(value);
  // };

  const onCancel = () => {
    // console.log("onCancel");
    setHasError(false);
    onClick();
  };

  return (
    <Modal open={open}>
      <h3 className="font-bold text-lg text-start">Create a channel</h3>
      <div className="pt-4">
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full">
            <label
              htmlFor="withdraw-input"
              className="text-md text-start normal-case mb-3"
            >
              Name
            </label>
            <Input
              type="text"
              label={""}
              input={channelName}
              placeholder="# channel name"
              className={inputClass}
              onChange={onChannelNameChange}
            />
            <p className={errorMessageClass}>{errorMessage}</p>
          </div>

          <div className="form-control w-full">
            {/* <label
              htmlFor="withdraw-input"
              className="text-md text-start normal-case mb-3"
            >
              Add members:
            </label>
            <select
              className="select select-bordered w-full"
              value={member}
              onChange={onMemberChange}
              placeholder="ex: 01984327"
            >
              <option value={""}>Select user</option>
              {users.map((person) => (
                <option key={person.id} value={person.id}>
                  {person.email}
                </option>
              ))}
            </select> */}
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
