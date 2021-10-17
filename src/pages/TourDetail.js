import '../css/about.css'
import '../css/contact.css'
import '../css/blog-details.css'
import '../css/tour-detail.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BsFillInfoCircleFill, BsFillMapFill, BsPaperclip,  } from 'react-icons/bs'
import { BiNote, BiCommentDetail } from 'react-icons/bi'
import React, { useEffect, useState } from 'react'
import Apis, { endpoints } from '../configs/Apis'
import { useParams } from 'react-router'
import { css } from '@emotion/react'
import InfoRightTourDetail from '../components/InfoRightTourDetail'
import Schedule from '../components/Schedules'
import { Markup } from 'interweave'
import { Carousel } from 'react-bootstrap'

function TourDetail() {
    const [tourDetail, setTourDetail] = useState([])
    const [tourScheldules, setTourSchedules] = useState([])
    const [tourImages, setTourImages] = useState([])

    let { tourId } = useParams()
    const override = css `
        display: block;
        margin: 0 auto;
        border-color: blue;
        text-align: center;
    `
    
    useEffect(() => {    
        loadTourDetail()
        loadTourSchedules()
        loadImages()
    }, [])

    const loadTourDetail = async () => {
        try {
            let res = await Apis.get(endpoints["tour-detail"](tourId))

            setTourDetail(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const loadTourSchedules = async () => {
        try {
            let res = await Apis.get(endpoints["tour-schedules"](tourId))
            
            setTourSchedules(res.data)

        } catch (error) {
            console.error(error)
        }
    }

    const loadImages = async () => {
        try {
            let res = await Apis.get(endpoints["tour-images"](tourId))
            setTourImages(res.data)
            
        } catch (error) {
            console.error(error)
        }
    }

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
                                <Carousel>
                                    { tourImages.map(image => {
                                        return (
                                            <Carousel.Item interval={3000}>
                                                <img
                                                className="d-block w-100"
                                                src={image.image}
                                                alt="First slide"
                                                />
                                            </Carousel.Item>
                                        )
                                    })}
                                </Carousel>
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
                                        <Markup content={tourDetail.introduction} />
                                    </div>
                                </div>
                            </div>
                            <div class="col col-lg-12">
                                <div class="tour-detail__title">
                                    <h3 id="journey-map"><i class="fas fa-map-marked mr-3"></i>Lịch trình</h3>
                                </div>
                                {
                                    tourScheldules.map(schedule => {
                                        return (
                                            <Schedule schedule={schedule} />
                                        )
                                    })
                                }
                                
                            </div>
                            <div class="col col-lg-12">
                                <div class="tour-detail__title">
                                    <h3 id="services"><i class="fas fa-paperclip mr-3"></i>Dịch vụ bao gồm và không bao gồm</h3>
                                </div>
                                <div class="tour-detail__content">
                                    <div class="tour-detail__content-main service">
                                        <Markup content={tourDetail.service} />
                                    </div>
                                </div>
                            </div>
                            <div class="col col-lg-12">
                                <div class="tour-detail__title">
                                    <h3 id="note"><i class="far fa-sticky-note mr-3"></i>Ghi chú</h3>
                                </div>
                                <div class="tour-detail__content">
                                    <div class="tour-detail__content-main note">
                                        <Markup content={tourDetail.note} />
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