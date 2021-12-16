import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import Apis, { endpoints } from "../configs/Apis";

function BlogWidget() {
  const [blogsWidget, setBlogsWidget] = useState(null);

  useEffect(() => {
    handleLoadBlogsWidget();
  }, []);

  const handleLoadBlogsWidget = async () => {
    try {
      const res = await Apis.get(endpoints["recently-post"]);
      console.log(res.data)
      setBlogsWidget(res.data)
    } catch (error) {
      console.error(error);
    }
  };

  let blogWidget = (
    <>
      <div className="media post-item">
        <BeatLoader loading={true} size={15} color="#1ec6b6" />
      </div>
      <div className="media post-item">
        <BeatLoader loading={true} size={15} color="#1ec6b6" />
      </div>
      <div className="media post-item">
        <BeatLoader loading={true} size={15} color="#1ec6b6" />
      </div>
    </>
  );

  return (
    <aside className="single-sidebar-widget recent-post">
      <h4 className="widget-title">Bài viết gần đây</h4>
      {blogsWidget === null
        ? blogWidget
        : blogsWidget.map((blog) => (
            <div className="media post-item">
              <div className="post-item__img">
                <Link to={`/blogs/${blog.id}`}>
                  <img
                    src={blog.image}
                    alt={`${blog.user.last_name} ${blog.user.first_name}`}
                  />
                </Link>
              </div>
              <div className="post-item__body">
                <h4>
                  <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
                </h4>
                <p>
                  Ngày {new Date(blog.created_date).getDate()} tháng{" "}
                  {new Date(blog.created_date).getMonth()} năm{" "}
                  {new Date(blog.created_date).getFullYear()}
                </p>
              </div>
            </div>
          ))}
    </aside>
  );
}

export default BlogWidget;
