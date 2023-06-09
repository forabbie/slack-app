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
  const [submittedNames, setSubmittedNames] = useState([])
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
        setChannels(response.data);
      }
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

  const hideForm = () => {
    setIsDirectMessageVisible(false);
  };


  const handleSubmitName = (name) => {
    const updatedNames = [...submittedNames, name];
    setSubmittedNames(updatedNames);
    sessionStorage.setItem('submittedNames', JSON.stringify(updatedNames))
  };

  useEffect(() => {
    const savedNames = sessionStorage.getItem('submittedNames');
    if (savedNames) {
      try {
        const parsedNames = JSON.parse(savedNames)
        // console.log('parsedNames:', parsedNames)
        setSubmittedNames(parsedNames)
      } 
      catch (error) {
        console.error('Error parsing JSON:', error)
      }
    }
  }, []);

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
              submittedNames={submittedNames}
            />
            <Main
              channel={channel}
              setChannel={setChannel}
              isDirectMessageVisible={isDirectMessageVisible}
              onHideForm = {hideForm}
              handleSubmitName = {handleSubmitName}
              fetchUsers={fetchUsers}
              userList={users}
              submittedNames={submittedNames}
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
