import Header from "../components/Header";
import Sidbar from "../components/Sidebar";
import Main from "../components/chat/Main";
import { retrieveChannels } from "../services/channel.service";
import { auth } from "../constant/UserConst";
import { useEffect, useState } from "react";

const Home = () => {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const constructor = async () => {
      try {
        const response = await retrieveChannels(auth);
        if (response) {
          setChannels(response.data);
          // console.log("channels", channels);
        }
        // console.log(data.data);
      } catch (error) {
        console.log("e", error);
      }
    };
    constructor();
  }, []);

  useEffect(() => {
    console.log("channels", channels);
  }, [channels]);

  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <main className="h-full">
          <div className="flex h-full">
            <Sidbar channels={channels} setChannels={setChannels} />
            <Main />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
