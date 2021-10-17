import useThumb from '../images/avtar/avtar.jpg'

function CommentBox() {
    return (
        <div className="comment-box">
            <div className="user-thumb">
                <img src={useThumb} alt="user" />
            </div>
            <div className="user-comment">
                <textarea name="" id="" cols="5" rows="2" placeholder="Viết bình luận của bạn..."></textarea>
                <div className="user-action">
                    <button className="user-btn back">Hủy</button>
                    <button className="user-btn submit">Bình luận</button>
                </div>
            </div>
        </div> 
    )
}

export default CommentBox