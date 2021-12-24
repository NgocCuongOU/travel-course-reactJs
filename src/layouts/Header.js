import { Link } from "react-router-dom";
import cookies from "react-cookies";
import { useDispatch, useSelector } from "react-redux";

import { logoutUser } from "../ActionCreator/userCreator";
import logo from "../images/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa"

function Header() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    cookies.remove("access_token");
    cookies.remove("user");

    dispatch(logoutUser());
  };

  let uiUser = (
    <div className="wrap">
      <FaUserCircle className="icon-auth"/>
      <span className="user-header">Tài khoản</span>
      <IoIosArrowDown className="icon-auth" />
      <ul className="user-dropdown">
        <li className="btn-login-wrap">
          <Link to="/login" className="btn-login">
            Đăng nhập
          </Link>
        </li>
        <li className="register-text">
          Chưa có tài khoản?
          <Link to="/register" className="register-link">
            {" "}
            Đăng ký{" "}
          </Link>
          ngay!
        </li>
      </ul>
    </div>
  );

  if (user !== null && user !== undefined) {
    uiUser = (
      <div className="wrap">
        <FaUserCircle className="icon-auth"/>
        <span className="user-header">Chào, {user.username}</span>
        <IoIosArrowDown className="icon-auth"/>
        <i className="fas fa-angle-down user-down"></i>
        <ul className="user-dropdown">
          <li className="register-text user-manage__text">
            <a href="#" className="user-manage">
              Quản lý tài khoản
            </a>
          </li>
          <li className="btn-login-wrap">
            <Link onClick={handleLogout} className="btn-login btn-logout">
              Đăng xuất
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <header id="header">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col col-lg-12">
              <div className="number-contact">
                <p>
                  <i className="fas fa-phone-alt"></i>
                  Hotline:{" "}
                  <a href="tel:1900 0909 09">
                    <strong>1900 0909 09</strong>
                  </a>
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
                <a href="#">
                  <img src={logo} alt="travel ck" />
                </a>
              </h1>
            </div>
          </div>
          <div className="col col-md-6 col-lg-8">
            <ul className="navbar-list">
              <li className="navbar-list__item active">
                <Link to="/">Trang chủ</Link>
              </li>
              <li className="navbar-list__item">
                <Link to="/tours">
                  Du lịch <IoIosArrowDown />
                </Link>
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
          <div className="col col-md-4 col-lg-2">
            <div className="login">
              <div className="user-wrapper">{uiUser}</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
