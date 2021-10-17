import logo from '../images/logo.png'
import instagramImg1 from '../images/instagram/1.png'
import instagramImg2 from '../images/instagram/2.png'
import instagramImg3 from '../images/instagram/3.png'
import instagramImg4 from '../images/instagram/4.png'
import instagramImg5 from '../images/instagram/5.png'
import instagramImg6 from '../images/instagram/6.png'
import { AiTwotoneHome } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdAttachEmail } from 'react-icons/md'
import { BsFacebook, BsTwitter, BsInstagram, BsPinterest, BsYoutube } from 'react-icons/bs'


function Footer() {
    return (
        <footer id="footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-4">
                            <div class="footer-widget">
                                <div class="footer-logo">
                                    <a href="">
                                        <img src={logo} alt="travelCK"/>
                                    </a>
                                </div>
                                <ul class="footer-info">
                                    <li class="footer-info__item">
                                        <a href=""><AiTwotoneHome /> 191/12 Phạm Huy Thông, Phường 6, Gò Vấp</a>
                                    </li>
                                    <li class="footer-info__item">
                                        <a href="tel:+8437152172"><BsFillTelephoneFill /> +8437152172</a>
                                    </li>
                                    <li class="footer-info__item">
                                        <a href="mailto:cuong.cn0103@gmail.com"><MdAttachEmail /> cuong.cn0103@gmail.com</a>
                                    </li>
                                </ul>
                                <ul class="footer-socials__list">
                                    <li class="footer-socials__item">
                                        <a href=""><BsFacebook /></a>
                                    </li>
                                    <li class="footer-socials__item">
                                        <a href=""><BsTwitter /></a>
                                    </li>
                                    <li class="footer-socials__item">
                                        <a href=""><BsPinterest /></a>
                                    </li>
                                    <li class="footer-socials__item">
                                        <a href=""><BsInstagram  /></a>
                                    </li>
                                    <li class="footer-socials__item">
                                        <a href=""><BsYoutube /></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col col-lg-2">
                            <div class="footer-widget">
                                <h3 class="footer-title">
                                    Công ty
                                </h3>
                                <ul class="footer-links">
                                    <li class="footer-item">
                                        <a href="">Định giá</a>
                                    </li>
                                    <li class="footer-item">
                                        <a href="">Bộ sưu tập</a>
                                    </li>
                                    <li class="footer-item">
                                        <a href="">Kết nối</a>
                                    </li>
                                    <li class="footer-item">
                                        <a href="">Về chúng tôi</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col col-lg-3">
                            <div class="footer-widget">
                                <h3 class="footer-title">
                                    Địa điểm nổi tiếng
                                </h3>
                                <ul class="footer-links-double">
                                    <li class="footer-links-double__item">
                                        <a href="">Indonesia</a>
                                    </li>
                                    <li class="footer-links-double__item">
                                        <a href="">Thái Lan</a>
                                    </li>
                                    <li class="footer-links-double__item">
                                        <a href="">Singapore</a>
                                    </li>
                                    <li class="footer-links-double__item">
                                        <a href="">Malaysia</a>
                                    </li>
                                    <li class="footer-links-double__item">
                                        <a href="">Myanmar</a>
                                    </li>
                                    <li class="footer-links-double__item">
                                        <a href="">Laos</a>
                                    </li>
                                    <li class="footer-links-double__item">
                                        <a href="">Campuchia</a>
                                    </li>
                                    <li class="footer-links-double__item">
                                        <a href="">Timor-leste</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col col-lg-3">
                            <div class="footer-widget">
                                <h3 class="footer-title">
                                    Instagram
                                </h3>
                                <div class="instagram-feed">
                                    <div class="single-insta">
                                        <a href="">
                                            <img src={instagramImg1} alt="" />
                                        </a>
                                    </div>
                                    <div class="single-insta">
                                        <a href="">
                                            <img src={instagramImg2} alt="" />
                                        </a>
                                    </div>
                                    <div class="single-insta">
                                        <a href="">
                                            <img src={instagramImg3} alt="" />
                                        </a>
                                    </div>
                                    <div class="single-insta">
                                        <a href="">
                                            <img src={instagramImg4} alt="" />
                                        </a>
                                    </div>
                                    <div class="single-insta">
                                        <a href="">
                                            <img src={instagramImg5} alt="" />
                                        </a>
                                    </div>
                                    <div class="single-insta">
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
            <div class="footer-copyright">
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-12">
                            <div class="copy-right">
                                <p>
                                    Copyright © 2021 {document.write(new Date().getFullYear())}
                                    Đã đăng kí bản quyền | Mọi thông tin xin liên hệ về <strong>Travel CK</strong>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer