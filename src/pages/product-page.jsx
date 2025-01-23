import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import hood from "../assets/images/Hoodie.png";
import small1 from "../assets/images/smallhoodie1.png";
import small2 from "../assets/images/smallhoodie2.png";
import small3 from "../assets/images/smallhoodie3.png";
import { BiChevronDown } from "react-icons/bi";

import { FaCircleUser } from "react-icons/fa6";
import AppNavbar from "../components/Navbar";
import { toast, ToastContainer } from "react-toastify";

export default function AppProducts() {
  // State to manage quantity
  const [quantity, setQuantity] = useState(1);

  // Decrease quantity function
  const decreaseQuantity = () => {
    if (quantity <= 1) {
      toast.error("You can't buy less than 1 item");
      return;
    }
    setQuantity(quantity - 1);
  };

  // Increase quantity function
  const increaseQuantity = () => {
    if (quantity >= 9) {
      toast.error("You can't buy more than 9 items");
      return;
    }
    setQuantity(quantity + 1);
  };

  return (
    <main className="w-full flex items-center justify-center">
      <div className="w-[90%] justify-between flex flex-col gap-10 ">
        <AppNavbar />
        <div className="flex  gap-4 text-sm font-mukta font-light  sm:text-base">
          <span>Home</span>
          <MdKeyboardArrowRight />
          <span>Sales</span>

          <MdKeyboardArrowRight />
          <span>Hoodie</span>
        </div>

        <div className="flex flex-col  gap-16 justify-between lg:flex-row">
          <div className="w-full flex gap-10 flex-col lg:w-[30%] ">
            <div className="w-full">
              <img src={hood} alt="Hoodie" className="rounded-3xl w-full " />
            </div>

            <div className="flex justify-between items-start">
              <img src={small1} alt="Small Hoodie 1" className="rounded-3xl " />
              <img src={small2} alt="Small Hoodie 2" className="rounded-3xl" />
              <img
                src={small3}
                alt="Small Hoodie 3"
                className=" rounded-3xl "
              />
            </div>
          </div>

          <section className="w-full lg:w-[60%]">
            <h4 className="font-roboto font-semibold text-[24px] text-[#2D2D2D] leading-tight">
              Plaid Sleeve Kangaroo Pocket Drawstring Hoodie
            </h4>

            <p className="font-roboto font-bold text-[16px] mt-4 md:text-[14px]">
              BY{""}
              <span className="text-customBlue text-[16px] ml-1 md:text-[14px]">
                COSMO FASHION
              </span>
            </p>

            <div className="flex gap-4 mt-4 items-center">
              <div className="border rounded-2xl w-[68px] h-[50px] bg-[#DFDFDF] flex items-center justify-center">
                <span className="text-[#29B6F6] font-roboto text-[16px] font-bold relative top-[-5px]">
                  $
                </span>
                <span className="text-customBlue font-roboto text-[32px] font-bold ml-1">
                  67
                </span>
              </div>

              <div>
                <p className="text-[#29B6F6] font-roboto text-[20px] font-semibold md:text-[18 px]">
                  Save 25%
                </p>
                <p className="font-roboto text-[20px] text-customGray md:text-[18px]">
                  Inclusive deal of the day
                </p>
              </div>
            </div>

            <p className="font-roboto text-[20px] font-light w-[85%] mt-4 md:text-[16px] sm:w-[65%]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <div className="mt-4 flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex items-center gap-4">
                <p className="text-lg">Quantity:</p>
                <div className="flex items-center gap-8">
                  <button
                    className="text-2xl border rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:text-gray-400 disabled:hover:bg-transparent"
                    onClick={decreaseQuantity}
                    // disabled={quantity === 1 || quantity < 1}
                  >
                    -
                  </button>
                  <div className="">{quantity}</div>
                  <button
                    className="text-2xl border rounded-full h-10 w-10 flex items-center justify-center hover:bg-gray-200 disabled:opacity-50 disabled:text-gray-400 disabled:hover:bg-transparent"
                    onClick={increaseQuantity}
                    // disabled={quantity === 9 || quantity > 9}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="">
                <button className="border rounded-md bg-[#1565C0] w-[160px] h-[40px] text-white font-roboto text-[16px] font-semibold text-center hover:bg-blue-400">
                  Add to Cart
                </button>
              </div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between gap-4 ">
              <section>
                <FaCircleUser className="text-gray-400 h-10 w-10" />
              </section>
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <div className="">
                    <p className="text-gray-500 font-medium">
                      Alex Morningstar
                    </p>
                    <p className="text-sm font-medium text-gray-500">
                      Contrary to popular belief
                    </p>
                  </div>
                  <div className="">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="text-xs text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Officiis molestiae repellat vitae enim id a eveniet, rerum
                  obcaecati tenetur maiores minima earum, ipsum laudantium
                  dolores temporibus maxime quos totam saepe?
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}
