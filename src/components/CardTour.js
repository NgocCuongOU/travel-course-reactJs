import { AiFillStar, AiFillClockCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function CardTour(props) {

    let path = `/tours/${props.tour.id}`

    return (
        <div className="col col-lg-4" key={props.tour.id}>
            <div className="single-place">
                <div className="thumb">
                    <Link to={path}>
                        <img src={props.tour.image} alt={props.tour.name} />
                    </Link>
                    <Link className="price" to={path}>{`${props.tour.children_price} - ${props.tour.adults_price}`}</Link>
                </div>
                <div className="place-info">
                    <Link to={path}><h3>{props.tour.name}</h3></Link>
                    <p>{props.tour.tour_type}</p>
                    <div className="rating-days">
                        <span>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <a href="">(20 bình luận)</a>
                        </span>
                        <div className="days">
                            <AiFillClockCircle />
                            <Link to={path}>{`${props.tour.tour_days} ngày ${props.tour.tour_nights} đêm`}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardTour