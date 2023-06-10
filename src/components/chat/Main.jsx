/* eslint-disable react/prop-types */
import OpenDirectMessage from "../forms/OpenDirectMessage";
import ChatHeader from "./ChatHeader";
// import ChatInput from "./ChatInput";

const Main = (props) => {
  const { users, channel, modalOpen, isDirectMessageVisible } = props;

  return (
    <section className="flex-1">
      <ChatHeader users={users} channel={channel} modalOpen={modalOpen} />
      <OpenDirectMessage isDirectMessageVisible={isDirectMessageVisible} />
      {/* <div className="text-center">inner</div> */}
      {/* <ChatInput /> */}
    </section>
  );
};

export default Main;
