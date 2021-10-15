import Blogs from "../components/Blogs"
import FamousDestinations from "../components/FamousDestinations"
import News from "../components/News"
import PopularDestinations from "../components/PopularDestinations"
import SearchTour from "../components/SearchTour"
import Services from "../components/Services"
import Slider from "../components/Slider"
import Testimonials from "../components/Testimonials"

function Home() {
    return (
        <div id="main">
            <Slider />
            <SearchTour />
            <FamousDestinations />
            <News />
            <PopularDestinations />
            <Services />
            <Testimonials />
            <Blogs />
        </div>
    )
}

export default Home