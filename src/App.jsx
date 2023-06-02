import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import "./App.css";
// import { setSessionStorage, getSessionStorage } from "./services/storage.service";
// import ProtectedRoutes from "./components/helper//ProtectedRoutes.tsx";

function App() {
  // const constructor = () => {
  //   const storedUsers = getSessionStorage("users");
  //   if (!storedUsers) {
  //     setSessionStorage("users", users, false);
  //   }
  // };
  // constructor();

  // const setLoggedInUser = () => {
  //   // static
  //   const loggedInUser = { isLoggedin: true, email: "lexi@email.com" } || {};
  //   setSessionStorage("loggedInUser", loggedInUser, true);
  // };
  // setLoggedInUser();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
