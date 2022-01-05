import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { useEffect, useState } from "react";
import Apis, { endpoints } from "../configs/Apis";
import cookies from "react-cookies";

import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAttachEmail } from "react-icons/md";
import bgBooking from "../images/booktour-bg.jpg";

function Booking() {
  const user = useSelector((state) => state.user.user);
  const [tourDetail, setTourDetail] = useState([]);
  const [children, setChildren] = useState(0);
  const [adults, setAdults] = useState(0);
  const [total, setTotal] = useState(0);
  const { tourId } = useParams();
  const history = useHistory();

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: "0"
  })

  useEffect(() => {
    handleLoadTourDetail();
  }, []);

  function total_payment() {
    let inputCountAdults = document.getElementById("inputCountAdults");
    let inputCountChildren = document.getElementById("inputCountChildren");
    let inputPriceAdult = document.getElementById("inputPriceAdult");
    let inputPriceChild = document.getElementById("inputPriceChild");

    var adultPrice = parseFloat(inputPriceAdult.value);
    var childPrice = parseFloat(inputPriceChild.value);
    var num_adults = parseFloat(inputCountAdults.value);
    var num_children = parseFloat(inputCountChildren.value);
    if (isNaN(num_adults)) num_adults = 0;
    if (isNaN(num_children)) num_children = 0;
    var total = num_adults * adultPrice + num_children * childPrice;
    setTotal(total);
  }

  const handleLoadTourDetail = async () => {
    try {
      const res = await Apis.get(endpoints["tour-detail"](tourId));
      setTourDetail(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(window.confirm("Bạn muốn đặt chuyến đi này?")) {
      try {
        const res = await Apis.post(
          endpoints["booking"](tourId),
          {
            adults: adults,
            children: children,
            total: total,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.load("access_token")}`,
            },
          }
        );
        
        alert(`
        ---------- Bạn đã đặt vé thành công! --------- 
        Cám ơn quý khách đã ủng hộ dịch vụ của chúng tôi!`
        );
        history.push("/");
      } catch (error) {
        console.error(error);
      }
    }   
  };

  return (
    <div id="main">
      <div className="book-tour-wrap">
        <div className="container book-tour">
          <div className="row">
            <div className="col col-lg-5">
              <div className="book-tour__contact">
                <div className="book-tour__title">
                  <h3>
                    Du lịch Hà Nội - Yên Tử - Hạ Long - Tràng An - Sapa -
                    Fansipan từ Sài Gòn
                  </h3>
                </div>
                <div className="book-tour__type">
                  <h2>Du lịch trong nước</h2>
                </div>
                <ul className="book-tour__list">
                  <li>
                    <a href="mailto:ngoccuong01032000@gmail.com">
                      <MdAttachEmail />
                      ngoccuong01032000@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+84337152172">
                      <BsFillTelephoneFill />
                      0337152172
                    </a>
                  </li>
                </ul>
                <div className="book-tour__img">
                  <img src={bgBooking} alt="book-tour" />
                </div>
              </div>
            </div>
            <div className="col col-lg-7">
              <div className="book-tour__content">
                <div className="tour-required">
                  <p>
                    Dấu <span className="book-required">*</span> là thông tin
                    bắt buộc
                  </p>
                </div>
                <form onSubmit={handleSubmit} className="form-add">
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        htmlFor="inputTourId"
                        className="form-label col-form-label-lg "
                      >
                        Mã tour
                      </label>
                      <input
                        type="text"
                        readOnly
                        className="form-control form-control-lg"
                        id="inputTourId"
                        value={tourId}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label
                        htmlFor="inputName"
                        className="form-label col-form-label-lg "
                      >
                        Họ tên <span className="book-required">*</span>
                      </label>
                      <input
                        type="text"
                        readOnly
                        className="form-control form-control-lg"
                        id="inputName"
                        value={`${user.last_name} ${user.first_name}`}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        htmlFor="inputEmail"
                        className="form-label col-form-label-lg "
                      >
                        Email <span className="book-required">*</span>
                      </label>
                      <input
                        type="email"
                        readOnly
                        className="form-control form-control-lg"
                        id="inputEmail"
                        value={user.email}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label
                        htmlFor="inputPhone"
                        className="form-label col-form-label-lg "
                      >
                        Số điện thoại <span className="book-required">*</span>
                      </label>
                      <input
                        type="text"
                        readOnly
                        className="form-control form-control-lg"
                        id="inputPhone"
                        value={user.phone}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        htmlFor="inputCountAdults"
                        className="form-label col-form-label-lg"
                      >
                        Số người lớn <span className="book-required">*</span>
                      </label>
                      <input
                        type="number"
                        onInput={total_payment}
                        className="form-control form-control-lg"
                        id="inputCountAdults"
                        value={adults}
                        min="0"
                        onChange={(e) => setAdults(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label
                        htmlFor="inputCountChildren"
                        className="form-label col-form-label-lg"
                      >
                        Số người trẻ em <span className="book-required">*</span>
                      </label>
                      <input
                        type="number"
                        onInput={total_payment}
                        className="form-control form-control-lg"
                        id="inputCountChildren"
                        value={children}
                        onChange={(e) => setChildren(e.target.value)}
                        min="0"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        htmlFor="inputPriceAdult"
                        className="form-label col-form-label-lg"
                      >
                        Giá người lớn
                      </label>
                      <div className="input-group">
                        <input
                          type="number"
                          readOnly
                          className="form-control"
                          id="inputPriceAdult"
                          aria-label="Dollar amount (with dot and two decimal places)"
                          value={tourDetail.adults_price}
                          min="0"
                        />
                        <span className="input-group-text">$</span>
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <label
                        htmlFor="inputPriceChild"
                        className="form-label col-form-label-lg"
                      >
                        Giá trẻ em
                      </label>
                      <div className="input-group">
                        <input
                          type="number"
                          readOnly
                          className="form-control"
                          id="inputPriceChild"
                          aria-label="Dollar amount (with dot and two decimal places)"
                          value={tourDetail.children_price}
                          min="0"
                        />
                        <span className="input-group-text">$</span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        htmlFor="inputTimeStart"
                        className="form-label col-form-label-lg"
                      >
                        Ngày bắt đầu
                      </label>
                      <input
                        type="date"
                        readOnly
                        className="form-control form-control-lg"
                        id="inputTimeStart"
                        value={tourDetail.start_date}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label
                        htmlFor="inputTimeEnd"
                        className="form-label col-form-label-lg"
                      >
                        Ngày kết thúc
                      </label>
                      <input
                        type="date"
                        readOnly
                        className="form-control form-control-lg"
                        id="inputTimeEnd"
                        value={tourDetail.end_date}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="pay-radio-1"
                      className="form-label col-form-label-lg"
                    >
                      Phương thức thanh toán
                    </label>
                    <div className="form-check form-check-paytour">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="pay-radio-1"
                        value="TraTienMat"
                        checked
                      />
                      <label className="form-check-label" htmlFor="pay-radio-1">
                        Thanh toán bằng tiền mặt
                      </label>
                    </div>
                    <div className="form-check form-check-paytour">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="pay-radio-2"
                        value="MoMo"
                      />
                      <label className="form-check-label" htmlFor="pay-radio-2">
                        Thanh toán thông qua Ví MoMo
                      </label>
                    </div>
                    <div className="form-check form-check-paytour">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="pay-radio-3"
                        value="ZaloPay"
                      />
                      <label className="form-check-label" htmlFor="pay-radio-3">
                        Thanh toán thông qua ZaloPay
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <label
                      htmlFor="summernote"
                      className="form-label col-form-label-lg"
                    >
                      Ghi chú
                    </label>
                    <textarea
                      className="form-control"
                      name="editordata"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="wrap-submit">
                    <div className="book-tour-total">
                      Tổng thanh toán: <span id="price-of-tour">{formatter.format(total)}</span>
                    </div>
                    <button type="submit" className="btn btn-lg">
                      Đặt vé
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

export default Booking;
