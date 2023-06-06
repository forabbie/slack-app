import Modal from "./Modal";
import Input from "../forms/Input";
import Button from "../forms/Button";
import AutoSuggestInput from "../forms/AutoSuggestInput";
import { useState } from "react";

/* eslint-disable react/prop-types */
const ChannelFormModal = (props) => {
  const { open, auth, users, setUsers, createChannel, fetchChannels, onClick } =
    props;

  const [channelName, setChannelName] = useState("");
  const [members, setMembers] = useState([]);
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
              Search user(s)
            </label>
            <AutoSuggestInput
              users={users}
              setUsers={setUsers}
              members={members}
              setMembers={setMembers}
            />
            <div className="text-start mt-3">
              Selected Members:
              {members.length > 0 && (
                <div className="menu shadow border bg-base-100 mt-2 rounded-lg dropdown-content overflow-y-scroll h-48">
                  <ul className="">
                    {members.length > 0 &&
                      members.map((user, index) => (
                        <li key={index} className="border-b">
                          <div className="flex gap-x-4">
                            <div className="avatar static placeholder">
                              <div className="bg-neutral-focus text-neutral-content rounded-full w-8 ring-2 ring-white">
                                <span className="text-sm">K</span>
                              </div>
                            </div>
                            <div className="min-w-0 flex-auto">
                              <p className="text-sm font-semibold leading-6 text-gray-900">
                                {user.email}
                              </p>
                            </div>
                            <div className="hidden sm:flex sm:flex-col sm:items-end">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </div>
                          </div>
                        </li>
                      ))}
                  </ul>
                </div>
              )}
            </div>
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
