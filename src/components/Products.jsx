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
      <div className="w-[90%]  px-11  justify-center flex flex-col gap-10 mx-10 md:flex-row  md:px-11
      ">
        
        <section className='md:w-1/2'>
          
          <ul className="flex list-none gap-3 text-sm font-mukta font-light py-3 sm:text-base">
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
            className="border rounded-2xl w-[375px] h-[330px] object-cover sm:w-[100%] "
          />

          
          <div className="flex gap-6 mt-5 sm:gap-5">
            <img
              src={small1}
              alt="Small Hoodie 1"
              className="border rounded-2xl w-[80px] h-[80px] object-cover sm:w-[150px] sm:h-[150px] "
            />
            <img
              src={small2}
              alt="Small Hoodie 2"
              className="border rounded-2xl w-[80px] h-[80px] object-cover sm:w-[150px] sm:h-[150px]"
            />
            <img
              src={small3}
              alt="Small Hoodie 3"
              className="border rounded-2xl w-[80px] h-[80px] object-cover sm:w-[150px] sm:h-[150px]"
            />
          </div>
        </section>

        
        <section className="h-[300px] md:w-1/2">
        
          <h4 className="font-roboto font-semibold text-[24px] text-[#2D2D2D]  w-[55%]  pt-8 md:text-[32px] sm:w-[75%]">
            Plaid Sleeve Kangaroo Pocket Drawstring Hoodie
          </h4>

          
          <p className="font-roboto font-bold text-[16px] mt-3 md:text-[14px]">
            BY
            <span className="text-customBlue text-[16px] ml-1 md:text-[14px]">COSMO FASHION</span>
          </p>

          
          <div className="flex gap-4 mt-4 items-center">
            
            <div className="border rounded-2xl w-[68px] h-[50px] bg-[#DFDFDF] flex items-center justify-center">
              <span className="text-[#29B6F6] font-roboto text-[16px] font-bold relative top-[-5px]">$</span>
              <span className="text-customBlue font-roboto text-[32px] font-bold ml-1">67</span>
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
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>

        
          <div className="flex flex-col sm:flex-row gap-5 mt-4">
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
          <div className="flex pt-3 gap-1 md:gap-2 md:pt-6">
            <section>
            <img src={use} className="w-[20px] h-[20px] md:w-[16px] md:h-[10px] mt-2"/>
            </section>
            <section className="flex-1">
                <h3 className="font-roboto text-[20px] font-semibold text-customGrey md:text-[16px]">Alex Morningstar</h3>
                <h4 className="font-roboto text-[18px] font-semibold text-customGrey md:text-[14px]">Contrary to popular belief</h4>
                <p className="font-roboto text-[18px] font-light text-customGrey w-[100%] md:text-[14px] md:w-[80%] lg:w-[75%]">lorem ipsum is not simply random text. it has root in a piece of classical Latin</p>
            </section>
            <section className="flex">
            <IoStar className="text-[#1565C0]  h-[28px] w-[33px] md:w-[30px] md:h-[25px]" />
            <IoStar className="text-[#1565C0] h-[28px] w-[33px] md:w-[30px] md:h-[25px]"/>
            <IoStar className="text-[#1565C0] h-[28px] w-[33px] md:w-[30px] md:h-[25px]"/>
            <IoStar className="text-[#1565C0] h-[28px] w-[33px] md:w-[30px] md:h-[25px]"/>
            <MdStarBorder className="text-[#1565C0] h-[30px] w-[35px] border-blue-300 md:w-[35px] md:h-[][29px]"/>
           
            </section>

          </div>
        </section>
      </div>
    </main>
  );
}
