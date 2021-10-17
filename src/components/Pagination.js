import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

function Pagination(props) {
    return (
        <ul>
            <li className="arrow" onClick={props.handlePagePrev}>
                <button disabled={props.prev}><GrFormPrevious /></button>
            </li>
            <li className="num active">1</li>
            <li className="num">2</li>
            <li className="num">3</li>
            <li className="num">...</li>
            <li className="num">10</li>
            <li className="arrow" onClick={props.handlePageNext}>
                <button disabled={props.next}><GrFormNext /></button>
            </li>
        </ul>
    )
}

export default Pagination