import "../css/main.css";
import "../css/bookTour.css";
import "../css/login.css";
import FormLoginLeft from "../components/FormLoginLeft";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Apis, { endpoints } from "../configs/Apis";
import { useHistory } from "react-router-dom";

function Register() {
  const [lastName, setLastName] = useState();
  const [firstName, setFirstName] = useState();
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const avatar = useRef();
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();

    let registerUser = async () => {
      const formData = new FormData();
      formData.append("first_name", firstName);
      formData.append("last_name", lastName);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("username", username);
      formData.append("avatar", avatar.current.files[0]);

      let res = await Apis.post(endpoints["register"], formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      history.push("/login");
    };

    if (password !== null && password === confirmPassword) {
      registerUser();
    }
  };

  return (
    <div id="main">
      <div className="book-tour-wrap">
        <div className="container book-tour">
          <div className="row">
            <div className="col col-lg-5">
              <FormLoginLeft />
            </div>
            <div className="col col-lg-7">
              <div className="book-tour__content auth__content">
                <div className="tour-required">
                  <p>
                    Dấu <span className="book-required">*</span> là thông tin
                    bắt buộc
                  </p>
                </div>
                <form className="form" onSubmit={handleRegister}>
                  <FormRegisterRight
                    id="inputFirstName"
                    title="Tên người dùng"
                    type="text"
                    value={firstName}
                    change={(e) => setFirstName(e.target.value)}
                    placeholder="Tên của bạn..."
                  />
                  <FormRegisterRight
                    id="inputLastName"
                    title="Họ người dùng"
                    type="text"
                    value={lastName}
                    change={(e) => setLastName(e.target.value)}
                    placeholder="Họ của bạn..."
                  />
                  <FormRegisterRight
                    id="inputEmail"
                    title="Email"
                    type="email"
                    value={email}
                    change={(e) => setEmail(e.target.value)}
                    placeholder="Email của bạn..."
                  />
                  <FormRegisterRight
                    id="inputUsername"
                    title="Tài khoản"
                    type="text"
                    value={username}
                    change={(e) => setUsername(e.target.value)}
                    placeholder="Nhập tài khoản..."
                  />
                  <FormRegisterRight
                    id="inputPassword"
                    title="Mật khẩu"
                    type="password"
                    value={password}
                    change={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu của bạn..."
                  />
                  <FormRegisterRight
                    id="confirmPassword"
                    title="Xác nhận mật khẩu"
                    type="password"
                    value={confirmPassword}
                    change={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Nhập lại mật khẩu của bạn..."
                  />
                  <div className="form-group">
                    <label
                      htmlFor="file-upload"
                      className="form-label col-form-label-lg "
                    >
                      Chọn ảnh đại diện
                      <span className="book-required">*</span>
                    </label>
                    <input
                      type="file"
                      ref={avatar}
                      className="form-control form-control-lg"
                      id="file-upload"
                    />
                  </div>

                  <div className="wrap-submit">
                    <div className="form-extends">
                      <p>
                        Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>{" "}
                        tại đây!
                      </p>
                    </div>
                    <button type="submit" className="btn btn-lg">
                      Đăng ký
                    </button>
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

function FormRegisterRight(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id} className="form-label col-form-label-lg ">
        {props.title}
        <span className="book-required">*</span>
      </label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.change}
        className="form-control form-control-lg"
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Register;
