import { useState } from "react"
import { useHistory, useLocation } from "react-router"

function SearchTour() {

    const [q, setQ] = useState("")

    const history = useHistory()
    const location = useLocation()
    
    const search = (event) => {
        event.preventDefault()

        let query = location.pathname

        if (query === "/tours") {
            history.push(`/tours/?q=${q}#popular-tour-area`)
        } else {
            history.push(`/?q=${q}#popular-tour-area`)
        }
    }

    return (
        <div class="search-area">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-3">
                        <div class="form-ask">
                            <h3>Bạn muốn đi đâu?</h3>
                        </div>
                    </div>
                    <div class="col col-lg-9">
                        <div class="search-wrap">
                            <form action="" class="search-form" onSubmit={search}>
                                <div class="form-item">
                                    <input value={q} onChange={(event) => setQ(event.target.value)} type="text" name="" id="" placeholder="Bạn muốn đi đâu?" />
                                </div>
                                <div class="form-item">
                                    <input type="date" name="" id="" />
                                </div>
                                <div class="form-item">
                                    <select name="" id="">
                                        <option value="null">Loại du lịch</option>
                                        <option value="trong-nuoc">Du lịch trong nước</option>
                                        <option value="ngoai-nuoc">Du lịch ngoài nước</option>
                                    </select>
                                </div>
                                <div class="form-item">
                                    <button type="submit" class="btn">Tìm kiếm</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchTour