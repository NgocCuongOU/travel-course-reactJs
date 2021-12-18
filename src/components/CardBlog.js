import { Link } from "react-router-dom";
import { FaUserCircle, FaComments, FaLongArrowAltRight } from "react-icons/fa";

function CardBlog({blog}) {
  return (
    <article className="blog-item">
      <div className="blog-item__img">
        <Link to={`/blogs/${blog.id}`}>
          <img src={blog.image} alt="blog 2" />
        </Link>
        <Link to={`/blogs/${blog.id}`} className="blog-item__date">
          <h3>{new Date(blog.created_date).getDate()}</h3>
          <p>Tháng {new Date(blog.created_date).getMonth()}</p>
          <h3>{new Date(blog.created_date).getFullYear()}</h3>
        </Link>
      </div>
      <div className="blog-item__content">
        <h3 className="blog-item__content-title">
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </h3>
        <p>{blog.description}</p>
        <div className="blog-item__wrap">
          <ul className="blog-item__info">
            <li>
              <Link to={`/blogs/${blog.id}`}>
                <FaUserCircle /> {`${blog.user.last_name} ${blog.user.first_name}`}
              </Link>
            </li>
            <li>
              <Link to={`/blogs/${blog.id}`}>
                <FaComments /> {blog.comment_count} bình luận
              </Link>
            </li>
          </ul>
          <div className="read-more">
            <Link to={`/blogs/${blog.id}`} className="read-more-btn">
              Xem thêm <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CardBlog;
