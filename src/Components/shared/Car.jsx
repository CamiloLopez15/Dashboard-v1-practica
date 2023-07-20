/* eslint-disable react/prop-types */
import { RiCloseLine, RiDeleteBin6Line } from "react-icons/ri";

function Car(props) {

  const { showOrder, setShowOrder} = props

  return (
    <div>
      <div
        className={`lg:col-span-2 fixed z-50 bg-[#1F1D28] top-0 w-full lg:right-0 lg:w-96 h-full transition-all ${
          showOrder ? "right-0" : "-right-full"
        }`}
      >
        {/* Orders */}
        <div className="relative pt-16 text-gray-300 p-8 lg:p-3 xl:p-6 h-full w-full lg:pt-5">
          <RiCloseLine
            className="lg:hidden absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] text-xl rounded-xl"
            onClick={() => setShowOrder(false)}
          />
          <h1 className="text-2xl my-4 lg:text-xl">Order #1590467</h1>
          {/* Pills */}
          <div className="flex items-center gap-4 flex-wrap mb-8 lg:mb-2 xl:mb-8 lg:gap-2">
            <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
              Dine in
            </button>
            <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
              To do
            </button>
            <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
              Delivery
            </button>
          </div>
          {/* Car */}
          <div>
            <div className="grid grid-cols-6 p-4 lg:text-sm xl:text-md gap-1">
              <h5 className="col-span-4">Item</h5>
              <h5 className="col-span-1">Qty</h5>
              <h5 className="col-span-1">Price</h5>
            </div>
            {/* Products */}
            <div className="h-[400px] md:h-[700px] lg:h-[500px] pb-14 overflow-y-scroll scroll-modified">
              {/* Product */}
              <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-3">
                  {/* Product description */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="Food.png" className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm lg:text-xs">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/* Qty */}
                  <div>
                    <span>2</span>
                  </div>
                  {/* Price */}
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid grid-cols-6 items-center w-full">
                  <form className="col-span-4">
                    <input
                      type="text"
                      className="bg-[#1F1D28] py-2 px-4 rounded-lg outline-none w-full"
                      placeholder="Order note"
                    />
                  </form>
                  <div className="col-span-2 text-center ">
                    <button className="border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product */}
              <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-3">
                  {/* Product description */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="Food.png" className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/* Qty */}
                  <div>
                    <span>2</span>
                  </div>
                  {/* Price */}
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid grid-cols-6 items-center w-full">
                  <form className="col-span-4">
                    <input
                      type="text"
                      className="bg-[#1F1D28] py-2 px-4 rounded-lg outline-none w-full"
                      placeholder="Order note"
                    />
                  </form>
                  <div className="col-span-2 text-center ">
                    <button className="border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Product */}
              <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-3">
                  {/* Product description */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="Food.png" className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/* Qty */}
                  <div>
                    <span>2</span>
                  </div>
                  {/* Price */}
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid grid-cols-6 items-center w-full">
                  <form className="col-span-4">
                    <input
                      type="text"
                      className="bg-[#1F1D28] py-2 px-4 rounded-lg outline-none w-full"
                      placeholder="Order note"
                    />
                  </form>
                  <div className="col-span-2 text-center ">
                    <button className="border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Product */}
              <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-3">
                  {/* Product description */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="Food.png" className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/* Qty */}
                  <div>
                    <span>2</span>
                  </div>
                  {/* Price */}
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid grid-cols-6 items-center w-full">
                  <form className="col-span-4">
                    <input
                      type="text"
                      className="bg-[#1F1D28] py-2 px-4 rounded-lg outline-none w-full"
                      placeholder="Order note"
                    />
                  </form>
                  <div className="col-span-2 text-center ">
                    <button className="border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
              {/* Product */}
              <div className="bg-[#262837] p-4 rounded-xl mb-4">
                <div className="grid grid-cols-6 mb-3">
                  {/* Product description */}
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="Food.png" className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/* Qty */}
                  <div>
                    <span>2</span>
                  </div>
                  {/* Price */}
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid grid-cols-6 items-center w-full">
                  <form className="col-span-4">
                    <input
                      type="text"
                      className="bg-[#1F1D28] py-2 px-4 rounded-lg outline-none w-full"
                      placeholder="Order note"
                    />
                  </form>
                  <div className="col-span-2 text-center ">
                    <button className="border border-red-500 p-2 rounded-lg">
                      <RiDeleteBin6Line className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Submit payment */}
          <div className="bg-[#262837] absolute w-full bottom-0 left-0 p-4">
            <div className="flex items-center justify-between mb-2 ">
              <span className="text-gray-400">Discount</span>
              <span>$0</span>
            </div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-gray-400">Subtotal</span>
              <span>$201.03</span>
            </div>
            <div>
              <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
                Continue to payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Car;
