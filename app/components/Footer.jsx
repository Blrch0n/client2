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
    icon: <IoLocationOutline />,
    text: "Location",
  },
  {
    icon: <CiPhone />,
    text: "Phone",
  },
  {
    icon: <IoMailOutline />,
    text: "Email",
  },
];

const Footer = () => {
  return (
    <footer className="w-full h-fit flex flex-col bg-[#121921]">
      <div>
        <div>
          <h1>Menu Links</h1>
          <ul>
            {menulinks.map((link, index) => (
              <li key={index} className="flex items-center gap-2 text-white">
                <IoMdArrowDropright />
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1>Contacts</h1>
          <ul>
            {contacts.map((link, index) => (
              <li key={index} className="flex items-center gap-2 text-white">
                {link.icon}
                {link.text}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Find Us On</h1>
          <ul className="flex gap-4 text-2xl text-white">
            {socialLinks.map((link, index) => (
              <li key={index} className="flex items-center gap-2 text-white">
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr />
      <div>
        <div>
          <a href="/">With Love by UWS</a>|<a href="/">Terms and conditions</a>
        </div>
        <p>© 2021 FoodBoard</p>
      </div>
    </footer>
  );
};

export default Footer;
