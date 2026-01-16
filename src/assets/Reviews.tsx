import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

interface ReviewCardProps {
  img: string;
  title: string;
  reviewText: string;
}

const ReviewCard: React.FC<ReviewCardProps> = (props) => {
  return (
    <div className="flex flex-col w-full lg:w-2/6 bg-white p-5 rounded-lg gap-5 shadow-md">
      <div className="flex flex-row items-center lg:justify-start justify-center">
        <div className="w-1/4">
          <img className="rounded-full" src={props.img} alt="img" />
        </div>
        <div className="mx-3">
          <h2 className="font-semibold text-lg">{props.title}</h2>
          <div className="flex">
            <BsStarFill className="text-bright-color" />
            <BsStarFill className="text-bright-color" />
            <BsStarFill className="text-bright-color" />
            <BsStarFill className="text-bright-color" />
            <BsStarHalf className="text-bright-color" />
          </div>
        </div>
        <span className="ml-auto">
          <FaQuoteRight className="text-background-color opacity-50" size={35} />
        </span>
      </div>
      <p className="text-gray-700">
        {props.reviewText}
      </p>
    </div>
  );
};

const CustomerReviews: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-transparent pt-28 pb-12">
      <h1 className="font-semibold text-center text-4xl">
        Customer's Reviews
      </h1>

      <div className="flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard
          img={img1}
          title="Olivia Ava"
          reviewText="The espresso here is unmatched. Bold, smooth, and exactly what I need every morning!"
        />
        <ReviewCard
          img={img2}
          title="John Deo"
          reviewText="Amazing atmosphere and the manual brew coffee has such deep flavor. Truly a craft roastery."
        />
        <ReviewCard
          img={img3}
          title="Sofia Zoe"
          reviewText="I'm obsessed with the Non-Coffee Matcha lattes. Perfectly balanced and so refreshing."
        />
      </div>
    </div>
  );
};

export default CustomerReviews;
