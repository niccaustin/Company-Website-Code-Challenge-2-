import img from "../assets/img/home.png";
import CustomerReviews from "../assets/Reviews";
import { Link } from "react-router-dom";
import Highlights from "../assets/Highlights";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col pt-30 lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] overflow-hidden">

      <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-10">

        {/* Left Side: Content */}
        <div className="w-full lg:w-2/4 space-y-8">
          <div className="space-y-4">
            <h1 className="font-semibold text-5xl text-center lg:text-start leading-tight">
              Start your day with a steaming cup of coffee from us
            </h1>
            <p className="text-center lg:text-start text-lg opacity-90">
              Boost your productivity and build your mood with a glass of coffee in the morning
            </p>
          </div>

          {/* 1. Call to Action (CTA) Buttons */}
          <div className="flex flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/products"
              className="px-8 py-3 bg-[#4b2c20] text-white rounded-full font-bold shadow-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center"
            >
              Order Now
            </Link>
          </div>

          {/* 2. Quick Stats Section */}
          <div className="flex gap-8 justify-center lg:justify-start pt-6 border-t border-[#4b2c20]/20">
            <div className="text-center lg:text-start">
              <h3 className="font-bold text-2xl text-[#4b2c20]">50+</h3>
              <p className="text-sm font-medium opacity-80">Coffee Blends</p>
            </div>
            <div className="text-center lg:text-start">
              <h3 className="font-bold text-2xl text-[#4b2c20]">20k+</h3>
              <p className="text-sm font-medium opacity-80">Satisfied Customers</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image with Floating Badge */}
        <div className="w-full lg:w-2/4 flex justify-center lg:justify-end relative">
          <div className="relative group">
            <img
              src={img}
              alt="Coffee Cup"
              className="w-full max-w-sm lg:max-w-sm object-contain drop-shadow-2xl"
            />

            {/* 3. Floating Rating Badge */}
            <div className="absolute -top-4 -right-4 lg:right-0 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-[#FFDCAB] animate-bounce-slow">
              <p className="font-bold text-[#AB6B2E] text-lg">★ 4.9</p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Top Rated</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-50">
        <Highlights />
      </div>
      {/* Customer Reviews Section */}
      <div className="w-full mt-10">
        <CustomerReviews />
      </div>
    </div>
  );
};

export default Hero;
