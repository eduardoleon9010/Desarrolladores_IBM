import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen h-screen relative">
      <img
        src="https://cdn.pixabay.com/photo/2016/11/19/16/54/bloom-1840303_1280.jpg"
        alt=""
        className="absolute w-full h-full object-cover"
      />

      <div className="w-full h-full relative backdrop-blur-sm backdrop-brightness-50 grid grid-cols-2 text-neutral-300 justify-center">
        <div className="w-full h-full flex flex-col gap-8 justify-center items-center">
          <div className="w-full h-fit flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold drop-shadow-md">Welcome to,</h1>
            <h1 className="text-6xl text-white font-bold drop-shadow-md">
              Green lab
            </h1>
          </div>

          <div className="w-full h-fit flex flex-col justify-center items-center">
            <div className="w-20 h-1 bg-emerald-500 rounded-md"></div>

            <p className="">Where green grows everyday</p>
          </div>

          <Link
            to={"/browse"}
            className="w-fit h-fit bg-emerald-400 px-4 py-2 
          rounded-md shadow-sm shadow-neutral-700 hover:shadow-yellow-400 
          transition-all duration-300 text-black font-bold text-xl"
          >
            Get started
          </Link>
        </div>

        <div className="w-full h-full flex flex-col gap-2 justify-center items-center text-center px-10">
          <p className="about-us-description font-bold text-xl">
            Welcome to Green lab, where green grows everyday!
          </p>
          <p className="about-us-content">
            Welcome to Green Lab, your trusted partner in cultivating a greener
            tomorrow. At Green Lab, we believe in the power of plants to
            transform spaces, improve air quality, and enhance well-being. Our
            mission is to bring the beauty and benefits of nature into your
            home, office, and community.
          </p>
          {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
          <p className="about-us-content">
            At Green Lab, green truly grows every day. We offer a wide range of
            services, including plant consultations, personalized plant care
            advice, and eco-friendly products to ensure your plants flourish in
            any environment. Join us on our journey to make the world a greener
            place, one plant at a time.
          </p>
          {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

          <p className="about-us-content">
            Discover the joy of growing with Green Lab, where every day is an
            opportunity to nurture and celebrate nature's wonders.
          </p>
        </div>
      </div>
    </div>
  );
}
