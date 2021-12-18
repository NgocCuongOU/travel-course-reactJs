import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

import Apis, { endpoints } from "../configs/Apis";
import { useParams } from "react-router"

function RelatedBlog() {
  const [blogsRelated, setBlogsRelated] = useState(null);
  const { blogId } = useParams()

  
  useEffect(() => {
    handleLoadBlogsRelated();
  }, []);

  const handleLoadBlogsRelated = async () => {
    try {
      const res = await Apis.get(endpoints["related-post"](blogId))
      console.log(res.data)
      setBlogsRelated(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  let contentBlogRelated = (
    <ul className="related-blog">
      <li className="related-blog__item">
        <BeatLoader loading={true} size={15} color="#1ec6b8" />
      </li>
      <li className="related-blog__item">
        <BeatLoader loading={true} size={15} color="#1ec6b8" />
      </li>
      <li className="related-blog__item">
        <BeatLoader loading={true} size={15} color="#1ec6b8" />
      </li>
    </ul>
  );

  return (
    <ul className="related-blog">
      {blogsRelated === null
        ? contentBlogRelated
        : blogsRelated.map((blog) => (
            <li className="related-blog__item">
              <Link to={`/blogs/${blog.id}`}>
                <img
                  src={blog.image}
                  alt={`${blog.user.last_name} ${blog.user.first_name}`}
                />
              </Link>
              <h3>
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </h3>
            </li>
          ))}
    </ul>
  );
}

export default RelatedBlog;
