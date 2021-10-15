import authorImg from '../images/author/author1.png'

function Testimonials() {
    return (
        <section class="testimonial-area">
            <div class="container">
                <div class="row align-item">
                    <div class="testimonial-col">
                        <div class="testimonial-main">

                            <input type="radio" name="testimonial" id="testimonial-radio1" />
                            <input type="radio" name="testimonial" id="testimonial-radio2" />
                            <input type="radio" name="testimonial" id="testimonial-radio3" />
                            <input type="radio" name="testimonial" id="testimonial-radio4" />

                            <div class="testimonial-slide first">
                                <div class="testimonial-thumb">
                                    <img src={authorImg} alt="author1" />
                                    <span><i class="far fa-comment-dots"></i></span>
                                </div>
                                <div class="testimonial-info">
                                    <p class="testimonial-info__content">Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                    <h3 class="testimonial-info__author">Tom mouse</h3>
                                </div>
                            </div>
                            <div class="testimonial-slide">
                                <div class="testimonial-thumb">
                                    <img src={authorImg} alt="author1" />
                                    <span><i class="far fa-comment-dots"></i></span>
                                </div>
                                <div class="testimonial-info">
                                    <p class="testimonial-info__content">Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                    <h3 class="testimonial-info__author">Tom mouse</h3>
                                </div>
                            </div>
                            <div class="testimonial-slide">
                                <div class="testimonial-thumb">
                                    <img src={authorImg} alt="author1" />
                                    <span><i class="far fa-comment-dots"></i></span>
                                </div>
                                <div class="testimonial-info">
                                    <p class="testimonial-info__content">Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                    <h3 class="testimonial-info__author">Tom mouse</h3>
                                </div>
                            </div>
                            <div class="testimonial-slide">
                                <div class="testimonial-thumb">
                                    <img src={authorImg} alt="author1" />
                                    <span><i class="far fa-comment-dots"></i></span>
                                </div>
                                <div class="testimonial-info">
                                    <p class="testimonial-info__content">Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
                                    <h3 class="testimonial-info__author">Tom mouse</h3>
                                </div>
                            </div>
                            <div class="testimonial-nav__auto">
                                <div class="testimonial-auto1"></div>
                                <div class="testimonial-auto2"></div>
                                <div class="testimonial-auto3"></div>
                                <div class="testimonial-auto4"></div>
                            </div>
                            
                        </div>

                        <div class="testimonial-nav__manual">
                            <label for="testimonial-radio1" class="testimonial-btn"></label>
                            <label for="testimonial-radio2" class="testimonial-btn"></label>
                            <label for="testimonial-radio3" class="testimonial-btn"></label>
                            <label for="testimonial-radio4" class="testimonial-btn"></label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials