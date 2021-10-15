import { AiFillStar, AiFillClockCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

function CardTour(props) {

    let path = `/tours/${props.tour.id}`

    return (
        <div class="col col-lg-4" key={props.tour.id}>
            <div class="single-place">
                <div class="thumb">
                    <Link to={path}>
                        <img src={props.tour.image} alt={props.tour.name} />
                    </Link>
                    <Link className="price" to={path}>{`${props.tour.children_price} - ${props.tour.adults_price}`}</Link>
                </div>
                <div class="place-info">
                    <Link to={path}><h3>{props.tour.name}</h3></Link>
                    <p>{props.tour.tour_type}</p>
                    <div class="rating-days">
                        <span>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <a href="">(20 bình luận)</a>
                        </span>
                        <div class="days">
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