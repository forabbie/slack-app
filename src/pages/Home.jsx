import Header from "../components/Header";
import Sidbar from "../components/Sidebar";
import Main from "../components/chat/Main";

const Home = () => {
  return (
    <>
      <body className="h-screen flex flex-col">
        <Header />
        <main className="h-full">
          <div className="flex h-full">
            <Sidbar />
            <Main />
          </div>
        </main>
      </body>
    </>
  );
};

export default Home;
