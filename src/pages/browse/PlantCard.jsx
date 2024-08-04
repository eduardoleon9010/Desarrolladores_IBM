import React from "react";
import { useAppContext } from "../../context/AppContext";

export default function PlantCard({ plant }) {
  const { cart, addToCart } = useAppContext();

  return (
    <div
      className="w-60 h-fit flex flex-col bg-white relative
    rounded-md shadow-sm shadow-black overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-fit h-fit">
        <div className="w-fit h-fit bg-red-600 px-1 py-0.5 rounded-l-md text-white">
          Sale
        </div>
      </div>
      <img src={plant.image} alt="" className="w-full h-60 object-cover" />

      <div className="w-full h-32 flex flex-col p-2">
        <div className="w-full flex gap-2 justify-between font-bold">
          <h2>{plant.name}</h2>
          <p>{plant.cost}</p>
        </div>

        <div className="w-full grow flex flex-col justify-between">
          <h2 className="text-neutral-600 text-sm">{plant.description}</h2>

          <div className="w-full h-fit flex justify-center items-center">
            <button
              onClick={() => {
                addToCart(plant.image, plant);
              }}
              disabled={cart[plant.image]}
              className="w-fit h-fit px-4 py-1 rounded-md 
            bg-emerald-500 text-white disabled:bg-neutral-700 disabled:text-neutral-300"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
