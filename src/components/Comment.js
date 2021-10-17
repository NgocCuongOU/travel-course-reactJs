import { Link } from 'react-router-dom'
import user1 from '../images/user/comment_1.png'

function Comment() {
    return (
        <div className="single-comment">
            <div className="single-comment__thumb">
                <img src={user1} alt="user-1" />
            </div>
            <div className="single-comment__des">
                <p className="single-comment__content">Cho em hỏi mấy anh chị đã ra trường ở OU hiện đã làm công việc gì vậy ạ. Anh chị có xin việc dễ dàng ko. Vì em thấy có nhìu doanh nghiệp ưu tiên bằng ĐH của những trường top.</p>
                <div className="comment-user">
                    <h5><Link>Cao Ngọc Cường</Link></h5>
                    <p className="date">01 Tháng 03 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Comment