import GoogleLogin from 'react-google-login'

import "../css/main.css";
import "../css/bookTour.css";
import "../css/login.css";
import googleIcon from "../images/google-icon.png";
import { AiFillFacebook } from "react-icons/ai";
import { useState } from "react";
import Apis, { endpoints } from "../configs/Apis";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginUser } from "../ActionCreator/userCreator";
import cookies from "react-cookies";
import FormLoginLeft from "../components/FormLoginLeft";

function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [googleData, setGoogleData] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let info = await Apis.get(endpoints["oauth2-info"]);
      console.log(info);
      let res = await Apis.post(endpoints["login"], {
        client_id: info.data.client_id,
        client_secret: info.data.client_secret,
        username: username,
        password: password,
        grant_type: "password",
      });

      console.log(res.data);

      cookies.save("access_token", res.data.access_token);

      let user = await Apis.get(endpoints["current-user"], {
        headers: {
          Authorization: `Bearer ${cookies.load("access_token")}`,
        },
      });

      console.log(user);

      cookies.save("user", user.data);

      dispatch(loginUser(user.data));

      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleFailure = (result) => {
    alert(result)
  }

  const handleLoginGoogle =  (googleData) => {
    setGoogleData(googleData.profileObj)
    cookies.save("user", googleData.profileObj);

    dispatch(loginUser(googleData.profileObj));

    history.push("/");
  }

  return (
    <div id="main">
      <div className="book-tour-wrap">
        <div className="container book-tour">
          <div className="row">
            <div className="col col-sm-12 col-lg-5">
              <FormLoginLeft />
            </div>
            <div className="col col-sm-12 col-lg-7">
              <div className="book-tour__content auth__content">
                <div className="tour-required">
                  <p>
                    Dấu <span className="book-required">*</span> là thông tin
                    bắt buộc
                  </p>
                </div>
                <form
                  action=""
                  onSubmit={handleLogin}
                  method="POST"
                  className="form"
                  id="form-2"
                >
                  <GoogleLogin className="login-with-another google"
                      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                      buttonText='Đăng nhập với tài khoản Google'
                      onSuccess={handleLoginGoogle}
                      onFailure={handleFailure}
                      cookiePolicy={'single_host_origin'}
                  >
                  </GoogleLogin>
                  <div className="login-with-another">
                    <div class="google-thumb">
                      <a href="#"><AiFillFacebook /></a>
                    </div>
                    <p><a href="#">Đăng nhập với tài khoản Facebook</a></p>
                  </div>
                  <div className="space-second">Hoặc</div>
                  <div className="form-group">
                    <label htmlFor="username" className="form-label">
                      Tài khoản
                    </label>
                    <input
                      id="username"
                      type="text"
                      placeholder="VD: ngoccuong123"
                      className="form-control"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                    <span className="form-message"></span>
                  </div>

                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Mật khẩu
                    </label>
                    <input
                      id="password"
                      type="password"
                      placeholder="Nhập mật khẩu"
                      className="form-control"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <span className="form-message"></span>
                  </div>
                  <div className="forgot-password">
                    <a href="./management.html">Quên mật khẩu?</a>
                  </div>
                  <button className="form-submit">Đăng nhập</button>
                  <div className="form-extends">
                    <p>
                      Bạn chưa có tài khoản? Hãy{" "}
                      <a href="/register">đăng ký</a> ngay!
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
