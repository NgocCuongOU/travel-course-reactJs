import authorImg from "../images/author/author1.png";

function Testimonials() {
  return (
    <section className="testimonial-area">
      <div className="container">
        <div className="row align-item">
          <div className="testimonial-col">
            <div className="testimonial-main">
              <input type="radio" name="testimonial" id="testimonial-radio1" />
              <input type="radio" name="testimonial" id="testimonial-radio2" />
              <input type="radio" name="testimonial" id="testimonial-radio3" />
              <input type="radio" name="testimonial" id="testimonial-radio4" />

              <div className="testimonial-slide first">
                <div className="testimonial-thumb">
                  <img src={authorImg} alt="author1" />
                  <span>
                    <i className="far fa-comment-dots"></i>
                  </span>
                </div>
                <div className="testimonial-info">
                  <p className="testimonial-info__content">
                    Working in conjunction with humanitarian aid agencies, we
                    have supported programmes to help alleviate human suffering.
                  </p>
                  <h3 className="testimonial-info__author">Tom mouse</h3>
                </div>
              </div>
              <div className="testimonial-slide">
                <div className="testimonial-thumb">
                  <img src={authorImg} alt="author1" />
                  <span>
                    <i className="far fa-comment-dots"></i>
                  </span>
                </div>
                <div className="testimonial-info">
                  <p className="testimonial-info__content">
                    Working in conjunction with humanitarian aid agencies, we
                    have supported programmes to help alleviate human suffering.
                  </p>
                  <h3 className="testimonial-info__author">Tom mouse</h3>
                </div>
              </div>
              <div className="testimonial-slide">
                <div className="testimonial-thumb">
                  <img src={authorImg} alt="author1" />
                  <span>
                    <i className="far fa-comment-dots"></i>
                  </span>
                </div>
                <div className="testimonial-info">
                  <p className="testimonial-info__content">
                    Working in conjunction with humanitarian aid agencies, we
                    have supported programmes to help alleviate human suffering.
                  </p>
                  <h3 className="testimonial-info__author">Tom mouse</h3>
                </div>
              </div>
              <div className="testimonial-slide">
                <div className="testimonial-thumb">
                  <img src={authorImg} alt="author1" />
                  <span>
                    <i className="far fa-comment-dots"></i>
                  </span>
                </div>
                <div className="testimonial-info">
                  <p className="testimonial-info__content">
                    Working in conjunction with humanitarian aid agencies, we
                    have supported programmes to help alleviate human suffering.
                  </p>
                  <h3 className="testimonial-info__author">Tom mouse</h3>
                </div>
              </div>
              <div className="testimonial-nav__auto">
                <div className="testimonial-auto1"></div>
                <div className="testimonial-auto2"></div>
                <div className="testimonial-auto3"></div>
                <div className="testimonial-auto4"></div>
              </div>
            </div>

            <div className="testimonial-nav__manual">
              <label
                htmlFor="testimonial-radio1"
                className="testimonial-btn"
              ></label>
              <label
                htmlFor="testimonial-radio2"
                className="testimonial-btn"
              ></label>
              <label
                htmlFor="testimonial-radio3"
                className="testimonial-btn"
              ></label>
              <label
                htmlFor="testimonial-radio4"
                className="testimonial-btn"
              ></label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
