import slideImg2 from '../images/banner2.png'
import slideImg1 from '../images/banner.png'
import slideImg3 from '../images/banner3.png'
import slideImg4 from '../images/banner4.png'

function Slider() {
    return (
        <div className="slider">
            <div className="sliders">

                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />

                <div className="slide first">
                    <img src={slideImg1} alt="" />
                    <div className="container container-slide">
                        <div className="row">
                            <div className="col col-lg-12 slider-text-align">
                                <div className="slider-text">
                                    <h3>Indonesia</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide ">
                    <img src={slideImg2} alt="" />
                    <div className="container container-slide">
                        <div className="row">
                            <div className="col col-lg-12 slider-text-align">
                                <div className="slider-text">
                                    <h3>Indonesia</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide ">
                    <img src={slideImg3} alt="" />
                    <div className="container container-slide">
                        <div className="row">
                            <div className="col col-lg-12 slider-text-align">
                                <div className="slider-text">
                                    <h3>Indonesia</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="slide ">
                    <img src={slideImg4} alt="" />
                    <div className="container container-slide">
                        <div className="row">
                            <div className="col col-lg-12 slider-text-align">
                                <div className="slider-text">
                                    <h3>Indonesia</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navigation-auto">
                    <div className="auto-btn1"></div>
                    <div className="auto-btn2"></div>
                    <div className="auto-btn3"></div>
                    <div className="auto-btn4"></div>
                </div>
            </div>

            <div className="manual-navigation">
                <label htmlFor="radio1" className="manual-btn"></label>
                <label htmlFor="radio2" className="manual-btn"></label>
                <label htmlFor="radio3" className="manual-btn"></label>
                <label htmlFor="radio4" className="manual-btn"></label>
            </div>
        </div>
    )
}

export default Slider