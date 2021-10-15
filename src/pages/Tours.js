import { useEffect, useState } from "react"
import CardTour from "../components/CardTour"
import SearchTour from "../components/SearchTour"
import Slider from "../components/Slider"
import Apis, { endpoints } from "../configs/Apis"
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import { BsArrowDown, BsArrowUp} from 'react-icons/bs'
import '../css/tour.css'
import { useLocation } from "react-router"
import News from "../components/News"
import Blogs from "../components/Blogs"


function Tours() {

    const [tours, setTours] = useState([])
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)
    const [page, setPage] = useState(1)
    const location = useLocation()


    useEffect(() => {
        const loadTours = async () => {
            let query = location.search
            
            if (query === "") {
                query = `?page=${page}`
            } else {
                query += `&page=${page}`
            }

            try {
                let res = await Apis.get(`${endpoints["tours"]}${query}`)

                setTours(res.data.results)
                setPrev(res.data.previous !== null)
                setNext(res.data.next !== null)
            } catch(error) {
                console.error(error)
            }
        }
        loadTours()
    }, [location.search, page])

    const handlePage = (num) => {
        setPage(page + num)
    }

    return (
        <>
            <Slider />
            <SearchTour />
            <section class="travel-main popular-place">
                <div class="container">
                    <div class="row align-item">
                        <div class="col col-lg-12">
                            <div class="popular-place__box-top">
                                <span>Sắp xếp:</span>
                                <ul class="popular-place__list">
                                    <li class="popular-place__item hide">Ngày khởi hành 
                                        <BsArrowUp />
                                        <BsArrowDown />
                                    </li>
                                    <li class="popular-place__item">Theo giá 
                                        <BsArrowUp />
                                        <BsArrowDown />
                                    </li>
                                    <li class="popular-place__item">Theo thời gian 
                                        <BsArrowUp />
                                        <BsArrowDown />
                                    </li>
                                    <li class="popular-place__item">Theo sao 
                                        <BsArrowUp />
                                        <BsArrowDown />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        {
                            tours.map((tour) => {
                                return (
                                    <CardTour tour={tour} />
                                )
                            })
                        }
                    </div>
                    <div class="row">
                        <div class="col col-lg-12">
                            <div class="popular-place-pagi">
                                <ul>
                                    <li class="arrow" onClick={() => handlePage(-1)}>
                                        <button disabled={!prev}><GrFormPrevious /></button>
                                    </li>
                                    <li class="num active">1</li>
                                    <li class="num">2</li>
                                    <li class="num">3</li>
                                    <li class="num">...</li>
                                    <li class="num">10</li>
                                    <li class="arrow" onClick={() => handlePage(1)}>
                                        <button disabled={!next}><GrFormNext /></button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <News />
            <Blogs />
        </>
    )
}

export default Tours