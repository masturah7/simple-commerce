import { MdKeyboardArrowRight } from "react-icons/md";
import hood from '../assets/images/hoodie.png';
import small1 from '../assets/images/smallhoodie1.png';
import small2 from '../assets/images/smallhoodie2.png';
import small3 from '../assets/images/smallhoodie3.png';
import { BiChevronDown } from "react-icons/bi";
import use from '../assets/images/user.png';
import { IoStar } from "react-icons/io5";
import { MdStarBorder } from "react-icons/md";


export default function AppProducts() {
  return (
    <main className="w-full">
      <div className="w-[90%]  px-11  justify-center flex flex-column gap-10 mx-10 md:flex-row 
      ">
        
        <section className=''>
          
          <ul className="flex list-none gap-3 text-sm font-mukta font-light py-3 sm:text-l">
            <li>Home</li>
            <li className="flex items-center">
              <MdKeyboardArrowRight />
              <span className="ml-2">Sales</span>
            </li>
            <li className="flex items-center">
              <MdKeyboardArrowRight />
              <span className="ml-2">Hoodie</span>
            </li>
          </ul>

          
          <img
            src={hood}
            alt="Hoodie"
            className="border rounded-2xl w-[375px] h-[330px] object-cover"
          />

          
          <div className="flex gap-6 mt-5">
            <img
              src={small1}
              alt="Small Hoodie 1"
              className="border rounded-2xl w-[80px] h-[80px] object-cover"
            />
            <img
              src={small2}
              alt="Small Hoodie 2"
              className="border rounded-2xl w-[80px] h-[80px] object-cover"
            />
            <img
              src={small3}
              alt="Small Hoodie 3"
              className="border rounded-2xl w-[80px] h-[80px] object-cover"
            />
          </div>
        </section>

        
        <section className="h-[300px]">
        
          <h4 className="font-roboto font-semibold text-[32px] text-[#2D2D2D]  w-[55%]  pt-8">
            Plaid Sleeve Kangaroo Pocket Drawstring Hoodie
          </h4>

          
          <p className="font-roboto font-bold text-[16px] mt-3 ">
            BY
            <span className="text-customBlue text-[16px] ml-1">COSMO FASHION</span>
          </p>

          
          <div className="flex gap-4 mt-4 items-center">
            
            <div className="border rounded-2xl w-[68px] h-[50px] bg-[#DFDFDF] flex items-center justify-center">
              <span className="text-[#29B6F6] font-roboto text-[16px] font-bold relative top-[-5px]">$</span>
              <span className="text-customBlue font-roboto text-[32px] font-bold ml-1">67</span>
            </div>

            
            <div>
              <p className="text-[#29B6F6] font-roboto text-[20px] font-semibold">
                Save 25%
              </p>
              <p className="font-roboto text-[14px] text-customGray sm:text-lg">
                Inclusive deal of the day
              </p>
            </div>
          </div>

          <p className="font-roboto text-[16px] font-light w-[65%] mt-4">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>

        
          <div className="flex  gap-5 mt-4">
            <div className="border rounded-2xl border-gray-300 h-[45px] w-[90px] font-roboto font-semibold text-[14px] text-[#7D7D7D] px-3 py-2 flex items-center justify-between">
              QTY 2
              <BiChevronDown />
            </div>
          

          
          <div className="">
            <button className="border rounded-md bg-[#1565C0] w-[160px] h-[40px] text-white font-roboto text-[16px] font-semibold text-center ">
              Add to Cart
            </button>
            </div>
          </div>
          <hr className="mt-3"/>
          <div className="flex pt-6 gap-3">
            <section>
            <img src={use} />
            </section>
            <section>
                <h3 className="font-roboto text-[16px] font-semibold text-customGrey">Alex Morningstar</h3>
                <h4 className="font-roboto text-[14px] font-semibold text-customGrey">Contrary to popular belief</h4>
                <p className="font-roboto text-[12px] font-light text-customGrey w-[60%]">lorem ipsum is not simply random text. it has root in a piece of classical Latin</p>
            </section>
            <section className="flex">
            <IoStar className="text-[#1565C0]  h-[25px] w-[30px]" />
            <IoStar className="text-[#1565C0] h-[25px] w-[30px]"/>
            <IoStar className="text-[#1565C0] h-[25px] w-[30px]"/>
            <IoStar className="text-[#1565C0] h-[25px] w-[30px]"/>
            <MdStarBorder className="text-[#1565C0] h-[29px] w-[35px] border-blue-300"/>
           
            </section>

          </div>
        </section>
      </div>
    </main>
  );
}
