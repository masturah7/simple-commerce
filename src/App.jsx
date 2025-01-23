import { Routes, Route, Link } from "react-router-dom";
import { Button } from "flowbite-react";
import "./App.css";
import "./index.css";

import AppProducts from "./pages/product-page.jsx";
import ProfPage from "./pages/Profile/ProfPage.jsx";
import SignUp from "./pages/SignPage.jsx";

export default function App() {
  return (
    <>
      
      <nav className="w-full h-16 justify-center mt-2 fixed top-0 left-0 z-50">
        <div className="w-[90%] flex justify-between px-4 items-center bg-white shadow-lg shadow-blue-400 pb-3">
          <h2 className="hidden md:flex md:text-2xl text-lg italic font-bold text-blue-800">
            Masturah
          </h2>
          <ul className="flex gap-8 text-sm items-center md:text-lg">
            
            <li className="hover:text-blue-800">
              <Link to="/ProfPage">Home Page</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link to="/AppProducts">Products Page</Link>
            </li>
          </ul>
          
          <Link to="/">
            <Button className="bg-blue-500 hover:bg-blue-900 text-white px-6 py-2 text-base font-semibold rounded">
              Sign Up
            </Button>
          </Link>
        </div>
      </nav>
      <main className="mt-16">
        <Routes>
          <Route path="/ProfPage" element={<ProfPage />} />
          <Route path="/AppProducts" element={<AppProducts />} />
          <Route path="/" element={<SignUp />} />
        </Routes>
      </main>
    </>
  );
}
