import trainImg from '../images/train.svg'
import hotelImg from '../images/hotel.svg'
import worldImg from '../images/world.svg'


function Services() {
    return (
        <section class="travel-variation overlay">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-4">
                        <div class="single-travel">
                            <div class="icon">
                                <img src={trainImg} alt="train service" />
                            </div>
                            <h3>Thoải mái với mọi hành trình</h3>
                            <p>Một sự thanh thản tuyệt vời đã chiếm hữu toàn bộ tâm hồn tôi.</p>
                        </div>
                    </div>
                    <div class="col col-lg-4">
                        <div class="single-travel">
                            <div class="icon">
                                <img src={hotelImg} alt="train service" />
                            </div>
                            <h3>Khách sạn sang trọng</h3>
                            <p>Một sự thanh thản tuyệt vời đã chiếm hữu toàn bộ tâm hồn tôi.</p>
                        </div>
                    </div>
                    <div class="col col-lg-4">
                        <div class="single-travel">
                            <div class="icon">
                                <img src={worldImg} alt="train service" />
                            </div>
                            <h3>Những hướng dẫn viên tuyệt vời</h3>
                            <p>Một sự thanh thản tuyệt vời đã chiếm hữu toàn bộ tâm hồn tôi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services