import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-white px-8 pt-20 pb-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo & Contact */}
        <div>
          <img src="/logo.png" alt="Octave Logo" className="h-10 mb-4" />
          <p className="mb-2">Tel: +2348089513059</p>
          <p className="mb-4">Email: info@octaveincorporations.com</p>
          <p className="mb-2 font-medium">Join Us</p>
          <div className="flex space-x-4 mt-2">
            <a href="#"><FaYoutube size={20} /></a>
            <a href="#"><FaFacebookF size={20} /></a>
            <a href="#"><FaInstagram size={20} /></a>
            <a href="#"><FaLinkedinIn size={20} /></a>
            <a href="#"><FaXTwitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Home</a></li>
            <li><a href="#">Programmes</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>

        {/* Programmes */}
        <div>
          <h3 className="font-bold text-lg mb-4">Programmes</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Frontend Development</a></li>
            <li><a href="#">Backend Development</a></li>
            <li><a href="#">Product Design (UI/UX)</a></li>
            <li><a href="#">Data Analytics</a></li>
            <li><a href="#">Product Management</a></li>
            <li><a href="#">Project Management</a></li>
            <li><a href="#">QA Engineering</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">WhatsApp Community</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Workshops</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        ©2025 Octave Incorporations. All rights reserved.
      </div>
    </footer>
  );
}
