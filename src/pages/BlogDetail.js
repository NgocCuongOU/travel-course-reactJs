import Bradcam from "../components/Bradcam"
import CategoryWidget from "../components/CategoryWidget"
import SearchWidget from "../components/SearchWidget"
import BlogWidget from '../components/BlogWidget'
import TagWidget from "../components/TagWidget"
import InstagramWidget from '../components/InstagramWidget'
import NewLetterWidget from '../components/NewLetterWidget'
import RelatedBlog from "../components/RelatedBlog"
import { useEffect, useState } from "react"
import Apis, { endpoints } from "../configs/Apis"
import { useParams } from "react-router"
import { css } from "@emotion/react";
import { PulseLoader } from 'react-spinners/PulseLoader'
import { Link } from "react-router-dom"
import { Markup } from "interweave"
import { FaUserCircle, FaComments, FaLongArrowAltRight } from 'react-icons/fa'

import '../css/main.css'
import '../css/about.css'
import '../css/contact.css'
import '../css/blog.css'
import '../css/blog-details.css'
import { BsHeart, BsHeartFill } from "react-icons/bs"
import Comment from "../components/Comment"
import CommentBox from "../components/CommentBox"

function BlogDetail() {

    const [blogDetail, setBlogDetail] = useState([])

    const { blogId } = useParams()

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;

    useEffect(() => {
        loadBlog()
    }, [])

    const loadBlog = async () => {
        try {
            const res = await Apis.get(endpoints['blog-detail'](blogId))
            setBlogDetail(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div id="main">
            <Bradcam title="Tin tức" heading="Cuộc đời là những chuyến đi Trải nghiệm Khám Phá chính bản thân mình" />
            
            <section className="travel-main blog">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8">
                            <div className="blog__left-sidebar">
                                <article className="blog-item">
                                    <div className="blog-item__img">
                                        <img src={blogDetail.image} alt={blogDetail.title} />
                                        <Link to={`/blogs/${blogDetail.id}`} className="blog-item__date">
                                            <h3>{new Date(blogDetail.created_date).getDay()}</h3>
                                            <p>Tháng {new Date(blogDetail.created_date).getMonth()}</p>
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
                                                    <a href="#"><FaUserCircle />Bùi Văn Nguyện</a>
                                                </li>
                                                <li>
                                                    <a href="#"><FaComments />03 comments</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="blog-item__content-detail">
                                            <Markup content={blogDetail.content} />
                                        </div>
                                        <div className="blog-tag">
                                            Tag: 
                                        </div>
                                        <div className="blog-cate">
                                            Danh mục:
                                            <a href="#">Sản phẩm công nghệ</a>,
                                            <a href="#">Đời sống trải nghiệm</a>
                                        </div>
                                        <div className="blog-item__reaction">
                                            <p className="like-info">
                                                <span className="like">
                                                    <BsHeart />
                                                    <BsHeartFill />
                                                </span>
                                                <span>Bạn, và 4 người khác</span>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                                <RelatedBlog />
                                <div className="comments-area">
                                    <h4>05 bình luận</h4>
                                    <div className="comments-list">
                                        <Comment />
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
    )
}

export default BlogDetail