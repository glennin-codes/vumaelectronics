import { Link } from "react-router-dom";
import {
  AiOutlineSend,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
import { BiSupport } from "react-icons/bi";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Blog", link: "/blog" },
  { name: "Privacy", link: "/privacy" },
  { name: "Register", link: "/signup" },
];
const quickLinks = [
  {
    name: "Whatsapp",
    link: "https://wa.me/+254729492939",
  },
  { name: "Others", link: "#" },
];

const Footer = () => {
  return (
    <footer className="footer bg-[#120c21] text-white/75 px-8 py-[2rem] font-montserrat">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="">
          <Link to="/" className="flex-1">
            <p className="text-3xl font-bold">Spark Electronics</p>
          </Link>
          <h3 className="text-[1.1rem] mt-4 mb-2">Subscribe</h3>
          <form className="w-fit flex items-center pr-2 border-1 rounded-lg bg-black/75 border-white-300">
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none text-[1.2rem] py-2 px-3 rounded-lg bg-black/75 border-white-300"
            />
            <AiOutlineSend className=" text-[1.5rem] cursor-pointer" />
          </form>

          <div className="mt-[2rem] flex items-end">
            <h3 className="text-custom-pink font-normal text-[1rem] mr-[.6rem]">
              Follow us
            </h3>

            <ul className="list-none flex items-center">
              <li className="mr-[0.95rem]">
                <Link target="_blank" href="https://www.instagram.com/">
                  <AiFillInstagram
                    className="text-[1.5rem] hover:text-red-200 
                  transform scale-105 duration-300"
                  />
                </Link>
              </li>
              <li className="mr-[0.95rem]">
                <Link target="_blank" href="https://twitter.com/">
                  <AiOutlineTwitter
                    className="text-[1.5rem] hover:text-red-200 
                  transform scale-105 duration-300"
                  />
                </Link>
              </li>
              <li className="mr-[0.95rem]">
                <Link target="_blank" href="https://web.facebook.com/">
                  <AiFillFacebook
                    className="text-[1.5rem] hover:text-red-200 
                  transform scale-105 duration-300"
                  />
                </Link>
              </li>
              <li className="mr-[0.95rem]">
                <Link target="_blank" href="https://www.linkedin.com/">
                  <AiFillLinkedin
                    className="text-[1.5rem] hover:text-red-200 
                  transform scale-105 duration-300"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <h3 className="font-semibold text-[1.2rem]">SUPPORT</h3>

          <div className="mt-4">
            <div className=" text-[1rem]">
              Electronics house,
              <br /> Luthuli Avenue.
            </div>

            <div className="my-4 flex items-center justify-start space-x-4 text-[1rem]">
              <BiSupport className="text-[1.5rem]" />
              <div>
                <p className="">+254729492939</p>
              </div>
            </div>

            <div className="text-[1rem]">sparkelectros@gmail.com</div>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <h3 className="font-semibold text-[1.2rem] mb-2 tracking-wider">
            COMPANY
          </h3>

          <ul className="flex flex-col space-y-3 text-[1rem]  font-serif font-medium">
            {navItems.map((item, index) => (
              <Link key={index} href={item.link} className="hover:text-red-700">
                {item.name}
              </Link>
            ))}
          </ul>
        </div>

        <div className="mt-8 md:mt-0">
          <h3 className="font-semibold text-[1.2rem] mb-2 tracking-wider">
            QUICK LINKS
          </h3>

          <ul className="flex flex-col space-y-3 text-[1rem]  font-serif font-medium">
            {quickLinks.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="hover:text-custom-red-light-3"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <h4 className="mt-[2rem] text-center text-[1.1rem] font-normal">
        All rights reserved. © Spark.com. Inc.
      </h4>
    </footer>
  );
};
export default Footer;
