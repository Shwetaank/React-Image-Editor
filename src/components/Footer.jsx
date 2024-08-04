
import "./footer.css";
import { FaLinkedin, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaSuitcase } from "react-icons/fa";

const socials = [
  {
    id: 1,
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/shwetank-morey-a35484257",
  },
  {
    id: 2,
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@Sin_Greed",
  },
  {
    id: 3,
    name: "LeetCode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/u/spmorey87/",
  },
  {
    id: 4,
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/shwetaank_/",
  },
  {
    id: 5,
    name: "Twitter",
    icon: <FaTwitter />,
    link: "https://x.com/Sin_Greed___",
  },
  {
    id: 6,
    name: "My Portfolio",
    icon: <FaSuitcase />,
    link: "https://shwet-tech.com/",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container d-flex flex-column align-items-center">
        <div className="socials d-flex justify-content-center">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              title={social.name}
              className="social-icon"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="footer-text">© 2024 All Rights Reserved. Made by Sin_Greed</p>
      </div>
    </footer>
  );
};

export default Footer;
