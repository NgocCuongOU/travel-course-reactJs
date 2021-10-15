import '../css/about.css'
import '../css/contact.css'
import '../css/blog-details.css'
import '../css/tour-detail.css'
import { BsFillInfoCircleFill, BsFillMapFill, BsInfoCircleFill, BsPaperclip,  } from 'react-icons/bs'
import { BiNote, BiCommentDetail } from 'react-icons/bi'
import React, { useEffect, useState } from 'react'
import Apis, { endpoints } from '../configs/Apis'
import { useParams } from 'react-router'
import { css } from '@emotion/react'
import PulseLoader from 'react-spinners/PulseLoader'
import InfoRightTourDetail from '../components/InfoRightTourDetail'

function TourDetail() {
    const [tourDetail, setTourDetail] = useState([])
    let { tourId } = useParams()
    const override = css `
        display: block;
        margin: 0 auto;
        border-color: blue;
        text-align: center;
    `
    
    useEffect(() => {
        const loadTourDetail = async () => {
            try {
                let res = await Apis.get(endpoints["tour-detail"](tourId))
                console.log(res.data)
 
                setTourDetail(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        loadTourDetail()
    }, [])

    const handleText = () => {
        let introduction = document.querySelector(".tour-detail__des")
        let service = document.querySelector(".tour-detail__content-main.service")
        let note = document.querySelector(".tour-detail__content-main.note")

        if (tourDetail.introduction) {
            introduction.innerHTML = tourDetail.introduction
        }

        if (tourDetail.service) {
            service.innerHTML = tourDetail.service
        }

        if (tourDetail.note) {
            note.innerHTML = tourDetail.note
        }
    }

    handleText()

    return (
        <div id="main">
            <div class="container tour-detail">
                <div class="row">
                    <div class="col col-lg-12">
                        <div class="tour-title">
                            <h2>{tourDetail.name}</h2>
                        </div>
                    </div>
                    <div class="col col-lg-12">
                        <div class="tour-rating">
                            <ul class="rating">
                                <li><a href="#"><i class="far fa-star"></i></a></li>
                                <li><a href="#"><i class="far fa-star"></i></a></li>
                                <li><a href="#"><i class="far fa-star"></i></a></li>
                                <li><a href="#"><i class="far fa-star"></i></a></li>
                                <li><a href="#"><i class="far fa-star"></i></a></li>
                            </ul>
                            <div class="rating-info">
                                <span class="num-first">4.75</span>
                                <span>/</span>
                                <span class="num-last">5</span>
                                trong
                                <span class="num-sum"><strong>210</strong></span>
                                đánh giá
                            </div>
                        </div>  
                    </div>
                </div>
                <div class="row">
                    <div class="col col-lg-8">
                        <div class="row">
                            <div class="col col-lg-12">
                                <div id="carouselTourDetailIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                    <li data-target="#carouselTourDetailIndicators" data-slide-to="0" class="active"></li>
                                    <li data-target="#carouselTourDetailIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselTourDetailIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100 h-100" src="./img/tour-detail/ban-cat-cat-du-lich-sapa-gia-re.jpg" alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 h-100" src="./img/tour-detail/ban-cat-cat-tour-sapa-gia-re.jpg" alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100 h-100" src="./img/tour-detail/cho-sapa-du-lich-mien-bac-gia-re.jpg" alt="Third slide" />
                                    </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselTourDetailIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselTourDetailIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-lg-12">
                                <div class="tour-detail__title">
                                    <h3 id="journey"><i class="fas fa-info-circle mr-3"></i>Điểm nhấn hành trình</h3>
                                </div>
                                <div class="tour-detail__content">
                                    <InfoRightTourDetail tourDetail={tourDetail} />
                                    <div class="tour-detail__des">
                                        <PulseLoader loading={true} css={override} size={15} />
                                    </div>
                                </div>
                            </div>
                            <div class="col col-lg-12">
                                <div class="tour-detail__title">
                                    <h3 id="journey-map"><i class="fas fa-map-marked mr-3"></i>Lịch trình</h3>
                                </div>
                                <div class="tour-detail__content">
                                    <div class="tour-detail__content-title">
                                        <h4>TP.HCM - Hà Nội - Hạ Long (Ăn trưa, chiều)</h4>
                                    </div>
                                    <div class="tour-detail__content-main">
                                        <h4>Sáng:    Quý khách có mặt tại ga quốc nội, sân bay Tân Sơn Nhất trước giờ bay ít nhất ba tiếng.</h4>
                                        <ul>
                                            <li>Đại diện công ty Du Lịch Việt đón và hỗ trợ Quý Khách làm thủ tục đón chuyến bay đi Hà Nội.</li>
                                            <li>Đến sân bay Nội Bài, Hướng Dẫn Viên đón đoàn, Khởi hành đến Hạ Long. Đến núi Yên Tử - ngọn núi cao 1068 m so với mực nước biển, một thắng cảnh thiên nhiên còn lưu giữ hệ thống các di tích lịch sử văn hóa gắn với sự ra đời, hình thành và phát triển của thiền phái Trúc Lâm Yên Tử, được mệnh danh là “đất tổ Phật giáo Việt Nam”.</li>
                                        </ul>
                                        <h4>Trưa: Dùng cơm trưa.</h4>
                                        <ul>
                                            <li>Quý khách lên núi bằng cáp treo (chi phí cáp treo tự túc), tham quan chùa Hoa Yên, Bảo Tháp, Trúc Lâm Tam Tổ, Hàng Tùng 700 tuổi…xuống núi tham quan Thiền Viện Trúc Lâm với quả cầu Như Ý nặng 6 tấn được xếp kỷ lục guiness Việt Nam.</li>
                                            <li>Đoàn khởi hành đến Hạ Long.</li>
                                        </ul>
                                        <h4>Tối:  Dùng bữa tối. Nghỉ đêm tại Hạ Long.</h4>
                                        <ul>
                                            <li>Quý khách tự do dạo phố, mua sắm tại chợ đêm hoặc tham gia khu Sunworld Hạ Long Park với tất cả khu trò chơi trong nhà, ngoài trời hoành tráng có các khu Công viên Rồng, Cáp treo Nữ Hoàng vòng quay Sun wheel…(chi phí tự túc).</li>
                                        </ul>
                                    </div>
                                    <div class="tour-detail__content-title">
                                        <h4>HẠ LONG – NINH BÌNH (Ăn sáng, trưa, chiều)</h4>
                                    </div>
                                    <div class="tour-detail__content-main">
                                        <h4>Sáng:    Quý khách có mặt tại ga quốc nội, sân bay Tân Sơn Nhất trước giờ bay ít nhất ba tiếng.</h4>
                                        <ul>
                                            <li>Đại diện công ty Du Lịch Việt đón và hỗ trợ Quý Khách làm thủ tục đón chuyến bay đi Hà Nội.</li>
                                            <li>Đến sân bay Nội Bài, Hướng Dẫn Viên đón đoàn, Khởi hành đến Hạ Long. Đến núi Yên Tử - ngọn núi cao 1068 m so với mực nước biển, một thắng cảnh thiên nhiên còn lưu giữ hệ thống các di tích lịch sử văn hóa gắn với sự ra đời, hình thành và phát triển của thiền phái Trúc Lâm Yên Tử, được mệnh danh là “đất tổ Phật giáo Việt Nam”.</li>
                                        </ul>
                                        <h4>Trưa: Dùng cơm trưa.</h4>
                                        <ul>
                                            <li>Quý khách lên núi bằng cáp treo (chi phí cáp treo tự túc), tham quan chùa Hoa Yên, Bảo Tháp, Trúc Lâm Tam Tổ, Hàng Tùng 700 tuổi…xuống núi tham quan Thiền Viện Trúc Lâm với quả cầu Như Ý nặng 6 tấn được xếp kỷ lục guiness Việt Nam.</li>
                                            <li>Đoàn khởi hành đến Hạ Long.</li>
                                        </ul>
                                        <h4>Tối:  Dùng bữa tối. Nghỉ đêm tại Hạ Long.</h4>
                                        <ul>
                                            <li>Quý khách tự do dạo phố, mua sắm tại chợ đêm hoặc tham gia khu Sunworld Hạ Long Park với tất cả khu trò chơi trong nhà, ngoài trời hoành tráng có các khu Công viên Rồng, Cáp treo Nữ Hoàng vòng quay Sun wheel…(chi phí tự túc).</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-lg-12">
                                <div class="tour-detail__title">
                                    <h3 id="services"><i class="fas fa-paperclip mr-3"></i>Dịch vụ bao gồm và không bao gồm</h3>
                                </div>
                                <div class="tour-detail__content">
                                    <div class="tour-detail__content-main service">
                                        <PulseLoader loading={true} css={override} size={15} />
                                    </div>
                                </div>
                            </div>
                            <div class="col col-lg-12">
                                <div class="tour-detail__title">
                                    <h3 id="note"><i class="far fa-sticky-note mr-3"></i>Ghi chú</h3>
                                </div>
                                <div class="tour-detail__content">
                                    <div class="tour-detail__content-main note">
                                        <PulseLoader loading={true} css={override} size={15} />
                                    </div>
                                </div>
                            </div>
                            <div class="col col-lg-12">
                                <div class="tour-detail__gb">
                                    <p class="text-center fs-5"><strong>KÍNH CHÚC QUÝ KHÁCH CHUYẾN ĐI THÚ VỊ VÀ BỔ ÍCH !</strong></p>
                                </div>
                            </div>
                            <div class="col col-lg-12">
                                <div class="tour-detail__title">
                                    <h3 id="comment"><i class="far fa-comments mr-3"></i>Bình luận</h3>
                                </div>
                                <div class="tour-detail__content">
                                    <div class="comments-area">
                                        <h4>05 bình luận</h4>
                                        <div class="comments-list">
                                            <div class="single-comment">
                                                <div class="single-comment__thumb">
                                                    <img src="././img/user/comment_1.png" alt="user-1" />
                                                </div>
                                                <div class="single-comment__des">
                                                    <p class="single-comment__content">Cho em hỏi mấy anh chị đã ra trường ở OU hiện đã làm công việc gì vậy ạ. Anh chị có xin việc dễ dàng ko. Vì em thấy có nhìu doanh nghiệp ưu tiên bằng ĐH của những trường top.</p>
                                                    <div class="comment-user">
                                                        <h5><a href="#">Cao Ngọc Cường</a></h5>
                                                        <p class="date">01 Tháng 03 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-comment">
                                                <div class="single-comment__thumb">
                                                    <img src="././img/user/comment_2.png" alt="user-1" />
                                                </div>
                                                <div class="single-comment__des">
                                                    <p class="single-comment__content">Một bài viết thực sự củm động :((</p>
                                                    <div class="comment-user">
                                                        <h5><a href="#">Trần Vũ Khang</a></h5>
                                                        <p class="date">02 Tháng 03 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-comment">
                                                <div class="single-comment__thumb">
                                                    <img src="././img/user/comment_3.png" alt="user-1" />
                                                </div>
                                                <div class="single-comment__des">
                                                    <p class="single-comment__content">học trường nào cũng được, quan trọng là giá trị bản thân có được đánh bóng bởi chính mình hay là không, mới quan trọng. Ví dụ như mấy cuộc thi của L'Oreal, hay Nestlé đâu có cần xem bằng cấp gì, quan trọng là năng lực bản thân mình thể hiện thôi. Nên nếu các bạn đã tin tưởng chọn Ou làm nơi để các bạn trau dồi thì chắc chắn một điều là các bạn đã không có điểm số cao để vào các trường Top lớn. Vì thế, việc bây giờ là các bạn phải cố gắng trau dồi hết mức có thể để bản thân mình có đủ skill, đừng tự ti vì mình học trường thấp hơn mà hãy suy nghĩ rằng mình sẽ giỏi như họ vào một thời điểm trong tương lai, đến lúc đó vững vàng mà chọn doanh nghiệp lớn để vào. dè deeee~</p>
                                                    <div class="comment-user">
                                                        <h5><a href="#">Cao Ngọc Cường</a></h5>
                                                        <p class="date">01 Tháng 03 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-comment">
                                                <div class="single-comment__thumb">
                                                    <img src="././img/user/comment_1.png" alt="user-1" />
                                                </div>
                                                <div class="single-comment__des">
                                                    <p class="single-comment__content">Bài viết rất xuất sắc</p>
                                                    <div class="comment-user">
                                                        <h5><a href="#">Cao Ngọc Cường</a></h5>
                                                        <p class="date">01 Tháng 03 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="single-comment">
                                                <div class="single-comment__thumb">
                                                    <img src="././img/user/comment_3.png" alt="user-1" />
                                                </div>
                                                <div class="single-comment__des">
                                                    <p class="single-comment__content">Bài viết rất xuất sắc</p>
                                                    <div class="comment-user">
                                                        <h5><a href="#">Cao Ngọc Cường</a></h5>
                                                        <p class="date">01 Tháng 03 2021</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="comment-box">
                                        <div class="user-thumb">
                                            <img src="./img/avtar/avtar.jpg" alt="user" />
                                        </div>
                                        <div class="user-comment">
                                            <textarea name="" id="" cols="5" rows="2" placeholder="Viết bình luận của bạn..."></textarea>
                                            <div class="user-action">
                                                <button class="user-btn back">Hủy</button>
                                                <button class="user-btn submit">Bình luận</button>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col col-lg-4">
                        <div class="box-right">
                            <div class="tour-box-info">
                                <div class="tour-name">{tourDetail.name}</div>
                                <div class="tour-box-detail">
                                    <ul>
                                        <li>
                                            <span class="tour-key">Mã chuyến đi:</span>
                                            <span class="tour-value">{tourDetail.id}</span>
                                        </li>
                                        <li>
                                            <span class="tour-key">Thời gian:</span>
                                            <span class="tour-value">{`${tourDetail.tour_days} ngày ${tourDetail.tour_nights} đêm`}</span>
                                        </li>
                                        <li>
                                            <span class="tour-key">Ngày khởi hành:</span>
                                            <span class="tour-value">{tourDetail.start_date}</span>
                                        </li>
                                        <li>
                                            <span class="tour-key">Ngày kết thúc:</span>
                                            <span class="tour-value">{tourDetail.end_date}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="tour-box-fix">
                                <div class="tour-box-price">
                                    <span class="tour-box-price__text">Giá từ: </span>
                                    <span class="tour-box-price__num">{tourDetail.children_price}</span>
                                    <span class="tour-box-price__nor"> 1.999.999đ</span>
                                </div>
                                <div class="tour-box-btn text-center">
                                    <a href="./bookingTour.html" class="btn btn-tdetail">Đặt vé</a>
                                </div>
                            </div>
                            <div class="tour-box-index">
                                <ul>
                                    <li class="active">
                                        <a href="#journey">
                                            <span><BsFillInfoCircleFill /></span>
                                            Điểm nhấn hành trình
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#journey-map">
                                            <span><BsFillMapFill /></span>
                                            Lịch trình
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#services">
                                            <span><BsPaperclip /></span>
                                            Dịch vụ bao gồm và không bao gồm
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#note">
                                            <span><BiNote /></span>
                                            Ghi chú
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#comment">
                                            <span><BiCommentDetail /></span>
                                            Bình luận
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourDetail