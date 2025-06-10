import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo1 from "../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="m-10 my-10 flex flex-col gap-10 sm:flex-row sm:justify-between sm:gap-10">
      {/* Logo & Description */}
      <div className="max-w-sm flex flex-col items-start gap-4">
        <img src={logo1} alt="Logo" className="w-38 h-36 mb-4" />
       
      </div>

      {/* Company Links */}
      <div className="flex flex-col items-start gap-4">
        <p className="text-xl font-semibold mb-2">COMPANY</p>
        <ul className="flex flex-col text-sm text-gray-600 gap-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-start gap-4">
        <p className="text-xl font-semibold mb-2">GET IN TOUCH</p>
        <ul className="flex flex-col text-sm text-gray-600 gap-1">
          <li>
            <a href="tel:+10000000000">+1-000-000-0000</a>
          </li>
          <li>
            <a href="mailto:mahananda@gmail.com">mahananda@gmail.com</a>
          </li>
        </ul>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col items-start gap-4">
        <p className="text-xl font-semibold mb-2">SOCIAL</p>
        <div className="flex gap-4">
          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-blue-500"
          >
            <FaTwitter size={24} />
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:text-red-500"
          >
            <TfiYoutube size={24} />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="hover:text-pink-500"
          >
            <FaInstagram size={24} />
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-blue-600"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
