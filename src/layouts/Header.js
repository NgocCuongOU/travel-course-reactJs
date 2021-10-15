import logo from "../images/logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { SiFacebook, SiInstagram } from 'react-icons/si'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="header">
            <div class="top-header">
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-12">
                            <div class="number-contact">
                                <p>
                                    <i class="fas fa-phone-alt"></i>
                                    Hotline: <a href="tel:1900 0909 09"><strong>1900 0909 09</strong></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row header">
                    <div class="col col-md-2 col-lg-2">
                        <div class="logo">
                            <h1 class="logo__heading">
                                <a href="#" >
                                    <img src={logo} alt="travel ck" />
                                </a>
                            </h1>
                        </div>
                    </div>
                    <div class="col col-md-6 col-lg-7">
                        <ul class="navbar-list">
                            <li class="navbar-list__item active">
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li class="navbar-list__item">
                                <Link to="/tours">Du lịch <IoIosArrowDown /></Link>
                                <ul class="sub-nav">
                                    <li class="sub-nav__list">
                                        <Link to="/tours">Du lịch trong nước</Link>
                                    </li>
                                    <li class="sub-nav__list">
                                        <a href="./tour.html">Du lịch ngoài nước</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="navbar-list__item">
                                <a href="">Vé máy bay</a>
                            </li>
                            <li class="navbar-list__item">
                                <a href="./blog.html">Tin tức</a>
                            </li>
                            <li class="navbar-list__item">
                                <a href="./contact.html">Liên hệ</a>
                            </li>
                            <li class="navbar-list__item">
                                <a href="./about.html">Về chúng tôi</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col col-md-4 col-lg-3">
                        <div class="login">
                            <div class="socials-wrap">
                                <ul class="socials-list">
                                    <li class="socials-list__item">
                                        <a href=""><SiFacebook /></a>
                                    </li>
                                    <li class="socials-list__item">
                                        <a href=""><SiInstagram /></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="user-wrapper">
                                <div class="wrap">
                                    <span class="user-header">Tài khoản</span>
                                    <IoIosArrowDown />
                                    <ul class="user-dropdown">
                                        <li class="btn-login-wrap">
                                            <a href="./loginPage.html" class="btn-login">Đăng nhập</a>
                                        </li>
                                        <li class="register-text">
                                            Chưa có tài khoản?
                                            <a href="./registerPage.html" class="register-link"> Đăng ký </a>
                                             ngay!
                                        </li>
                                    </ul>
                                </div>

                                {/* <div class="wrap">
                                    <span class="user-header">Chào, admin</span>
                                    <i class="fas fa-angle-down user-down"></i>
                                    <ul class="user-dropdown">
                                        <li class="register-text user-manage__text">
                                            <a href="#" class="user-manage">Quản lý tài khoản</a>
                                        </li>
                                        <li class="btn-login-wrap">
                                            <a href="./login.html" class="btn-login btn-logout">Đăng xuất</a>
                                        </li>
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header