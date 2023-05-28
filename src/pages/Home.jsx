import Header from "../components/Header";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <div className="h-screen flex flex-col">
          <div className="w-full">
            <Header />
          </div>
          <div className="flex h-full overflow-hidden">
            {/* <Sidebar/>
                <Chat/> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
