import slideImg2 from '../images/banner2.png'
import slideImg1 from '../images/banner.png'
import slideImg3 from '../images/banner3.png'
import slideImg4 from '../images/banner4.png'

function Slider() {
    return (
        <div class="slider">
            <div class="sliders">

                <input type="radio" name="radio-btn" id="radio1" />
                <input type="radio" name="radio-btn" id="radio2" />
                <input type="radio" name="radio-btn" id="radio3" />
                <input type="radio" name="radio-btn" id="radio4" />

                <div class="slide first">
                    <img src={slideImg1} alt="" />
                    <div class="container container-slide">
                        <div class="row">
                            <div class="col col-lg-12 slider-text-align">
                                <div class="slider-text">
                                    <h3>Indonesia</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide ">
                    <img src={slideImg2}alt="" />
                    <div class="container container-slide">
                        <div class="row">
                            <div class="col col-lg-12 slider-text-align">
                                <div class="slider-text">
                                    <h3>Indonesia</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide ">
                    <img src={slideImg3} alt="" />
                    <div class="container container-slide">
                        <div class="row">
                            <div class="col col-lg-12 slider-text-align">
                                <div class="slider-text">
                                    <h3>Indonesia</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slide ">
                    <img src={slideImg4} alt="" />
                    <div class="container container-slide">
                        <div class="row">
                            <div class="col col-lg-12 slider-text-align">
                                <div class="slider-text">
                                    <h3>Indonesia</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navigation-auto">
                    <div class="auto-btn1"></div>
                    <div class="auto-btn2"></div>
                    <div class="auto-btn3"></div>
                    <div class="auto-btn4"></div>
                </div>
            </div>

            <div class="manual-navigation">
                <label for="radio1" class="manual-btn"></label>
                <label for="radio2" class="manual-btn"></label>
                <label for="radio3" class="manual-btn"></label>
                <label for="radio4" class="manual-btn"></label>
            </div>
        </div>
    )
}

export default Slider