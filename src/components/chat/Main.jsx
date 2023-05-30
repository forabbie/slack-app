/* eslint-disable react/prop-types */
import ChatHeader from "./ChatHeader";
// import ChatInput from "./ChatInput";

const Main = (props) => {
  const { channel } = props;
  return (
    <>
      <section className="flex-1">
        <ChatHeader channel={channel} />
        {/* <div className="text-center">inner</div> */}
        {/* <ChatInput /> */}
      </section>
    </>
  );
};

export default Main;
