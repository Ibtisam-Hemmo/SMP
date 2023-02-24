import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { Profile, Home, Auth } from "./pages";
import Chat from "./pages/chat/Chat";
import "./App.css";

function App() {
  const user = useSelector((state) => state.authReducer.authData);

  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Auth />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Auth/>}
        />
        <Route
          path="/auth"
          element={user ? <Home /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Auth />}
        />
        <Route
          path="/chat"
          element={user ? <Chat /> : <Auth />}
        />
      </Routes>
    </div>
  );
}

export default App;
