import { useState } from "react";
import {
  RiMenu3Fill,
  RiUserLine,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiSearchLine,
  RiArrowDownSLine,
} from "react-icons/ri";
//Components
import Sidebar from "./Components/shared/Sidebar";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  // const [setshowOrder, setSetshowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Menu movil */}
      <nav className="lg:hidden bg-[#1F1D28] fixed w-full bottom-0 left-0 flex justify-between items-center py-2 px-8 text-xl rounded-tl-xl rounded-tr-xl text-gray-400">
        <button className="p-2">
          <RiUserLine />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 lg:p-8">
          {/* Header */}
          <header className="p-4">
            {/* Title and Search */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Jeager Resto</h1>
                <p className="text-gray-500">13 julio 2023</p>
              </div>
              <form>
                <div className="w-full relative">
                  <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
                  <input
                    type="text"
                    className="bg-[#1F1D28] w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                    placeholder="Search"
                  />
                </div>
              </form>
            </div>
            {/* Tabs */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a
                href="#"
                className="relative text-[#ec7c6a] py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]"
              >
                Hot dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Cold dishes
              </a>
              <a href="#" className="py-2 pr-4">
                Soup
              </a>
              <a href="#" className="py-2">
                Grill
              </a>
            </nav>
          </header>
          {/* Title content */}
          <div className="flex items-center justify-between px-4 mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D28] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* Card */}
            <div  className="bg-[#1F1D28] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="Food.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"/>
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div  className="bg-[#1F1D28] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="Food.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"/>
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div  className="bg-[#1F1D28] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="Food.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"/>
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div  className="bg-[#1F1D28] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="Food.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"/>
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div  className="bg-[#1F1D28] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="Food.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"/>
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* Card */}
            <div  className="bg-[#1F1D28] p-8 rounded-xl flex flex-col items-center gap-2 text-center text-gray-300">
              <img src="Food.png" className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"/>
              <p className="text-xl">Speacy seasoned seafood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 fixed lg:static right-0 bg-[#1F1D28] top-0 w-full h-full">
        {/* Orders */}
          <div className="relative pt-16 text-gray-300 p-8">
            <RiCloseLine className="absolute left-4 top-4 p-3 box-content bg-[#262837] text-xl rounded-xl"/>
            <h1 className="text-2xl my-4">Order #1590467</h1>
            <div className="flex items-center gap-4 flex-wrap">
              <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">Dine in</button>
              <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">To do</button>
              <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">Delivery</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
