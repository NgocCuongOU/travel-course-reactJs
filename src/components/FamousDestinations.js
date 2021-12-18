import destinationImg from "../images/1.png";

function FamousDestinations() {
  return (
    <section className="travel-main popular-destination">
      <div className="container">
        <div className="row align-item">
          <div className="col col-lg-6">
            <div className="section-title">
              <h3>Địa điểm nổi tiếng</h3>
              <p>
                "&#9752;Du lịch – ban đầu nó khiến bạn không thốt nên lời, và sau đó biến bạn trở thành một người kể chuyện.&#9752;"
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-4">
            <div className="single-destination">
              <div className="thumb">
                <img src={destinationImg} alt="thumb1" />
              </div>
              <div className="single-destination__content">
                <p className="single-destination__content-title align-item">
                  Brazil
                  <a href="">03 Places</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="single-destination">
              <div className="thumb">
                <img src={destinationImg} alt="thumb1" />
              </div>
              <div className="single-destination__content">
                <p className="single-destination__content-title align-item">
                  Brazil
                  <a href="">03 Places</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="single-destination">
              <div className="thumb">
                <img src={destinationImg} alt="thumb1" />
              </div>
              <div className="single-destination__content">
                <p className="single-destination__content-title align-item">
                  Brazil
                  <a href="">03 Places</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="single-destination">
              <div className="thumb">
                <img src={destinationImg} alt="thumb1" />
              </div>
              <div className="single-destination__content">
                <p className="single-destination__content-title align-item">
                  Brazil
                  <a href="">03 Places</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="single-destination">
              <div className="thumb">
                <img src={destinationImg} alt="thumb1" />
              </div>
              <div className="single-destination__content">
                <p className="single-destination__content-title align-item">
                  Brazil
                  <a href="">03 Places</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col col-lg-4">
            <div className="single-destination">
              <div className="thumb">
                <img src={destinationImg} alt="thumb1" />
              </div>
              <div className="single-destination__content">
                <p className="single-destination__content-title align-item ">
                  Brazil
                  <a href="">03 Places</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FamousDestinations;
