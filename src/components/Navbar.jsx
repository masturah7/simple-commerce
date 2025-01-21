import { Navbar, TextInput } from "flowbite-react";
import { BiChevronDown } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import use from "../assets/images/user.png";
import { FiShoppingBag, FiUser } from "react-icons/fi";

export default function AppNavbar() {
  return (
    <Navbar className="w-full bg-white shadow-sm flex  pt-4  items-center justify-between">
      <a className="text-customBlue text-xl font-Mukta font-bold ">
        Cosmo
      </a>
      <Navbar.Toggle className="block sm:hidden" />
      <Navbar.Collapse>
        <ul className=" hidden items-center lg:flex  gap-4 md:gap-6 font-mukta text-[24px] md:text-[20px] text-customGray font-light ">
          <li>
            <p>Sales</p>
          </li>
          <li>
            <p>Hoodie</p>
          </li>
          <li>
            <p>Fashion</p>
          </li>
          <li className="flex items-center">
            <p>More</p> <BiChevronDown /> <span className="ml-2"></span>
          </li>
        </ul>

        <div className="flex gap-8 items-center ">
          <form className="flex items-center border border-gray-300 rounded-full px-4 py-1 h-[25px] w-[183px]">
            <IoSearchOutline className="h-4 w-4 text-gray-500 inline" />
            <span className="mr-1"></span>
            <input
              type="text"
              placeholder="Search..."
              className="border-none focus:ring-0  flex-1 text-xs text-customGray font-mukta font-light px-0 bg-transparent "
            />
          </form>

           <div className="relative">
          <FiShoppingBag size={20} />
          <p className="absolute -top-0.5 -right-1 h-3 w-3 bg-red-600 rounded-full flex items-center justify-center text-[.5rem] font-semibold text-white">
            3
          </p>
        </div>
          <div className="">
          <FiUser size={22} />
        </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
