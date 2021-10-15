import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from "../pages/Home"
import TourDetail from "../pages/TourDetail"
import Tours from "../pages/Tours"

import Footer from "./Footer"
import Header from "./Header"


function Body() {
    return (
        <BrowserRouter>
            <Header />
            
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/tours" component={Tours} />
                <Route exact path="/tours/:tourId" component={TourDetail} />
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Body