import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import LoginPage from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import SignUp from "./pages/SignUp.jsx";
import "./App.css";
// import { setSessionStorage, getSessionStorage } from "./services/storage.service";
// import ProtectedRoutes from "./components/helper//ProtectedRoutes.tsx";

function App() {

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
