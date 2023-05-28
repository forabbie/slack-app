import Header from "../components/Header";
import Sidbar from "../components/Sidebar";
import Main from "../components/chat/Main";

const Home = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <Header />
        <main className="h-full">
          <div className="flex h-full">
            <Sidbar />
            <Main />
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
