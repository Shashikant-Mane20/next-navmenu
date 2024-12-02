'use client';
import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const NavMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentMenu, setCurrentMenu] = useState(null); // Track current menu level

    const menus = [
        { name: "Publications", submenu: ["Newsletters", "White Papers", "Brochures", "Books", "Blogs", "Case Studies"] },
        { name: "Industries", submenu: ["Agriculture", "Citizen services", "Education", "Food Security", "Government Functions", "Healthcare", "Land & Industry", "Mining", "Smart City", "Travel, Tourism & Hospitality"] },
        { name: "Domain Offerings", submenu: ["HealthEase", "Urbansity", "CSM CXP", "GovLabs", "Edvize", "FoodPrint", "IntegratORE", "Agrigate", "LANDMAS", "TOURQUE"] },
        { name: "Services", submenu: ["AI & Allied Services", "Consulting & Allied Services", "Data & Analytics", "Emerging Technologies", "Engineering, Application & Transformation"] },
        { name: "Solutions", submenu: ["HealthEase Solutions", "Urbansity Solutions", "CSM CXP Solutions", "GovLabs Solutions", "Edvize Solutions", "FoodPrint Solutions", "IntegratORE Solutions", "Agrigate Solutions", "LANDMAS Solutions", "TOURQUE Solutions"] },
        { name: "Partner", submenu: null },
        { name: "Newsroom", submenu: null },
        { name: "Career", submenu: ["Overview", "Life@CSM", "Kinnecta", "Jobs", "Industry Consultants", "SAT IOT LAB"] },
        { name: "Contact Us", submenu: null },
        { name: "About Us", submenu: null },
    ];

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        setCurrentMenu(null); // Reset to main menu
    };

    const handleSubmenu = (submenuIndex) => {
        setCurrentMenu(submenuIndex); // Navigate to submenu
    };

    const handleBack = () => {
        setCurrentMenu(null); // Return to main menu
    };

    return (
        <>
            Navbar with Hamburger Icon
            <div className="bg-gray-800 text-white p-4 flex justify-between items-center fixed top-0 w-full z-50">
         
                <button
                    onClick={handleMenuToggle}
                    className="w-8 h-8 relative"
                >
                    <span
                        className={`block absolute h-1 w-full bg-white transform transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : "-translate-y-2"}`}
                    ></span>
                    <span
                        className={`block absolute h-1 w-full bg-white transform transition-transform duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                    ></span>
                    <span
                        className={`block absolute h-1 w-full bg-white transform transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : "translate-y-2"}`}
                    ></span>
                </button>
            </div>

            {/* Sidebar Menu */}
            <div
                className={`fixed top-16 right-0 h-[calc(100%-4rem)] bg-white shadow-lg transform transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} z-40 lg:w-64 w-full`}
            >
                <div className="relative h-full overflow-hidden">
                    {/* Main Menu */}
                    <div
                        className={`absolute top-0 right-0 w-full h-full bg-white transition-transform duration-500 ease-in-out ${currentMenu === null ? "translate-x-0" : "-translate-x-full"}`}
                    >
                        <ul className="space-y-4 p-4">
                            {menus.map((menu, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() => menu.submenu ? handleSubmenu(index) : handleMenuToggle()}
                                        className="flex items-center justify-between w-full text-left text-gray-600 hover:text-black px-3 py-2 rounded-md"
                                    >
                                        <span>{menu.name}</span>
                                        {menu.submenu && (
                                            <span className="text-gray-500 text-sm"><IoIosArrowForward/></span>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Submenu */}
                    <div
                        className={`absolute top-0 right-0 w-full h-full bg-white transition-transform duration-500 ease-in-out ${currentMenu !== null ? "translate-x-0" : "translate-x-full"}`}
                    >
                        {currentMenu !== null && (
                            <div className="space-y-4 p-4">
                                <button
                                    onClick={handleBack}
                                    className="flex items-center space-x-2 text-gray-600 hover:text-black mb-4"
                                >
                                    <IoMdArrowBack />
                                    <span>Back</span>
                                </button>
                                {menus[currentMenu]?.submenu.map((item, idx) => (
                                    <button
                                        key={idx}
                                        className="w-full text-left text-gray-600 hover:text-black px-3 py-2 rounded-md"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavMenu;
