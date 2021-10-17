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
import InfoRightTourDetail from '../components/InfoRightTourDetail'
import Schedule from '../components/Schedules'
import { Markup } from 'interweave'
import { Carousel } from 'react-bootstrap'
import Comment from '../components/Comment'
import CommentBox from '../components/CommentBox'

function TourDetail() {
    const [tourDetail, setTourDetail] = useState([])
    const [tourScheldules, setTourSchedules] = useState([])
    const [tourImages, setTourImages] = useState([])

    let { tourId } = useParams()
    
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
            <div className="container tour-detail">
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="tour-title">
                            <h2>{tourDetail.name}</h2>
                        </div>
                    </div>
                    <div className="col col-lg-12">
                        <div className="tour-rating">
                            <ul className="rating">
                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                <li><a href="#"><i className="far fa-star"></i></a></li>
                                <li><a href="#"><i className="far fa-star"></i></a></li>
                            </ul>
                            <div className="rating-info">
                                <span className="num-first">4.75</span>
                                <span>/</span>
                                <span className="num-last">5</span>
                                trong
                                <span className="num-sum"><strong>210</strong></span>
                                đánh giá
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="row">
                    <div className="col col-lg-8">
                        <div className="row">
                            <div className="col col-lg-12">
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
                        <div className="row">
                            <div className="col col-lg-12">
                                <div className="tour-detail__title">
                                    <h3 id="journey"><i className="fas fa-info-circle mr-3"></i>Điểm nhấn hành trình</h3>
                                </div>
                                <div className="tour-detail__content">
                                    <InfoRightTourDetail tourDetail={tourDetail} />
                                    <div className="tour-detail__des">
                                        <Markup content={tourDetail.introduction} />
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-12">
                                <div className="tour-detail__title">
                                    <h3 id="journey-map"><i className="fas fa-map-marked mr-3"></i>Lịch trình</h3>
                                </div>
                                {
                                    tourScheldules.map(schedule => {
                                        return (
                                            <Schedule schedule={schedule} />
                                        )
                                    })
                                }
                                
                            </div>
                            <div className="col col-lg-12">
                                <div className="tour-detail__title">
                                    <h3 id="services"><i className="fas fa-paperclip mr-3"></i>Dịch vụ bao gồm và không bao gồm</h3>
                                </div>
                                <div className="tour-detail__content">
                                    <div className="tour-detail__content-main service">
                                        <Markup content={tourDetail.service} />
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-12">
                                <div className="tour-detail__title">
                                    <h3 id="note"><i className="far fa-sticky-note mr-3"></i>Ghi chú</h3>
                                </div>
                                <div className="tour-detail__content">
                                    <div className="tour-detail__content-main note">
                                        <Markup content={tourDetail.note} />
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-12">
                                <div className="tour-detail__gb">
                                    <p className="text-center fs-5"><strong>KÍNH CHÚC QUÝ KHÁCH CHUYẾN ĐI THÚ VỊ VÀ BỔ ÍCH !</strong></p>
                                </div>
                            </div>
                            <div className="col col-lg-12">
                                <div className="tour-detail__title">
                                    <h3 id="comment"><i className="far fa-comments mr-3"></i>Bình luận</h3>
                                </div>
                                <div className="tour-detail__content">
                                    <div className="comments-area">
                                        <h4>05 bình luận</h4>
                                        <div className="comments-list">
                                            <Comment />
                                            <Comment />
                                            <Comment />
                                            <Comment />
                                            <Comment />
                                        </div>
                                    </div>
                                    <CommentBox />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col col-lg-4">
                        <div className="box-right">
                            <div className="tour-box-info">
                                <div className="tour-name">{tourDetail.name}</div>
                                <div className="tour-box-detail">
                                    <ul>
                                        <li>
                                            <span className="tour-key">Mã chuyến đi:</span>
                                            <span className="tour-value">{tourDetail.id}</span>
                                        </li>
                                        <li>
                                            <span className="tour-key">Thời gian:</span>
                                            <span className="tour-value">{`${tourDetail.tour_days} ngày ${tourDetail.tour_nights} đêm`}</span>
                                        </li>
                                        <li>
                                            <span className="tour-key">Ngày khởi hành:</span>
                                            <span className="tour-value">{tourDetail.start_date}</span>
                                        </li>
                                        <li>
                                            <span className="tour-key">Ngày kết thúc:</span>
                                            <span className="tour-value">{tourDetail.end_date}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tour-box-fix">
                                <div className="tour-box-price">
                                    <span className="tour-box-price__text">Giá từ: </span>
                                    <span className="tour-box-price__num">{tourDetail.children_price}</span>
                                    <span className="tour-box-price__nor"> 1.999.999đ</span>
                                </div>
                                <div className="tour-box-btn text-center">
                                    <a href="./bookingTour.html" className="btn btn-tdetail">Đặt vé</a>
                                </div>
                            </div>
                            <div className="tour-box-index">
                                <ul>
                                    <li className="active">
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