import Blogs from "../components/Blogs";
import Bradcam from "../components/Bradcam";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

import '../css/about.css'
import hoiAnImg from '../images/hoi-an.jpg'
import blogcoverImg from '../images/blogcover-1.jpg'

function About() {
    return (
        <div id="main">
            <Bradcam title="Về chúng tôi" heading="Tự do trải nghiệm theo phong cách của chính mình." />
            <div className="travel-main about-story">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-12">
                            <div className="about-story__heading">
                                <h3>Hành trình của chúng tôi</h3>
                            </div>
                            <div className="row">
                                <div className="col col-lg-11 offset-lg-1">
                                    <div className="about-story__info">
                                    <div className="row">
                                        <div className="col col-lg-9">
                                            <p>Du lịch là một ngành Công nghiệp không khói, một lĩnh vực đã đem lại một nguồn thu không nhá cho nền Kinh tế Quốc dân. Nó không chỉ mang lại nguồn thu nhập đáng kể cho đất nước mà nó còn tạo ra nhiều việc làm cho Xã hội là đòn bẩy thúc đẩy các ngành Kinh tế khác cùng phát triển. Ta có thể coi ngành Du lịch như một chiếc cầu giao lưu Văn hoá giữa các vùng trong mét Quốc gia và các Quốc gia khác trên toàn Thế giới. Du lịch góp phần nâng cao dân trí, thúc đẩy sự tiến bộ Xã hội, mở rộng tình hữu nghị, sự hiểu biết lẫn nhau về Truyền thống, Lịch sử giữa các Quốc gia trên Thế giới, tạo nên sự Hoà bình trên toàn nhân loại.</p>
                                            <p>Cùng với sự phát triển đó Du lịch Việt Nam đang hoà mình vào Du lịch Thế giới bởi sự giúp đỡ về cơ sơ vật chất của nhiều Quốc gia có nền Du lịch phát triển, bởi sự đầu tư đúng đắn của Nhà nước cũng như của nhiều Địa phương. Hơn nữa ở nước ta tiềm năng Du lịch là rất lớn, vị trí địa lý thuận lợi cho việc đi lại nối kết nước ta với các khu vực trên Thế giới, có nguồn tài nguyên phong phó và đa dạng đó là hàng loạt các danh lam thắng cảnh nổi tiếng như: Vịnh Hạ Long, Cố Đô Huế, Thánh Địa Mỹ Sơn, Động Phong Nha. . . Trải qua bao biến cố thăng trầm của lịch sử khác nhau đã tạo cho Việt Nam những điểm khác biệt thu hút khách Du lịch mọi nơi trên khắp Thế giới.</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="about-story__thumb">
                                        <div className="row">
                                            <div className="col col-lg-5">
                                                <div className="thumb part-left">
                                                    <img src={blogcoverImg} alt="story-1" />
                                                </div>
                                            </div>
                                            <div className="col col-lg-6">
                                                <div className="thumb part-right">
                                                    <img src={hoiAnImg} alt="story-2" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="counter-wrap">
                                        <div className="row">
                                            <div className="col col-lg-4">
                                                <div className="single_counter">
                                                    <h3 className="counter">213</h3>
                                                    <p>Chuyến tham quan đã thành công</p>
                                                </div>
                                            </div>
                                            <div className="col col-lg-4">
                                                <div className="single_counter">
                                                    <h3 className="counter">23</h3>
                                                    <p>Sắp xếp các tour du lịch hàng năm</p>
                                                </div>
                                            </div>
                                            <div className="col col-lg-4">
                                                <div className="single_counter">
                                                    <h3 className="counter">123</h3>
                                                    <p>Khách hàng hài lòng</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Services />
            <Testimonials />
            <Blogs />
        </div>
    )
}

export default About