import { Link } from "react-router-dom";

function BlogWidget() {
  return (
    <aside className="single-sidebar-widget recent-post">
      <h4 className="widget-title">Bài viết gần đây</h4>
      <div className="media post-item">
        <div className="post-item__img">
          <img src="./img/post-sidebar/post_2.png" alt="post-1" />
        </div>
        <div className="post-item__body">
          <h4>
            <Link to>Bí kíp tán gái thất truyền của nhà họ Cao</Link>
          </h4>
          <p>01 tháng 3 năm 2021</p>
        </div>
      </div>
      <div className="media post-item">
        <div className="post-item__img">
          <img src="./img/post-sidebar/post_3.png" alt="post-1" />
        </div>
        <div className="post-item__body">
          <h4>
            <Link>Bí kíp tán gái thất truyền của nhà họ Cao</Link>
          </h4>
          <p>01 tháng 3 năm 2021</p>
        </div>
      </div>
      <div className="media post-item">
        <div className="post-item__img">
          <img src="./img/post-sidebar/post_1.png" alt="post-1" />
        </div>
        <div className="post-item__body">
          <h4>
            <Link>Bí kíp tán gái thất truyền của nhà họ Cao</Link>
          </h4>
          <p>01 tháng 3 năm 2021</p>
        </div>
      </div>
      <div className="media post-item">
        <div className="post-item__img">
          <img src="./img/post-sidebar/post_4.png" alt="post-1" />
        </div>
        <div className="post-item__body">
          <h4>
            <Link>Bí kíp tán gái thất truyền của nhà họ Cao</Link>
          </h4>
          <p>01 tháng 3 năm 2021</p>
        </div>
      </div>
    </aside>
  );
}

export default BlogWidget;
