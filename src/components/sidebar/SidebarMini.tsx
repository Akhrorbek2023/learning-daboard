import React from "react";
import { Link } from "react-router-dom";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import TranslateIcon from "@mui/icons-material/Translate";

interface SidebarMiniProps {
  mode: boolean;
}

const SidebarMini: React.FC<SidebarMiniProps> = ({ mode }) => {
  const navigate = [
    {
      id: 1,
      title: "Video Darsliklar",
      symbol: <SlowMotionVideoIcon />,
      path: "/videos",
    },
    {
      id: 2,
      title: "Gramatik Darsliklar",
      symbol: <AutoStoriesIcon />,
    },
    {
      id: 3,
      title: "Provicy",
      symbol: <HelpOutlineIcon />,
    },
    {
      id: 4,
      title: "Personal",
      symbol: <PersonPinIcon />,
      path: "/personal",
    },
    {
      id: 5,
      title: "My Words",
      symbol: <TranslateIcon />,
      path: "/my_words",
    },
  ];

  return (
    <div className={mode ? "w-[60px] h-[100vh] bg-black text-white" : "w-[60px] h-[100vh] bg-orange-400 text-white"}>
      <ul className="mt-10">
        {navigate?.map((item) => (
          <li
            className="text-[22px] font-[600] text-white px-4 py-3 border-r-4 border-transparent hover:border-r-4 hover:border-white hover:bg-black hover:text-white focus:bg-black focus:text-white"
            key={item.id}
          >
            <Link
              className="flex items-center hover:space-x-3 transition-all ease-in delay-50 duration-75"
              to={item.path || '/'}
            >
              <span className="mr-5 text-[25px]">{item.symbol}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMini;

