import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Apis, { endpoints } from "../configs/Apis";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Markup } from "interweave";
import cookies from "react-cookies";
import PacmanLoader from "react-spinners/PacmanLoader";
import BeatLoader from "react-spinners/BeatLoader";
import { useLocation, useHistory } from "react-router-dom";

import Bradcam from "../components/Bradcam";
import CategoryWidget from "../components/CategoryWidget";
import SearchWidget from "../components/SearchWidget";
import BlogWidget from "../components/BlogWidget";
import TagWidget from "../components/TagWidget";
import InstagramWidget from "../components/InstagramWidget";
import NewLetterWidget from "../components/NewLetterWidget";
import RelatedBlog from "../components/RelatedBlog";
import Comment from "../components/Comment";

import { BsHeart, BsHeartFill, BsEyeFill } from "react-icons/bs";
import defaultAvatar from "../images/avtar/default-avatar.png";
import { FaUserCircle, FaComments, FaLongArrowAltRight } from "react-icons/fa";

import "../css/main.css";
import "../css/about.css";
import "../css/contact.css";
import "../css/blog.css";
import "../css/blog-details.css";

function BlogDetail() {
  const [blogDetail, setBlogDetail] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentContent, setCommentContent] = useState("");
  const [checkComment, setCheckComment] = useState(1);
  const [views, setViews] = useState(null);
  const [showCommentsCount, setShowCommentsCount] = useState(null);
  const [like, setLike] = useState(0);

  const user = useSelector((state) => state.user.user);
  const location = useLocation();

  let { blogId } = useParams();

  useEffect(() => {
    handleLoadView();
    loadComments();
    loadBlog();
  }, [checkComment, location.pathname, like]);

  const loadBlog = async () => {
    try {
      const res = await Apis.get(endpoints["blog-detail"](blogId), {
        headers: {
          Authorization: `Bearer ${cookies.load("access_token")}`,
        },
      });
      setBlogDetail(res.data);
      setLike(res.data.type);
      setShowCommentsCount(res.data.comment_count);
    } catch (error) {
      console.error(error);
    }
  };

  const loadComments = async () => {
    try {
      const res = await Apis.get(endpoints["comments-post"](blogId));
      setComments(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoadView = async () => {
    try {
      const res = await Apis.get(endpoints["incre-views"](blogId));
      setViews(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLikePost = async (e) => {
    let stateLike = document.querySelector(".like").dataset;
    console.log(stateLike);
    if (stateLike.like === "0") {
      try {
        const res = await Apis.post(
          endpoints["like"](blogId),
          {
            type: 1,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.load("access_token")}`,
            },
          }
        );

        setLike(1);
      } catch (error) {
        console.log(error);
      }
    } else if (stateLike.like === "1") {
      try {
        const res = await Apis.post(
          endpoints["like"](blogId),
          {
            type: 0,
          },
          {
            headers: {
              Authorization: `Bearer ${cookies.load("access_token")}`,
            },
          }
        );

        setLike(0);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await Apis.post(
        endpoints["add-comment-post"](blogId),
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
  }

  let contentLeft = <PacmanLoader loading={true} size={50} color={`#1ec6b6`} />;

  if (
    blogDetail !== null &&
    blogDetail !== undefined &&
    views !== null &&
    showCommentsCount !== null
  ) {
    contentLeft = (
      <div className="blog__left-sidebar">
        <article className="blog-item">
          <div className="blog-item__img">
            <img src={blogDetail.image} alt={blogDetail.title} />
            <Link to={`/blogs/${blogDetail.id}`} className="blog-item__date">
              <h3>{new Date(blogDetail.created_date).getDate()}</h3>
              <p>Th??ng {new Date(blogDetail.created_date).getMonth()}</p>
              <h3>{new Date(blogDetail.created_date).getFullYear()}</h3>
            </Link>
          </div>
          <div className="blog-item__content">
            <h3 className="blog-item__content-title">
              <Link to={`/blogs/${blogDetail.id}`}>{blogDetail.title}</Link>
            </h3>
            <div className="blog-item__wrap">
              <ul className="blog-item__info">
                <li>
                  <Link to={`#`}>
                    <FaUserCircle />
                    {`${blogDetail.user.last_name} ${blogDetail.user.first_name}`}
                  </Link>
                </li>
                <li>
                  <a href="#commentAreaId">
                    <FaComments />
                    {showCommentsCount === null ? "" : showCommentsCount} b??nh
                    lu???n
                  </a>
                </li>
                <li>
                  <span>
                    <BsEyeFill />
                    L?????t xem: {views.views}
                  </span>
                </li>
              </ul>
            </div>
            <div className="blog-item__content-detail">
              <Markup content={blogDetail.content} />
            </div>
            <div className="blog-tag">
              Tag:
              {blogDetail.tags.map((tag) => (
                <Link to={`#`}>{` ${tag.name}, `}</Link>
              ))}
            </div>
            <div className="blog-cate">
              Danh m???c:
              <Link to={`#`}> {blogDetail.category.name}</Link>
            </div>
            <div className="blog-item__reaction">
              <p className="like-info">
                <span
                  className={like === 1 ? `like active` : `like`}
                  onClick={handleLikePost}
                  data-like={like === 0 ? 0 : like}
                >
                  <BsHeartFill />
                </span>
                <span> v?? nh???ng ng?????i kh??c</span>
              </p>
            </div>
          </div>
        </article>
        <RelatedBlog />
        <div id="commentAreaId" className="comments-area">
          <h4>
            {showCommentsCount === null ? "" : showCommentsCount} b??nh lu???n
          </h4>
          <div className="comments-list">
            {comments.map((comment) => (
              <Comment
                content={comment.content}
                createdDate={comment.created_date}
                user={comment.user}
              />
            ))}
          </div>
        </div>
        {commentBox}
      </div>
    );
  }

  return (
    <div id="main">
      <Bradcam
        title="Tin t???c"
        heading="Cu???c ?????i l?? nh???ng chuy???n ??i Tr???i nghi???m Kh??m Ph?? ch??nh b???n th??n m??nh"
      />

      <section className="travel-main blog">
        <div className="container">
          <div className="row">
            <div className="col col-lg-8">{contentLeft}</div>
            <div className="col col-lg-4">
              <div className="blog__right-sidebar">
                <SearchWidget />
                <CategoryWidget />
                <BlogWidget />
                <TagWidget />
                <InstagramWidget />
                <NewLetterWidget />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogDetail;
