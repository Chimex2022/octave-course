import { Menu, X } from "lucide-react";
import Logo from "./logo";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [openItem, setOpenItem] = useState(false);
  const menuRef = useRef(null);

  const toggleItem = () => {
    setOpenItem(!openItem);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenItem(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const navLinks = [
    { text: "Home", href: "#hero" },
    { text: "Programmes", href: "#programme" },
    { text: "Community", href: "#community" },
    { text: "Testimonials", href: "#testimonial" },
    { text: "Blog", href: "#blog" },
  ];

  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpenItem(false); // close mobile menu after click
    }
  };

  return (
    <nav className="w-full h-[68px] px-6 md:px-16 py-5 bg-white border border-gray-100 flex justify-between items-center relative">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <Logo />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 hover:cursor-pointer transition-all duration-300 hover:text-gray-200">
        {navLinks.map((item, index) => (
          <button
            key={index}
            onClick={() => handleScroll(item.href)}
            className="text-gray-600 text-sm font-medium hover:text-gray-800 transition-all duration-300"
          >
            {item.text}
          </button>
        ))}
      </div>

      {/* Desktop Button */}
      <div className="hidden md:block">
        <button className="bg-[#0F2F8C] text-sm max-w-[150px] h-[39px] text-white rounded-full text-center whitespace-nowrap px-4 py-2.5 hover:scale-105 cursor-pointer transition-all duration-300">
          Start Learning
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="block md:hidden">
        <button onClick={toggleItem} className="text-black">
          {openItem ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {openItem && (
        <div
          ref={menuRef}
          className="absolute top-[68px] z-20 left-0 w-full bg-white shadow-lg p-5 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.href)}
              className="text-gray-700 text-base hover:text-[#0F2F8C] transition"
            >
              {item.text}
            </button>
          ))}
          <button className="bg-[#0F2F8C] text-sm text-white rounded-full px-4 py-2.5 hover:scale-105 transition-all duration-300">
            Start Learning
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
