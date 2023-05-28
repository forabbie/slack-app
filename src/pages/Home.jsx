import Header from "../components/Header";
import Sidbar from "../components/Sidebar";
import Main from "../components/chat/Main";

const Home = () => {
  return (
    <>
      <Header />
      <main className="h-screen flex flex-col">
        <div className="flex h-full">
          <Sidbar />
          <Main />
        </div>
      </main>
    </>
  );
};

export default Home;
