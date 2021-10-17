import { Link } from "react-router-dom"
import { FaUserCircle, FaComments, FaLongArrowAltRight } from 'react-icons/fa'

function CardBlog(props) {
    return (
        <article className="blog-item">
            <div className="blog-item__img">
                <Link to={`/blogs/${props.blog.id}`}>
                    <img src={props.blog.image} alt="blog 2" />
                </Link>
                <Link to={`/blogs/${props.blog.id}`} className="blog-item__date">
                    <h3>
                        {new Date(props.blog.created_date).getDate()}
                    </h3>
                    <p>Tháng { new Date(props.blog.created_date).getMonth()}</p>
                    <h3>{ new Date(props.blog.created_date).getFullYear()}</h3>
                </Link>
            </div>
            <div className="blog-item__content">
                <h3 className="blog-item__content-title">
                    <Link to={`/blogs/${props.blog.id}`}>{props.blog.title}</Link>
                </h3>
                <p>{props.blog.description}</p>
                <div className="blog-item__wrap">
                    <ul className="blog-item__info">
                        <li>
                            <Link to={`/blogs/${props.blog.id}`}><FaUserCircle /> Cao Ngọc Cường</Link>
                        </li>
                        <li>
                            <Link to={`/blogs/${props.blog.id}`}><FaComments /> 03 comments</Link>
                        </li>
                    </ul>
                    <div className="read-more">
                        <Link to={`/blogs/${props.blog.id}`} className="read-more-btn">Xem thêm <FaLongArrowAltRight /></Link>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default CardBlog