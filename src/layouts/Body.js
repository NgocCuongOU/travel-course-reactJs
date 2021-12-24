import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../pages/About";
import BlogDetail from "../pages/BlogDetail";
import Blogspage from "../pages/BlogsPage";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TourDetail from "../pages/TourDetail";
import Tours from "../pages/Tours";

import Footer from "./Footer";
import Header from "./Header";

function Body() {
  return (
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tours" component={Tours} />
        <Route exact path="/tours/:tourId" component={TourDetail} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blogs" component={Blogspage} />
        <Route exact path="/blogs/:blogId" component={BlogDetail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/tours/:tourId/booking" component={Booking} />
      </Switch>

      <Footer />
    </BrowserRouter>
  );
}

export default Body;
