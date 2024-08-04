import React from "react";
import { useAppContext } from "../../context/AppContext";
import Header from "../../nav/Header";
import { plantsArray } from "../../data";
import PlantCard from "./PlantCard";

export default function Browse() {
  const { hello } = useAppContext();
  console.log("coming hello", hello);
  return (
    <div className="w-full h-screen flex flex-col justify-end">
      <Header />

      <div
        className="w-full pageContainerHeight overflow-y-auto overflow-x-hidden py-10
      flex flex-col gap-10"
      >
        {plantsArray.map((group) => {
          return (
            <div
              key={group.category}
              className="w-full h-fit flex flex-col justify-center items-center"
            >
              <h2 className="text-4xl font-bold">{group.category}</h2>

              <div className="w-full h-fit flex flex-wrap gap-4 p-4">
                {group.plants.map((plant) => {
                  return <PlantCard key={plant.image} plant={plant} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
