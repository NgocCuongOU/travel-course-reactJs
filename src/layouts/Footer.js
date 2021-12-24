import logo from "../images/logo.png";
import instagramImg1 from "../images/instagram/1.png";
import instagramImg2 from "../images/instagram/2.png";
import instagramImg3 from "../images/instagram/3.png";
import instagramImg4 from "../images/instagram/4.png";
import instagramImg5 from "../images/instagram/5.png";
import instagramImg6 from "../images/instagram/6.png";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col col-lg-4">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="">
                    <img src={logo} alt="travelCK" />
                  </a>
                </div>
                <ul className="footer-info">
                  <li className="footer-info__item">
                    <a href="">
                      <AiTwotoneHome /> 191/12 Phạm Huy Thông, Phường 6, Gò Vấp
                    </a>
                  </li>
                  <li className="footer-info__item">
                    <a href="tel:+8437152172">
                      <BsFillTelephoneFill /> +8437152172
                    </a>
                  </li>
                  <li className="footer-info__item">
                    <a href="mailto:cuong.cn0103@gmail.com">
                      <MdAttachEmail /> cuong.cn0103@gmail.com
                    </a>
                  </li>
                </ul>
                <ul className="footer-socials__list">
                  <li className="footer-socials__item">
                    <a href="">
                      <BsFacebook />
                    </a>
                  </li>
                  <li className="footer-socials__item">
                    <a href="">
                      <BsTwitter />
                    </a>
                  </li>
                  <li className="footer-socials__item">
                    <a href="">
                      <BsPinterest />
                    </a>
                  </li>
                  <li className="footer-socials__item">
                    <a href="">
                      <BsInstagram />
                    </a>
                  </li>
                  <li className="footer-socials__item">
                    <a href="">
                      <BsYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-2">
              <div className="footer-widget">
                <h3 className="footer-title">Công ty</h3>
                <ul className="footer-links">
                  <li className="footer-item">
                    <a href="">Định giá</a>
                  </li>
                  <li className="footer-item">
                    <a href="">Bộ sưu tập</a>
                  </li>
                  <li className="footer-item">
                    <a href="">Kết nối</a>
                  </li>
                  <li className="footer-item">
                    <a href="">Về chúng tôi</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3">
              <div className="footer-widget">
                <h3 className="footer-title">Địa điểm nổi tiếng</h3>
                <ul className="footer-links-double">
                  <li className="footer-links-double__item">
                    <a href="">Indonesia</a>
                  </li>
                  <li className="footer-links-double__item">
                    <a href="">Thái Lan</a>
                  </li>
                  <li className="footer-links-double__item">
                    <a href="">Singapore</a>
                  </li>
                  <li className="footer-links-double__item">
                    <a href="">Malaysia</a>
                  </li>
                  <li className="footer-links-double__item">
                    <a href="">Myanmar</a>
                  </li>
                  <li className="footer-links-double__item">
                    <a href="">Laos</a>
                  </li>
                  <li className="footer-links-double__item">
                    <a href="">Campuchia</a>
                  </li>
                  <li className="footer-links-double__item">
                    <a href="">Timor-leste</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col col-lg-3">
              <div className="footer-widget">
                <h3 className="footer-title">Instagram</h3>
                <div className="instagram-feed">
                  <div className="single-insta">
                    <a href="">
                      <img src={instagramImg1} alt="" />
                    </a>
                  </div>
                  <div className="single-insta">
                    <a href="">
                      <img src={instagramImg2} alt="" />
                    </a>
                  </div>
                  <div className="single-insta">
                    <a href="">
                      <img src={instagramImg3} alt="" />
                    </a>
                  </div>
                  <div className="single-insta">
                    <a href="">
                      <img src={instagramImg4} alt="" />
                    </a>
                  </div>
                  <div className="single-insta">
                    <a href="">
                      <img src={instagramImg5} alt="" />
                    </a>
                  </div>
                  <div className="single-insta">
                    <a href="">
                      <img src={instagramImg6} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col col-lg-12">
              <div className="copy-right">
                <p>
                  Copyright © 2021
                  Đã đăng kí bản quyền | Mọi thông tin xin liên hệ về{" "}
                  <strong>Travel CK</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
