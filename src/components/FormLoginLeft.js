import bookTourImg from '../images/booktour-bg.jpg'
import { AiTwotoneHome } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'

function FormLoginLeft() {
    return (
        <div className="book-tour__contact">
            <div className="book-tour__title">
                <h3>Cùng trải nghiệm với chúng tôi trong những hành trình tuyệt vời nhất ❤️</h3>
            </div>
            <div className="book-tour__type">
                <h2>Đăng nhập</h2>
            </div>
            <ul className="book-tour__list">
                <li>
                    <a href="mailto:ngoccuong01032000@gmail.com"><AiTwotoneHome />ngoccuong01032000@gmail.com</a>
                </li>
                <li>
                    <a href="tel:+84337152172"><BsFillTelephoneFill />0337152172</a>
                </li>
            </ul>
            <div className="book-tour__img">
                <img src={bookTourImg} alt="book-tour" />
            </div>
        </div>
    )
}

export default FormLoginLeft