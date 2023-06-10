import Modal from "./Modal";
import Button from "../forms/Button";
import AutoSuggestInput from "../forms/AutoSuggestInput";
import { useState } from "react";
import PropTypes from "prop-types";

const AddMembersModal = (props) => {
  const {
    open,
    auth,
    users,
    channel,
    setUsers,
    addMember,
    fetchUsers,
    fetchChannel,
    onClick,
  } = props;

  const [members, setMembers] = useState([]);
  const [selectMultiple, setSelectMultiple] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [inputValue, setInputValue] = useState("");

  const errorMessageClass = [
    "text-error text-start",
    hasError ? "" : "hidden",
  ].join(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const membersIDs = members.map((member) => member.id) || [];
      const response = await addMember({
        data: auth.headers,
        id: channel.id,
        member_id: membersIDs[0],
      });
      if (!response.data.errors) {
        onClick();
        setMembers([]);
        setInputValue("");
        fetchChannel();
      } else {
        setHasError(true);
        setErrorMsg(response.data.errors);
      }
    } catch (error) {
      console.log("e", error);
    }
  };

  const removeMember = (member) => {
    setHasError(false);
    setMembers((prevMembers) => prevMembers.filter((m) => m.id !== member.id));
    setUsers((prevUsers) => [...prevUsers, member]);
  };

  const onCancel = () => {
    fetchUsers();
    setMembers([]);
    setInputValue("");
    setHasError(false);
    onClick();
  };

  return (
    <Modal open={open}>
      <h3 className="font-bold text-lg text-start">
        Add member to the channel
      </h3>
      <div className="pt-4">
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full">
            <label
              htmlFor="withdraw-input"
              className="text-md text-start normal-case mb-2"
            >
              Search user(s)
            </label>
            <AutoSuggestInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              users={users}
              setUsers={setUsers}
              members={members}
              setMembers={setMembers}
              selectMultiple={selectMultiple}
            />
            {members.length > 0 && (
              <div className="text-start mt-3">
                Selected Member:{" "}
                <span className={errorMessageClass}>*{errorMsg}</span>
                <div className="menu shadow border bg-base-100 mt-2 rounded-lg dropdown-content overflow-y-scroll max-h-48">
                  <ul className="">
                    {members.length > 0 &&
                      members
                        .map((user, index) => (
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
                              <div
                                onClick={() => removeMember(user)}
                                className="hidden sm:flex sm:flex-col sm:items-end"
                              >
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
                        ))
                        .splice(0, 1)}
                  </ul>
                </div>
              </div>
            )}
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

AddMembersModal.propTypes = {
  open: PropTypes.bool,
  auth: PropTypes.object,
  users: PropTypes.array,
  channel: PropTypes.object,
  setUsers: PropTypes.func,
  addMember: PropTypes.func,
  fetchUsers: PropTypes.func,
  fetchChannel: PropTypes.func,
  onClick: PropTypes.func,
};
export default AddMembersModal;
