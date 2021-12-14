import { Link } from "react-router-dom";
import Moment from "react-moment"
import 'moment/locale/vi'

function Comment({content, createdDate, user}) {
  return (
    <div className="single-comment">
      <div className="single-comment__thumb">
        <img src={user.avatar} alt={user.first_name} />
      </div>
      <div className="single-comment__des">
        <p className="single-comment__content">
          {content}
        </p>
        <div className="comment-user">
          <h5>
            <Link>{`${user.last_name} ${user.first_name}`}</Link>
          </h5>
          <p className="date"><Moment fromNow locale="vi">{createdDate}</Moment></p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
