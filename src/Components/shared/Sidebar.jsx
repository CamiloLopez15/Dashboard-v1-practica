import {
  RiHome6Line,
  RiCompass3Line,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings4Line,
  RiLogoutBoxRLine
} from "react-icons/ri";

// eslint-disable-next-line react/prop-types
function Sidebar({showMenu}) {
  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      } transition-all`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              Logo
            </h1>
          </li>
          <li className="bg-[#262837] p-3 px-5 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#ec7c6a] p-3  flex justify-center rounded-xl text-white"
            >
              <RiHome6Line className="text-xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 px-5 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiCompass3Line className="text-xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 px-5 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiPieChartLine className="text-xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 px-5 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiMailLine className="text-xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 px-5 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiNotification3Line className="text-xl" />
            </a>
          </li>
          <li className="hover:bg-[#262837] p-3 px-5 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiSettings4Line className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-[#262837] p-3 px-5 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-3 flex justify-center rounded-xl text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <RiLogoutBoxRLine className="text-xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
