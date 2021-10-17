function News() {
    return (
        <section className="newletter-area overlay">
            <div className="container">
                <div className="row align-item">
                    <div className="col col-lg-10">
                        <div className="row">
                            <div className="col col-lg-5">
                                <div className="letter-text">
                                    <h4>Đăng kí bản tin của chúng tôi</h4>
                                    <p>Đăng ký bản tin để nhận ưu đãi và về các địa điểm mới để khám phá.</p>
                                </div>
                            </div>
                            <div className="col col-lg-7 align-item">
                                <div className="letter-form">
                                    <div className="row">
                                        <div className="col col-lg-9">
                                            <div className="newsletter_field">
                                                <input type="email" name="" id="" placeholder="Nhập email của bạn..." />
                                            </div>
                                        </div>
                                        <div className="col col-lg-3">
                                            <div className="newletter_btn">
                                                <button type="submit" className="btn">Đăng kí</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default News