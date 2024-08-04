import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useAppContext } from "../context/AppContext";

export default function Header({ isCart }) {
  const { cart } = useAppContext();

  return (
    <div
      className="w-full h-14 bg-emerald-500 
    grid grid-cols-3 items-center px-4 fixed top-0"
    >
      <Link to={"/"} className="w-fit h-fit flex flex-col">
        <h2 className="font-bold">Green lab</h2>
        <p>Where green grows everyday</p>
      </Link>

      <h2 className="text-xl font-bold w-full text-center">Plants</h2>

      <Link
        to={isCart ? "/browse" : "/cart"}
        className="w-full flex justify-end"
      >
        <div className="w-max h-max relative pointer-events-none">
          <FaCartShopping className="text-5xl" />
          <p className="absolute text-white top-1 right-4">
            {Object.keys(cart).length}
          </p>
        </div>
      </Link>
    </div>
  );
}
