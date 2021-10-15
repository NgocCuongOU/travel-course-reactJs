import tripImg from '../images/trips/trip-1.png'


function Blogs() {
    return (
        <section className="travel-main trip">
            <div className="container">
                <div className="row align-item">
                    <div className="col col-lg-6">
                        <div className="section-title">
                            <h3>Bản tin gần đây</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-4">
                        <div className="single-trip">
                            <div className="single-trip__img">
                                <img src={tripImg} alt="trip1" />
                            </div>
                            <div className="single-trip__info">
                                <div className="single-trip__date">
                                    <span>Oct 12, 2019</span>
                                </div>
                                <a href="">
                                    <h3>Journeys Are Best Measured In New Friends</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4">
                        <div className="single-trip">
                            <div className="single-trip__img">
                                <img src={tripImg} alt="trip1" />
                            </div>
                            <div className="single-trip__info">
                                <div className="single-trip__date">
                                    <span>Oct 12, 2019</span>
                                </div>
                                <a href="">
                                    <h3>Journeys Are Best Measured In New Friends</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4">
                        <div className="single-trip">
                            <div className="single-trip__img">
                                <img src={tripImg} />
                            </div>
                            <div className="single-trip__info">
                                <div className="single-trip__date">
                                    <span>Oct 12, 2019</span>
                                </div>
                                <a href="">
                                    <h3>Journeys Are Best Measured In New Friends</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs