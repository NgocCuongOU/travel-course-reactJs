function Bradcam(props) {
    return (
        <div class="bradcam bradcam-img">
            <div class="container">
                <div class="row">
                    <div class="col col-lg-12">
                        <div class="bradcam-text">
                            <h3>{props.title}</h3>
                            <p>{props.heading}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bradcam