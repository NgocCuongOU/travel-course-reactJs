import { Link } from "react-router-dom"
import { FaUserCircle, FaComments, FaLongArrowAltRight } from 'react-icons/fa'

function CardBlog(props) {
    return (
        <article class="blog-item">
            <div class="blog-item__img">
                <img src={props.blog.image} alt="blog 2" />
                <a href="#" class="blog-item__date">
                    <h3>
                        {new Date(props.blog.created_date).getDate()}
                    </h3>
                    <p>Tháng { new Date(props.blog.created_date).getMonth()}</p>
                    <h3>{ new Date(props.blog.created_date).getFullYear()}</h3>
                </a>
            </div>
            <div class="blog-item__content">
                <h3 class="blog-item__content-title">
                    <Link to="">{props.blog.title}</Link>
                </h3>
                <p>{props.blog.description}</p>
                <div class="blog-item__wrap">
                    <ul class="blog-item__info">
                        <li>
                            <a href="#"><FaUserCircle /> Cao Ngọc Cường</a>
                        </li>
                        <li>
                            <a href="#"><FaComments /> 03 comments</a>
                        </li>
                    </ul>
                    <div class="read-more">
                        <a href="./blog-detail.html" class="read-more-btn">Xem thêm <FaLongArrowAltRight /></a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardBlog