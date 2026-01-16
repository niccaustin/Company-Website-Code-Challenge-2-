import { useState } from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Button from "../components/Button";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation(); // 1. Get current location

    const handleChange = () => setMenu(!menu);
    const closeMenu = () => setMenu(false);

    const handleLogout = async () => {
        await logout();
        closeMenu();
        navigate('/');
    };

    // 2. Generic Scroll-to-Top Handler
    const handleNavClick = (to: string) => {
        if (location.pathname === to) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
        closeMenu();
    };

    const navLinkStyles = ({ isActive }: { isActive: boolean }) =>
        `group relative inline-block cursor-pointer transition-all ${isActive ? "text-brightColor" : "hover:text-brightColor"}`;

    return (
        <div className="fixed w-full z-10">
            <div>
                <div className="nav-gradient-shadow flex flex-grow justify-between p-5 lg:px-32">
                    <NavLink
                        to="/"
                        className="flex flex-row items-center cursor-pointer gap-2"
                        onClick={() => handleNavClick("/")}
                    >
                        <span><GiCoffeeBeans size={25} /></span>
                        <h1 className="text-xl font-semibold">NA Coffee & Roastery</h1>
                    </NavLink>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex flex-row items-center text-lg font-medium gap-8 mx-auto">
                        <NavLink to="/" className={navLinkStyles} onClick={() => handleNavClick("/")}>
                            Home
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </NavLink>

                        <NavLink to="/about" className={navLinkStyles} onClick={() => handleNavClick("/about")}>
                            About Us
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </NavLink>

                        <NavLink to="/products" className={navLinkStyles} onClick={() => handleNavClick("/products")}>
                            Products
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </NavLink>

                        <NavLink to="/blogs" className={navLinkStyles} onClick={() => handleNavClick("/blogs")}>
                            Blogs
                            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
                        </NavLink>
                    </nav>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex gap-4 items-center">
                        {!user ? (
                            <>
                                <NavLink to="/login"><Button title="Login" /></NavLink>
                                <NavLink to="/register"><Button title="Register" /></NavLink>
                            </>
                        ) : (
                            <div className="flex items-center gap-4">
                                <span className="font-medium text-sm">Hello, {user.name || 'User'}</span>
                                <div onClick={handleLogout}><Button title="Logout" /></div>
                            </div>
                        )}
                    </div>

                    <div className="lg:hidden flex items-center">
                        {menu ? <AiOutlineClose size={25} onClick={handleChange} /> : <IoMenu size={25} onClick={handleChange} />}
                    </div>
                </div>

                {/* Mobile Nav Menu */}
                <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-gradient-to-r from-background-color to to-bright-color text-black left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 opacity-95 backdrop-blur-sm`}>
                    <NavLink to="/" className="hover:text-brightColor" onClick={() => handleNavClick("/")}>Home</NavLink>
                    <NavLink to="/about" className="hover:text-brightColor" onClick={() => handleNavClick("/about")}>About Us</NavLink>
                    <NavLink to="/products" className="hover:text-brightColor" onClick={() => handleNavClick("/products")}>Products</NavLink>
                    <NavLink to="/blogs" className="hover:text-brightColor" onClick={() => handleNavClick("/blogs")}>Blogs</NavLink>

                    <div className="flex flex-col gap-4 px-10">
                        {!user ? (
                            <>
                                <NavLink to="/login" onClick={closeMenu}><Button title="Login" /></NavLink>
                                <NavLink to="/register" onClick={closeMenu}><Button title="Register" /></NavLink>
                            </>
                        ) : (
                            <>
                                <span className="text-lg">Hello, {user.name || 'User'}</span>
                                <div onClick={handleLogout}><Button title="Logout" /></div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
