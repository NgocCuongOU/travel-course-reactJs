import { useEffect } from 'react'
import { useState } from 'react'
import Apis, { endpoints } from '../configs/Apis'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'
import CardTour from './CardTour'
import { useLocation } from 'react-router'

function PopularDestinations() {

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

    const pagination = (num) => {
        setPage(page + num)
    }

    return (
        <section class="travel-main popular-place" id="popular-tour-area">
            <div class="container">
                <div class="row align-item">
                    <div class="col col-lg-6">
                        <div class="section-title">
                            <h3>Địa điểm phổ biến</h3>
                            <p>Suffered alteration in some form, by injected humour or good day randomised booth anim 8-bit hella wolf moon beard words.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    {tours.map((tour) => {
                        return (
                            <CardTour tour={tour} />
                        )
                    })}
                </div>
                <div class="row">
                    <div class="col col-lg-12">
                        <div class="popular-place-pagi">
                            <ul>
                                <li class="arrow" onClick={() => pagination(-1)} >
                                    <button disabled={!prev}><GrFormPrevious /></button>
                                </li>
                                <li class="arrow" onClick={() => pagination(1)}>
                                    <button disabled={!next}><GrFormNext /></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularDestinations