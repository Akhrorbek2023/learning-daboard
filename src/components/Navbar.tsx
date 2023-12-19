import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import MenuIcon from "@mui/icons-material/Menu";
import StarsIcon from "@mui/icons-material/Stars";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import SaveModal from "../modals/SaveModal";

import Settings from "../modals/Settings";

interface NavbarProps {
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>;
  hamburger: boolean;
  setMode: React.Dispatch<React.SetStateAction<boolean>>;
  mode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ setHamburger, hamburger, setMode, mode }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const handleAddWords = () => {
    setShowModal(true);
  };

  return (
    <div className={mode ? "bg-black flex items-center justify-between w-full py-4 px-4" : "bg-orange-400 flex items-center justify-between w-full py-4 px-4"}>
      <div className={!hamburger ? "w-[70px] flex items-center justify-between" : "w-[400px] flex items-center justify-between"}>
        {!hamburger ? (
          <Link to={"/"}>
            <h1 className="text-[20px] font-[600] text-white">
              <span className="text-blue-600">L</span>
              L
              <span className="text-red-700">D</span>
            </h1>
          </Link>
        ) : (
          <Link to={"/"}>
            <h1 className="text-[20px] font-[600] text-white">
              <span className="text-blue-600">Language</span> Learning{" "}
              <span className="text-red-700">Dashboard</span>
            </h1>
          </Link>
        )}

        <Tooltip title="Toggle Menu">
          <button onClick={() => setHamburger(!hamburger)}>
            <MenuIcon className="hover:text-black text-white" />
          </button>
        </Tooltip>
      </div>
      <form action="">
        <label className="py-2 px-2 text-white" htmlFor="title">
          <SearchIcon />
        </label>
        <input
          className="px-4 py-2 rounded w-[300px]"
          type="search"
          name="title"
          id="title"
          placeholder="Enter your title ..."
        />
      </form>
      <div className="space-x-5 text-white">
        <Tooltip title="Translator" placement="bottom">
          <a href="https://translate.google.com/?hl=ru" target="_blank" rel="noopener noreferrer">
            <GTranslateIcon className="hover:text-black " />
          </a>
        </Tooltip>
        <Tooltip title="Add New Word" placement="bottom">
          <StarsIcon
            onClick={() => handleAddWords()}
            className="hover:text-black"
          />
        </Tooltip>
        <Tooltip title='Settings' placement="bottom">
          <SettingsIcon
            className="hover:text-black"
            onClick={() => setShowSettings(true)}
          />
        </Tooltip>
        <Tooltip title='Mode' placement="bottom">
          {!mode ? <DarkModeIcon onClick={() => setMode(!mode)} /> :
            <Brightness5Icon onClick={() => setMode(!mode)} />}
        </Tooltip>
      </div>
      {showModal && <SaveModal setShowModal={setShowModal} />}
      {showSettings && <Settings setShowSettings={setShowSettings} />}
    </div>
  );
};

export default Navbar;

