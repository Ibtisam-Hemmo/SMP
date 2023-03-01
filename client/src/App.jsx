import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { Profile, Home } from "./pages";
import Chat from "./pages/chat/Chat";
import "./App.css";
import Login from "./pages/Auth/login/Login.jsx";
import Signup from "./pages/Auth/signup/Signup";

function App() {
  const user = useSelector((state) => state.authReducer.authData);

  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Login />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Login />}
        />
        <Route
          path="/login"
          element={user ? <Home /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Home /> : <Signup />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Login />}
        />
        <Route
          path="/chat"
          element={user ? <Chat /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
