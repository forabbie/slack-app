import Header from "../components/Header";
import Sidbar from "../components/Sidebar";
import Main from "../components/chat/Main";
// import { user, auth } from "../constant/UserConst";
import {
  retrieveUsers,
  retrieveChannels,
  createChannel,
} from "../services/api.service";
import { useEffect, useState } from "react";
import { getSessionStorage } from "../services/storage.service";
import ChannelFormModal from "../components/modals/ChannelFormModal";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [channels, setChannels] = useState([]);
  const [channel, setChannel] = useState([]);
  const [open, setOpen] = useState(false);
  const [isDirectMessageVisible, setIsDirectMessageVisible] = useState(false);
  const auth = getSessionStorage("loggedInUserAuth");
  // console.log("auth", auth);
  const fetchUsers = async () => {
    try {
      const response = await retrieveUsers(auth.headers);
      if (response) {
        setUsers(response.data);
      }
      // console.log(data.data);
    } catch (error) {
      console.log("e", error);
    }
  };
  const fetchChannels = async () => {
    try {
      const response = await retrieveChannels(auth.headers);
      if (response) {
        setChannels(response.data);
      }
      // console.log(data.data);
    } catch (error) {
      console.log("e", error);
    }
  };
  useEffect(() => {
    fetchUsers();
    fetchChannels();
  }, []);

  const handleToggleChannelModal = () => {
    setOpen((prev) => !prev);
  };

  const toggleDirectMessage = () => {
    setIsDirectMessageVisible(!isDirectMessageVisible);
  };

  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <main className="h-full">
          <div className="flex h-full">
            <Sidbar
              auth={auth}
              channels={channels}
              setChannels={setChannels}
              setChannel={setChannel}
              handleToggleChannelModal={() => handleToggleChannelModal()}
              toggleDirectMessage={toggleDirectMessage}
            />
            <Main 
              channel={channel} 
              setChannel={setChannel}
              isDirectMessageVisible={isDirectMessageVisible}
            />
          </div>
        </main>
      </div>
      <ChannelFormModal
        auth={auth}
        users={users}
        open={open}
        setOpen={setOpen}
        createChannel={createChannel}
        fetchChannels={() => fetchChannels()}
        onClick={() => handleToggleChannelModal()}
      />
    </>
  );
};

export default Home;
