import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Videos from "./components/Videos";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Personal from "./components/Personal";
import MyWords from "./components/MyWords";
import SidebarMini from "./components/sidebar/SidebarMini";

function App() {
  const [mode, setMode] = useState(false);
  const [hamburger, setHamburger] = useState(false)
  const user = {
    username: "JohnDoe",
    profilePicture: "https://img.freepik.com/free-photo/fashion-little-boy_71767-95.jpg?size=626&ext=jpg&ga=GA1.2.1672022254.1678286335&semt=sph",
    languageProficiency: "Intermediate",
    bio: "Passionate language learner exploring the beauty of communication through various languages.",
  };
  return (
    <>
      <Navbar className='' setHamburger={setHamburger} hamburger={hamburger} setMode={setMode} mode={mode}/>
      <div className={mode ? "bg-gray-300 text-white flex" : "flex"}>
        {
          hamburger ? (
            <Sidebar mode={mode} />
          ) : (
            <SidebarMini mode={mode}/>
          )
        }
        <Routes className="bg-gray-200">
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/my_words" element={<MyWords />} />
          <Route
            path="/personal"
            element={
              <Personal
                username={user.username}
                profilePicture={user.profilePicture}
                languageProficiency={user.languageProficiency}
                bio={user.bio}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
