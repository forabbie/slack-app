import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  setSessionStorage,
  // getSessionStorage,
} from "./services/storage.service";
// import ProtectedRoutes from "./components/helper//ProtectedRoutes.tsx";
import LoginPage from "./pages/Login.jsx";
// import Home from "./pages/Home.tsx";
import "./App.css";
// import SignUp from "./pages/SignUp.tsx";

function App() {
  const constructor = () => {
    // const storedUsers = getSessionStorage("users");
    // if (!storedUsers) {
    //   setSessionStorage("users", users, false);
    // }
  };
  constructor();

  const setLoggedInUser = () => {
    // static
    const loggedInUser = { isLoggedin: true, email: "lexi@email.com" } || {};
    setSessionStorage("loggedInUser", loggedInUser, true);
  };
  setLoggedInUser();

  return (
    <BrowserRouter>
      <Routes>
        {/* temporary default route */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
