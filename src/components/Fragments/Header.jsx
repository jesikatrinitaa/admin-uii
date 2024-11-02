import Input from "../Elements/Labelinput/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = () => {
  const date = new Date().toDateString().slice(4);

  return (
    <header className="border-b-2 py-4 px-6 flex items-center justify-between">
      <div className="flex">
        <div className="font-bold text-lg">Username</div>
        <div className="ms-6 text-gray-500">{date}</div>
      </div>
      <div className="flex">
        <div className="self-center">
          <FontAwesomeIcon icon={faBell} className="text-gray-500 scale-110" />
        </div>
        <div className="ms-10 hidden sm:block">
          <input variant="bg-special-mainBg border border-gray-03" />,
          <Input variant="bg-white w-80" />
        </div>
      </div>
    </header>
  );
};

export default Header;
