import React from 'react';
import Button from '../components/Button';
import menu1 from '../assets/img/menu1.jpg';
import menu2 from '../assets/img/menu2.jpg';
import menu3 from '../assets/img/menu3.jpg';
import menu4 from '../assets/img/menu4.jpg';

interface Item {
  id: number;
  title: string;
  description: string;
  imageSrc: string; 
}

const items: Item[] = [
  { 
    id: 1, 
    title: 'Espresso Based', 
    description: 'Bold Kick, Silky Finish. Our signature roastery blend, pulled for a rich, creamy energy boost.', 
    imageSrc: menu1 
  },
  { 
    id: 2, 
    title: 'Manual Brew', 
    description: 'Slow Sip, Real Flavor. Hand-poured brews that brings out natural sweet and fruity notes.', 
    imageSrc: menu2 
  },
  { 
    id: 3, 
    title: 'Non Coffee', 
    description: 'Pure Taste, Zero Caffeine. Premium-served cozy teas, chocolates, and chilled beverages with trademark care.',
    imageSrc: menu3
  },
  { 
    id: 4, 
    title: 'Coffee Beans', 
    description: 'Our Roast, Your Home. Take the cafe vibe back with our freshly roasted, award-winning beans.', 
    imageSrc: menu4
  },
];

const ItemCard: React.FC<{ item: Item }> = ({ item }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full text-center">
    <img src={item.imageSrc} alt={item.title} className="w-full h-50 object-cover" />
    
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex justify-center items-start mb-3">
        <h3 className="text-lg font-semibold">{item.title}</h3>
      </div>
      
      <p className="text-sm text-gray-600 mb-5 flex-grow">
        {item.description}
      </p>
      
      <Button title="Order Now" className="w-full" />
    </div>
  </div>
);

// This is the main exported component, renamed from CourseSection to Products
const Products: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-20 lg:px-32 px-5 bg-gradient-to-r from-[#FFDCAB] via-[#B8834E] to-[#AB6B2E] pb-20">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {items.map((items) => (
          <ItemCard key={items.id} item={items} />
        ))}
      </div>
    </div>
  );
};



export default Products;
