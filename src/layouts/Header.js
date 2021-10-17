import logo from "../images/logo.png"
import { IoIosArrowDown } from "react-icons/io";
import { SiFacebook, SiInstagram } from 'react-icons/si'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="header">
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-12">
                            <div className="number-contact">
                                <p>
                                    <i className="fas fa-phone-alt"></i>
                                    Hotline: <a href="tel:1900 0909 09"><strong>1900 0909 09</strong></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row header">
                    <div className="col col-md-2 col-lg-2">
                        <div className="logo">
                            <h1 className="logo__heading">
                                <a href="#" >
                                    <img src={logo} alt="travel ck" />
                                </a>
                            </h1>
                        </div>
                    </div>
                    <div className="col col-md-6 col-lg-7">
                        <ul className="navbar-list">
                            <li className="navbar-list__item active">
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li className="navbar-list__item">
                                <Link to="/tours">Du lịch <IoIosArrowDown /></Link>
                                <ul className="sub-nav">
                                    <li className="sub-nav__list">
                                        <Link to="/tours">Du lịch trong nước</Link>
                                    </li>
                                    <li className="sub-nav__list">
                                        <a href="./tour.html">Du lịch ngoài nước</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="navbar-list__item">
                                <a href="">Vé máy bay</a>
                            </li>
                            <li className="navbar-list__item">
                                <Link to="/blogs">Tin tức</Link>
                            </li>
                            <li className="navbar-list__item">
                                <Link to="/contact">Liên hệ</Link>
                            </li>
                            <li className="navbar-list__item">
                                <Link to="/about">Về chúng tôi</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col col-md-4 col-lg-3">
                        <div className="login">
                            <div className="socials-wrap">
                                <ul className="socials-list">
                                    <li className="socials-list__item">
                                        <a href=""><SiFacebook /></a>
                                    </li>
                                    <li className="socials-list__item">
                                        <a href=""><SiInstagram /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="user-wrapper">
                                <div className="wrap">
                                    <span className="user-header">Tài khoản</span>
                                    <IoIosArrowDown />
                                    <ul className="user-dropdown">
                                        <li className="btn-login-wrap">
                                            <a href="./loginPage.html" className="btn-login">Đăng nhập</a>
                                        </li>
                                        <li className="register-text">
                                            Chưa có tài khoản?
                                            <a href="./registerPage.html" className="register-link"> Đăng ký </a>
                                             ngay!
                                        </li>
                                    </ul>
                                </div>

                                {/* <div className="wrap">
                                    <span className="user-header">Chào, admin</span>
                                    <i className="fas fa-angle-down user-down"></i>
                                    <ul className="user-dropdown">
                                        <li className="register-text user-manage__text">
                                            <a href="#" className="user-manage">Quản lý tài khoản</a>
                                        </li>
                                        <li className="btn-login-wrap">
                                            <a href="./login.html" className="btn-login btn-logout">Đăng xuất</a>
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