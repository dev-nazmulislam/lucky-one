import React from "react";
import "./Footer.css";
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="left-container text-start">
              <h1>Nr Tech</h1>
              <p className="mt-4 ">
                <a href="/home">
                  ইউনিট-১: ২০/৩, বাবর রোড (ব্লক-বি), মোহাম্মাদপুর, ঢাকা- ১২০৭
                </a>
                <br />
                <br />
                <a href="/home">
                  ইউনিট-২: মুক্তিযুদ্ধা টাওয়ার-১ (৫ম তলা), মোহাম্মাদপুর,
                  ঢাকা-১২০৭
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-menu-container">
              <ul>
                <li className="footer-menu">
                  <a href="/home">Home</a>
                </li>
                <li className="footer-menu">
                  <a href="/courses">Courses</a>
                </li>
                <li className="footer-menu">
                  <a href="blogs">Blogs</a>
                </li>
                <li className="footer-menu">
                  <a href="/contact">Contact Us</a>
                </li>
                <li className="footer-menu">
                  <a href="/login">Log in</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="right-footer-container">
              <div className="phone ">
                <h5>
                  <a href="mailto:nazmulislamnr@gmail.com">01518350140</a>
                  <br />
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/dev-nazmulislam"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/developer.nazmulislam/"
                  >
                    {<AiFillFacebook />}
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UCSOv-VPMwl5c48Ezbs3qRRQ"
                  >
                    {<AiFillYoutube />}
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/developernazmul/"
                  >
                    {<AiFillLinkedin />}
                  </a>
                </h5>
              </div>
              <div className="map d-flex align-items-center">
                <p>20/3 Babor Road, Mohammadpur, Dhaka-1207</p>
              </div>
            </div>
          </div>
        </div>
        <p className="my-3 text-center">
          &copy; {new Date().getFullYear()} Copyright Resarve for Nr Tech
        </p>
      </div>
    </div>
  );
};

export default Footer;
