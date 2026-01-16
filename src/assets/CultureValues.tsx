import React from 'react';
import type { IconType } from 'react-icons';
import { FaLightbulb, FaStar, FaThumbsUp } from 'react-icons/fa';
import { BiSolidCoffeeBean } from 'react-icons/bi';
import { HiChatBubbleBottomCenterText } from 'react-icons/hi2';
import { SiCoffeescript } from 'react-icons/si';

interface CultureValue {
  id: number;
  title: string;
  description: string;
  Icon: IconType; 
}

const cultureValues: CultureValue[] = [
  { id: 1, 
    title: 'Exceptional Quality', 
    description: 'Superior coffee in every cup.', 
    Icon: FaStar },
  { id: 2, 
    title: 'Masterful Processing', 
    description: 'Meticulous roasting and processing.', 
    Icon: BiSolidCoffeeBean  },
  { id: 3, 
    title: 'Innovation & Craft', 
    description: 'New products and brewing techniques.', 
    Icon: FaLightbulb },
  { id: 4, 
    title: 'Meaningful Connection', 
    description: 'Building community one cup at a time.', 
    Icon: SiCoffeescript  },
  { id: 5, 
    title: 'Customer Delight', 
    description: 'Fantastic customer experiences guaranteed.', 
    Icon: FaThumbsUp },
  { id: 6, 
    title: 'Engagement & Feedback', 
    description: 'Your feedback shapes our future.', 
    Icon: HiChatBubbleBottomCenterText },
];

const CultureBox: React.FC<{ value: CultureValue }> = ({ value }) => (
  <div className="p-5 text-center bg-transparent transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 h-full flex flex-col">
    <value.Icon className="text-4xl mb-4 mx-auto" />
    <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
    <p className="text-sm flex-grow">{value.description}</p>
  </div>
);

const CultureValues: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold text-center mb-10">Our Culture</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {cultureValues.map((value) => (
          <CultureBox key={value.id} value={value} />
        ))}
      </div>
    </div>
  );
};

export default CultureValues;
