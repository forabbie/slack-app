/* eslint-disable react/prop-types */
import OpenDirectMessage from "../forms/OpenDirectMessage";
import ChatHeader from "./ChatHeader";
// import ChatInput from "./ChatInput";

const Main = (props) => {
  const {
    channel,
    users,
    modalOpen,
    isDirectMessageVisible,
    handleSubmitName,
    onHideForm,
    fetchUsers,
    userList,
    submittedNames,
  } = props;

  return (
    <section className="flex-1">
      <ChatHeader users={users} channel={channel} modalOpen={modalOpen} />
      <OpenDirectMessage
        isDirectMessageVisible={isDirectMessageVisible}
        handleSubmitName={handleSubmitName}
        onHideForm={onHideForm}
        nameHeader={channel}
        fetchUsers={fetchUsers}
        userList={userList}
        submittedNames={submittedNames}
      />
    </section>
  );
};

export default Main;
