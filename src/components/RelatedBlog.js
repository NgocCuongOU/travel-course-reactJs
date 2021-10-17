
import { Link } from 'react-router-dom'
import singleBlogImg2 from '../images/blog/single_blog_2.png'
import singleBlogImg3 from '../images/blog/single_blog_3.png'
import singleBlogImg4 from '../images/blog/single_blog_4.png'

function RelatedBlog() {
    return (
        <ul className="related-blog">
            <li className="related-blog__item">
                <Link>
                    <img src={singleBlogImg3} alt="blog" />
                </Link>
                <h3>
                    <a href="#">Thay vì học và code hãy đi chơi game đi các bạn</a>
                </h3>
            </li>
            <li className="related-blog__item">
                <Link>
                    <img src={singleBlogImg2} alt="blog" />
                </Link>
                <h3>
                    <a href="#">Thay vì học và code hãy đi chơi game đi các bạn</a>
                </h3>
            </li>
            <li className="related-blog__item">
                <Link>
                    <img src={singleBlogImg4} alt="blog" />
                </Link>
                <h3>
                    <a href="#">Thay vì học và code hãy đi chơi game đi các bạn</a>
                </h3>
            </li>
        </ul>
    )
}

export default RelatedBlog