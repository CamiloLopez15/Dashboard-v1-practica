import { useState } from "react";
import {
  RiMenu3Fill,
  RiUserLine,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiArrowDownSLine,
} from "react-icons/ri";
//Components
import Sidebar from "./Components/shared/Sidebar";
import Car from "./Components/shared/Car";
import Header from "./Components/shared/Header";
import Card from "./Components/shared/Card";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrder = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <div className="bg-[#262837] w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      <Car showOrder={showOrder} setShowOrder={setShowOrder} />
      {/* Menu movil */}
      <nav className="lg:hidden bg-[#1F1D28] fixed w-full bottom-0 left-0 flex justify-between items-center py-2 px-8 text-xl rounded-tl-xl rounded-tr-xl text-gray-400 z-10">
        <button className="p-2">
          <RiUserLine />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2" onClick={toggleOrder}>
          <RiPieChartLine />
        </button>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
      <main className="lg:pl-32 pb-20 lg:pr-96">
        <div className="md:p-8 p-4">
          {/* Header */}
          <Header />
          {/* Title content */}
          <div className="flex items-center justify-between px-4 mb-16">
            <h2 className="text-xl text-gray-300">Choose Dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D28] py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-3">
            {/* Card */}
            <Card
              img="Food.png"
              title="Speacy seasoned seafood nodles"
              price={`$${2.29}`}
              inventory={20}
            />
            {/* Card */}
            <Card
              img="Food.png"
              title="Speacy seasoned seafood nodles"
              price={`$${2.29}`}
              inventory={20}
            />
            {/* Card */}
            <Card
              img="Food.png"
              title="Speacy seasoned seafood nodles"
              price={`$${2.29}`}
              inventory={20}
            />
            {/* Card */}
            <Card
              img="Food.png"
              title="Speacy seasoned seafood nodles"
              price={`$${2.29}`}
              inventory={20}
            />
            {/* Card */}
            <Card
              img="Food.png"
              title="Speacy seasoned seafood nodles"
              price={`$${2.29}`}
              inventory={20}
            />
            {/* Card */}
            <Card
              img="Food.png"
              title="Speacy seasoned seafood nodles"
              price={`$${2.29}`}
              inventory={20}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
