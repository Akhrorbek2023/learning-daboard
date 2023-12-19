import React from "react";
import { Link } from "react-router-dom";

interface SettingsProps {
  setShowSettings: React.Dispatch<React.SetStateAction<boolean>>;
}

const Settings: React.FC<SettingsProps> = ({ setShowSettings }) => {
  const navigate = [
    {
      id: 1,
      title: "Language",
      symbol: "",
      path: "",
    },
    {
      id: 2,
      title: "Mode",
      symbol: "",
    },
    {
      id: 3,
      title: "Provicy",
      symbol: "",
    },
    {
      id: 4,
      title: "Security",
      symbol: "",
      path: "",
    },
    {
      id: 5,
      title: "Help",
      symbol: "",
      path: "",
    },
  ];

  return (
    <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0 bg-black opacity-90 bg-fixed">
      <div className="w-[15%] bg-white p-4 ml-[85%] mt-[5%] h-[95%]">
        <button
          onClick={() => setShowSettings(false)}
          className="text-red-600 font-bold bg-slate-500 rounded inline-block px-2"
        >
          X
        </button>
        <h1 className="text-center text-[22px] font-[700]">Settings</h1>
        <ul>
          {navigate?.map((item) => (
            <li
              key={item.id}
              className="mb-2 hover:ml-4 text-[20px] font-[500]"
            >
              <Link to={item.path || "/"}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Settings;
