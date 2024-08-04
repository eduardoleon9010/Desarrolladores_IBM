import React from "react";
import { useAppContext } from "../../context/AppContext";
import Header from "../../nav/Header";
import CartItem from "./CartItem";

export default function Cart() {
  const { cart } = useAppContext();

  return (
    <div className="w-full h-screen flex flex-col justify-end">
      <Header isCart />

      <div
        className="w-full pageContainerHeight overflow-y-auto overflow-x-hidden py-10
  flex flex-col gap-10"
      >
        <CartItem />
      </div>
    </div>
  );
}
