import Header from "../components/Header";
import Sidbar from "../components/Sidebar";
import Main from "../components/chat/Main";
import {
  retrieveUsers,
  retrieveChannel,
  retrieveChannels,
  createChannel,
  addMember,
} from "../services/api.service";
import {
  setSessionStorage,
  getSessionStorage,
} from "../services/storage.service";
import { useEffect, useState } from "react";
import ChannelFormModal from "../components/modals/ChannelFormModal";
import AddMembersModal from "../components/modals/AddMembersModal";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [channels, setChannels] = useState([]);
  const [channel, setChannel] = useState({});
  const [isDirectMessageVisible, setIsDirectMessageVisible] = useState(false);
  const [channelIndex, setChannelIndex] = useState(() => {
    const store = getSessionStorage("CH-Index", false);
    return parseInt(store) || 0;
  });

  const [modals, setModals] = useState({
    channelModalOpen: false,
    membersModalOpen: false,
  });
  const auth = getSessionStorage("loggedInUserAuth");

  const fetchUsers = async () => {
    try {
      const response = await retrieveUsers(auth.headers);
      if (response) {
        setUsers(response.data);
      }
    } catch (error) {
      console.log("e", error);
    }
  };

  const fetchChannels = async () => {
    try {
      const response = await retrieveChannels(auth.headers);
      if (response) {
        const channelID = response.data[0].id;
        setChannels(response.data);
        if (getSessionStorage("CH-Index", false)) return;
        setSessionStorage("CH-Index", channelID, false);
      }
    } catch (error) {
      console.log("e", error);
    }
  };

  const fetchChannel = async (id) => {
    try {
      const response = await retrieveChannel(auth.headers, id);
      if (response) {
        setChannel(response.data);
      }
    } catch (error) {
      console.log("e", error);
    }
  };
  useEffect(() => {
    fetchUsers();
    fetchChannels();
    fetchChannel(parseInt(getSessionStorage("CH-Index", false)));
  }, []);

  const handleToggleModal = (modalName) => {
    setModals((prevState) => ({
      ...prevState,
      [modalName]: !prevState[modalName],
    }));
  };

  const toggleDirectMessage = () => {
    setIsDirectMessageVisible(!isDirectMessageVisible);
  };

  return (
    <>
      <div className="h-screen flex flex-col">
        <Header auth={auth} />
        <main className="h-full">
          <div className="flex h-full">
            <Sidbar
              channels={channels}
              setChannel={setChannel}
              channelIndex={channelIndex}
              fetchChannel={fetchChannel}
              setChannelIndex={setChannelIndex}
              toggleDirectMessage={toggleDirectMessage}
              modalOpen={() => handleToggleModal("channelModalOpen")}
            />
            <Main
              users={users}
              channel={channel}
              setChannel={setChannel}
              isDirectMessageVisible={isDirectMessageVisible}
              modalOpen={() => handleToggleModal("membersModalOpen")}
            />
          </div>
        </main>
      </div>
      <ChannelFormModal
        open={modals.channelModalOpen}
        auth={auth}
        users={users}
        setUsers={setUsers}
        createChannel={createChannel}
        fetchUsers={() => fetchUsers()}
        fetchChannels={() => fetchChannels()}
        onClick={() => handleToggleModal("channelModalOpen")}
      />
      <AddMembersModal
        open={modals.membersModalOpen}
        auth={auth}
        users={users}
        channel={channel}
        setUsers={setUsers}
        addMember={addMember}
        fetchUsers={() => fetchUsers()}
        fetchChannels={() => fetchChannels()}
        fetchChannel={() =>
          fetchChannel(parseInt(getSessionStorage("CH-Index", false)))
        }
        onClick={() => handleToggleModal("membersModalOpen")}
      />
    </>
  );
};

export default Home;
