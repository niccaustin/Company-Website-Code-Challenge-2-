import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { GiCoffeeBeans } from 'react-icons/gi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to force scroll to top even if already on the same page
  const handleManualScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth animation for same-page scrolls
    });
  };

  return (
    <footer className="bg-[#2C1810] text-[#FFDCAB] pt-16 pb-8 px-5 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <div
            className="flex items-center gap-2 text-2xl font-bold cursor-pointer"
            onClick={handleManualScroll}
          >
            <GiCoffeeBeans className="text-[#B8834E]" />
            <span>NA Roastery</span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Crafting the perfect cup since 2024. We source the finest beans to bring you a world of flavor, one story at a time.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-[#B8834E] transition-colors"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-[#B8834E] transition-colors"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-[#B8834E] transition-colors"><FaTwitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider">Explore</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link to="/" onClick={handleManualScroll} className="hover:text-[#B8834E] transition-colors">Home</Link></li>
            <li><Link to="/about" onClick={handleManualScroll} className="hover:text-[#B8834E] transition-colors">About Us</Link></li>
            <li><Link to="/products" onClick={handleManualScroll} className="hover:text-[#B8834E] transition-colors">Products</Link></li>
            <li><Link to="/blogs" onClick={handleManualScroll} className="hover:text-[#B8834E] transition-colors">Blogs</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider">Support</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><button onClick={handleManualScroll} className="hover:text-[#B8834E] transition-colors text-left">Shipping Policy</button></li>
            <li><button onClick={handleManualScroll} className="hover:text-[#B8834E] transition-colors text-left">Brew Guides</button></li>
            <li><button onClick={handleManualScroll} className="hover:text-[#B8834E] transition-colors text-left">Contact Us</button></li>
            <li><button onClick={handleManualScroll} className="hover:text-[#B8834E] transition-colors text-left">Wholesale</button></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider">Stay Caffeinated</h4>
          <p className="text-sm text-gray-400 mb-4">Get brewing tips and new roast alerts.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="bg-[#3D261C] border-none p-3 rounded text-sm focus:ring-1 focus:ring-[#B8834E] outline-none"
            />
            <button className="bg-[#AB6B2E] text-white p-3 rounded text-sm font-bold hover:bg-[#B8834E] transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#3D261C] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-500">
          © {currentYear} NA Roastery. All rights reserved.
        </p>
        <div className="flex gap-6 text-xs text-gray-500">
          <button onClick={handleManualScroll} className="hover:text-white">Privacy Policy</button>
          <button onClick={handleManualScroll} className="hover:text-white">Terms of Service</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

