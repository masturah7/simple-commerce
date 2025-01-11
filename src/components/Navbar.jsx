import { Navbar, TextInput } from "flowbite-react";
import { BiChevronDown } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import mybag from '../assets/images/shopping-bag.png';
import use from '../assets/images/user.png';


export default function AppNavbar() {
  return (
    <Navbar className="w-full bg-white shadow-sm ">
      <nav className="flex w-[90%]  py-2 items-center gap-10 justify-between ">
        <div className="text-customBlue text-xl font-Mukta font-bold flex-1">
          <h2>Cosmo</h2>
        </div>
        <Navbar.Toggle className="sm:block"/>
      <Navbar.Collapse>

        <div className="flex-1">
          <ul className="list-none flex  gap-6 font-mukta text-[20px] text-customGray font-light">
            <li>Sales</li>
            <li>Hoodie</li>
            <li>Fashion</li>
            <li className="flex items-center">More <BiChevronDown /> <span className="ml-2"></span></li>
          </ul>
        </div>

        <div className="flex gap-3 ">
        <form className="flex items-center border border-gray-300 rounded-2xl px-1 py-0.5 h-[25px] w-[183px]">
  <IoSearchOutline className="h-4 w-4 text-gray-500 inline" />
  <span className="mr-1"></span>
  <input
    type="text"
    placeholder="Search..."
    className="border-none focus:ring-0  flex-1 text-xs text-customGray font-mukta font-light px-0"
  />
</form>



          <article className="flex items-center border border-gray-300 rounded-lg h-[25px] w-[40] px-2 py-1">
            <img src={mybag} alt="shopping bag " />
            <span className="ml-1 font-mukta font-light text-sm text-customGray">0</span>
          </article>
          <div>
            <img src={use} alt="user icon" className="w-[30] h-[25]"/>
          </div>
          
        </div>
        </Navbar.Collapse>
      </nav>
    </Navbar>
  );
}
