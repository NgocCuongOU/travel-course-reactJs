import "../css/about.css";
import "../css/contact.css";
import "../css/blog-details.css";
import "../css/tour-detail.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BiNote, BiCommentDetail } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import Apis, { endpoints } from "../configs/Apis";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cookies from "react-cookies";
import Rating from "react-rating";
import { Markup } from "interweave";

import InfoRightTourDetail from "../components/InfoRightTourDetail";
import Schedule from "../components/Schedules";
import Comment from "../components/Comment";

import defaultAvatar from "../images/avtar/default-avatar.png";
import ratingStarEmpty from "../images/rating/star-icon.png";
import ratingStarFull from "../images/rating/star-icon-full.png";

import {
  BsFillInfoCircleFill,
  BsPaperclip,
} from "react-icons/bs";

import { FiMap } from 'react-icons/fi'

function TourDetail() {
  const [tourDetail, setTourDetail] = useState([]);
  const [tourScheldules, setTourSchedules] = useState([]);
  const [tourImages, setTourImages] = useState([]);
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");
  const [checkComment, setCheckComment] = useState(1);
  const [rating, setRating] = useState(0);
  const [commentCounter, setCommentCounter] = useState(null);

  const user = useSelector((state) => state.user.user);

  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0
  })

  let { tourId } = useParams();

  useEffect(() => {
    loadTourDetail();
    loadCommentsTour();
    loadTourSchedules();
    loadImages();
  }, [checkComment]);

  const loadTourDetail = async () => {
    try {
      let res = await Apis.get(endpoints["tour-detail"](tourId), {
        headers: {
          Authorization: `Bearer ${cookies.load("access_token")}`,
        },
      });

      setTourDetail(res.data);
      setRating(res.data.rate);
      setCommentCounter(res.data.comment_count);
    } catch (error) {
      console.log(error);
    }
  };

  const loadCommentsTour = async () => {
    try {
      const res = await Apis.get(endpoints["comments-tour"](tourId));

      setComments(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadTourSchedules = async () => {
    try {
      let res = await Apis.get(endpoints["tour-schedules"](tourId));

      setTourSchedules(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadImages = async () => {
    try {
      let res = await Apis.get(endpoints["tour-images"](tourId));
      setTourImages(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await Apis.post(
        endpoints["add-comment-tour"](tourId),
        {
          content: commentContent,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.load("access_token")}`,
          },
        }
      );

      const commentArea = document.getElementById("commentAreaId");

      comments.push(res.data);
      setComments(comments);
      setCheckComment(comments.length);
      setCommentContent("");
      commentArea.focus();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRating = async (rate) => {
    try {
      if (window.confirm("B???n mu???n ????nh gi?? tour du l???ch n??y?")) {
        const res = await Apis.post(
          endpoints["rating"](tourId),
          {
            rating: rate,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.load("access_token")}`,
            },
          }
        );
      }
    } catch (error) {
      console.error(error);
    }
  };

  let ratingComponent = "";

  let commentBox = (
    <form className="comment-box">
      <div className="user-thumb">
        <img src={defaultAvatar} alt="user" />
      </div>
      <div className="user-comment">
        <textarea
          id="commentAreaId"
          value={commentContent}
          cols="5"
          rows="2"
          placeholder="Vi???t b??nh lu???n c???a b???n..."
          onChange={(event) => setCommentContent(event.target.value)}
        ></textarea>
        <div className="user-action">
          <button className="user-btn back">H???y</button>
          <button className="user-btn submit">
            <Link to="/login">B??nh lu???n</Link>
          </button>
        </div>
      </div>
    </form>
  );

  let booking = (
    <div className="tour-box-btn text-center">
      <Link to={`/login`} className="btn btn-tdetail">
        ?????t v??
      </Link>
    </div>
  );

  if (user !== null && user !== undefined) {
    commentBox = (
      <form onSubmit={handleSubmit} className="comment-box">
        <div className="user-thumb">
          <img src={user.avatar} alt={`${user.last_name} ${user.first_name}`} />
        </div>
        <div className="user-comment">
          <textarea
            id="commentAreaId"
            value={commentContent}
            cols="5"
            rows="2"
            placeholder="Vi???t b??nh lu???n c???a b???n..."
            onChange={(event) => setCommentContent(event.target.value)}
          ></textarea>
          <div className="user-action">
            <button type="reset" className="user-btn back">
              H???y
            </button>
            <button type="submit" className="user-btn submit">
              B??nh lu???n
            </button>
          </div>
        </div>
      </form>
    );

    ratingComponent = (
      <Rating
        emptySymbol={<img src={ratingStarEmpty} className="icon" />}
        fullSymbol={<img src={ratingStarFull} className="icon" />}
        initialRating={rating}
        onClick={handleRating}
      />
    );

    booking = (
      <div className="tour-box-btn text-center">
        <Link to={`/tours/${tourId}/booking`} className="btn btn-tdetail">
          ?????t v??
        </Link>
      </div>
    );
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
            <div className="tour-rating">{ratingComponent}</div>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-8">
            <div className="row">
              <div className="col col-lg-12">
                <Carousel>
                  {tourImages.map((image) => {
                    return (
                      <Carousel.Item interval={3000}>
                        <img
                          className="d-block w-100"
                          src={image.image}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            </div>
            <div className="row">
              <div className="col col-lg-12">
                <div className="tour-detail__title">
                  <h3 id="journey">
                    <i className="fas fa-info-circle mr-3"></i>??i???m nh???n h??nh
                    tr??nh
                  </h3>
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
                  <h3 id="journey-map">
                    <i className="fas fa-map-marked mr-3"></i>L???ch tr??nh
                  </h3>
                </div>
                {tourScheldules.map((schedule) => {
                  return <Schedule schedule={schedule} />;
                })}
              </div>
              <div className="col col-lg-12">
                <div className="tour-detail__title">
                  <h3 id="services">
                    <i className="fas fa-paperclip mr-3"></i>D???ch v??? bao g???m v??
                    kh??ng bao g???m
                  </h3>
                </div>
                <div className="tour-detail__content">
                  <div className="tour-detail__content-main service">
                    <Markup content={tourDetail.service} />
                  </div>
                </div>
              </div>
              <div className="col col-lg-12">
                <div className="tour-detail__title">
                  <h3 id="note">
                    <i className="far fa-sticky-note mr-3"></i>Ghi ch??
                  </h3>
                </div>
                <div className="tour-detail__content">
                  <div className="tour-detail__content-main note">
                    <Markup content={tourDetail.note} />
                  </div>
                </div>
              </div>
              <div className="col col-lg-12">
                <div className="tour-detail__gb">
                  <p className="text-center fs-5">
                    <strong>
                      K??NH CH??C QU?? KH??CH CHUY???N ??I TH?? V??? V?? B??? ??CH !
                    </strong>
                  </p>
                </div>
              </div>
              <div className="col col-lg-12">
                <div className="tour-detail__title">
                  <h3 id="comment">
                    <i className="far fa-comments mr-3"></i>B??nh lu???n
                  </h3>
                </div>
                <div className="tour-detail__content">
                  <div className="comments-area">
                    <h4>
                      {commentCounter === null ? "" : commentCounter} b??nh lu???n
                    </h4>
                    <div className="comments-list">
                      {comments.map((comment) => {
                        return (
                          <Comment
                            content={comment.content}
                            createdDate={comment.created_date}
                            user={comment.user}
                          />
                        );
                      })}
                    </div>
                  </div>
                  {commentBox}
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
                      <span className="tour-key">M?? chuy???n ??i:</span>
                      <span className="tour-value">{tourDetail.id}</span>
                    </li>
                    <li>
                      <span className="tour-key">Th???i gian:</span>
                      <span className="tour-value">{`${tourDetail.tour_days} ng??y ${tourDetail.tour_nights} ????m`}</span>
                    </li>
                    <li>
                      <span className="tour-key">Ng??y kh???i h??nh:</span>
                      <span className="tour-value">
                        {tourDetail.start_date}
                      </span>
                    </li>
                    <li>
                      <span className="tour-key">Ng??y k???t th??c:</span>
                      <span className="tour-value">{tourDetail.end_date}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="tour-box-fix">
                <div className="tour-box-price">
                  <span className="tour-box-price__text">Gi?? t???: </span>
                  <span className="tour-box-price__num">
                    {formatter.format(tourDetail.adults_price)}
                  </span>
                  <span className="tour-box-price__nor"> {formatter.format(tourDetail.adults_price + 500000)}</span>
                </div>
                {booking}
              </div>
              <div className="tour-box-index">
                <ul>
                  <li className="active">
                    <a href="#journey">
                      <span>
                        <BsFillInfoCircleFill />
                      </span>
                      ??i???m nh???n h??nh tr??nh
                    </a>
                  </li>
                  <li>
                    <a href="#journey-map">
                      <span>
                        <FiMap />
                      </span>
                      L???ch tr??nh
                    </a>
                  </li>
                  <li>
                    <a href="#services">
                      <span>
                        <BsPaperclip />
                      </span>
                      D???ch v??? bao g???m v?? kh??ng bao g???m
                    </a>
                  </li>
                  <li>
                    <a href="#note">
                      <span>
                        <BiNote />
                      </span>
                      Ghi ch??
                    </a>
                  </li>
                  <li>
                    <a href="#comment">
                      <span>
                        <BiCommentDetail />
                      </span>
                      B??nh lu???n
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourDetail;
