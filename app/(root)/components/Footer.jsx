import { IoMdArrowDropright } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const menulinks = ["Home", "FAQ", "Contacts"];
const socialLinks = [
  {
    icon: <FaFacebookF />,
    link: "https://www.facebook.com",
  },
  {
    icon: <FaTwitter />,
    link: "https://www.twitter.com",
  },
  {
    icon: <FaPinterestP />,
    link: "https://www.pinterest.com",
  },
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
  },
];

const contacts = [
  {
    icon: <IoLocationOutline color="#f25c04" />,
    text: "Location",
  },
  {
    icon: <CiPhone color="#f25c04" />,
    text: "Phone",
  },
  {
    icon: <IoMailOutline color="#f25c04" />,
    text: "Email",
  },
];

const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 h-fit flex text-[#999] flex-col bg-[#121921]">
      <div className="w-full h-fit flex flex-col md:flex-row justify-between py-8 gap-8">
        <div className="w-fit h-fit flex flex-col gap-5">
          <h1 className="text-white font-semibold text-[20px]">Menu Links</h1>
          <ul className="w-fit h-fit flex flex-col gap-2.5">
            {menulinks.map((link, index) => (
              <li key={index} className="flex items-center gap-2 ">
                <IoMdArrowDropright />
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-fit h-fit flex flex-col gap-5">
          <h1 className="text-white font-semibold text-[20px]">Contacts</h1>
          <ul className="w-fit h-fit flex flex-col gap-2.5">
            {contacts.map((link, index) => (
              <li key={index} className="flex items-center gap-2">
                {link.icon}
                {link.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-fit h-fit flex flex-col gap-5">
          <h1 className="text-white font-semibold text-[20px]">Find Us On</h1>
          <ul className="flex gap-4 text-2xl ">
            {socialLinks.map((link, index) => (
              <li key={index} className="flex items-center gap-2 ">
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div className="w-full h-fit flex justify-between py-8">
        <div className="flex gap-1">
          <a href="/">With Love by UWS</a>|<a href="/">Terms and conditions</a>
        </div>
        <p>© 2021 FoodBoard</p>
      </div>
    </footer>
  );
};

export default Footer;
