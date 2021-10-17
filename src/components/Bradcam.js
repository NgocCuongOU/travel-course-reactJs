function Bradcam(props) {
    return (
        <div className="bradcam bradcam-img">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="bradcam-text">
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