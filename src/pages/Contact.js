import Bradcam from "../components/Bradcam"
import PulseLoader from 'react-spinners/PulseLoader'
import Map from "../components/Map"
import { AiTwotoneHome } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdAttachEmail } from 'react-icons/md'

function Contact() {
    const key = 'AIzaSyAjCwFvVD_a2cmMG5orpYS4LlOaqxNkfJc'
    
    return (
        <div id="main">
            <Bradcam title="Kết Nối" heading="Chúng tôi luôn luôn chờ bạn." />

            <div class="travel-main contact-section">
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-12">
                        <Map 
                            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-lg-12">
                            <div class="contact-heading">
                                <h3>Liên hệ với chúng tôi</h3>
                            </div>
                        </div>
                        <div class="col col-lg-8">
                            <form action="" method="post">
                                <div class="row">
                                    <div class="col col-lg-12">
                                        <div class="form-group">
                                            <textarea name="" id="" cols="30" rows="10" class="form-control" placeholder="Nhập lời gửi..."></textarea>
                                        </div>
                                    </div>
                                    <div class="col col-lg-6">
                                        <div class="form-group">
                                            <input type="text" name="" id="" class="form-control" placeholder="Nhập tên của bạn..." />
                                        </div>
                                    </div>
                                    <div class="col col-lg-6">
                                        <div class="form-group">
                                            <input type="email" name="" id="" class="form-control" placeholder="Nhập email của bạn..." />
                                        </div>
                                    </div>
                                    <div class="col col-lg-12">
                                        <div class="form-group">
                                            <input type="text" name="" id="" class="form-control" placeholder="Nhập chủ đề..." />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col col-lg-12">
                                        <div class="form-btn">
                                            <button type="submit" class="btn">Gửi</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col col-lg-3 offset-lg-1">
                            <div class="media contact-info">
                                <span class="contact-info__icon"><AiTwotoneHome /></span>
                                <div class="media-body">
                                    <h3>191/12 Phạm Huy Thông</h3>
                                    <p>Phường 6, quận Gò Vấp</p>
                                </div>
                            </div>
                            <div class="media contact-info">
                                <span class="contact-info__icon"><BsFillTelephoneFill /></span>
                                <div class="media-body">
                                    <h3><a href="tel:0337152172">0337152172</a></h3>
                                    <p>Thứ 2 đến thứ 6, 8h - 16h</p>
                                </div>
                            </div>
                            <div class="media contact-info">
                                <span class="contact-info__icon"><MdAttachEmail /></span>
                                <div class="media-body">
                                    <h3>
                                        <a href="mailto:ngoccuong01032000@gmail.com">cuong.cn0103@gmail.com</a>
                                    </h3>
                                    <p>Gửi cho chúng tôi câu hỏi của bạn bất cứ lúc nào!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}

export default Contact