import img from "../assets/img/about.jpg";
import CultureValues from "../assets/CultureValues";
import TeamSection from "../assets/TeamSection";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center pt-20 lg:px-32 px-5 bg-gradient-to-r from-[#FFDCAB] via-[#E9C084] to-[#AB6B2E]
">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

      <div className=" flex flex-col lg:flex-row items-center gap-5">
        <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">
            What Makes Our Coffee Special?
          </h2>
          <p>
            At NA Coffee & Roastery, we believe that a great cup of coffee is the best part of the day. 
            While we obsess over the science of roasting and sourcing the finest beans, our goal is simple: to make sure you enjoy every sip. 
            Whether you are a long-time coffee lover or just looking for a better morning pick-me-up, 
            we take the guesswork out of the process by roasting in small batches to ensure every bag is fresh, smooth, and full of flavor. 
            We do the hard work behind the scenes so that all you have to do is brew, relax, and enjoy.
          </p>
        </div>
      </div>
      <div className="w-full pt-48">
        <CultureValues />
      </div>

      <div className="w-full pt-16">
        <TeamSection />
      </div>
    </div>
  );
};

export default About;