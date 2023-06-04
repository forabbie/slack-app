/* eslint-disable react/prop-types */
import OpenDirectMessage from "../forms/OpenDirectMessage";
import ChatHeader from "./ChatHeader";
// import ChatInput from "./ChatInput";

const Main = (props) => {
  const { channel, isDirectMessageVisible, handleSubmitName, onHideForm, fetchUsers, userList } = props;
  
  return (
    <>
      <section className="flex-1">
        <ChatHeader channel={channel} />
        <OpenDirectMessage 
          isDirectMessageVisible={isDirectMessageVisible} 
          handleSubmitName={handleSubmitName} 
          onHideForm={onHideForm}
          nameHeader={channel}
          fetchUsers={fetchUsers}
          userList={userList}/>
        {/* <div className="text-center">inner</div> */}
        {/* <ChatInput /> */}
      </section>
    </>
  );
};

export default Main;
