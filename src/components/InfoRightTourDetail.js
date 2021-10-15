function InfoRightTourDetail(props) {
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <span><strong>Hành trình:</strong></span>
                    </td>
                    <td>
                        <span>{props.tourDetail.name}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span><strong>Lịch trình:</strong></span>
                    </td>
                    <td>
                        <span>{`${props.tourDetail.tour_days} ngày ${props.tourDetail.tour_nights} đêm`}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span><strong>Ngày khởi hành:</strong></span>
                    </td>
                    <td>
                        <span>{props.tourDetail.start_date}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <span>
                            <strong>Ngày kết thúc:</strong>
                        </span>
                    </td>
                    <td>
                        <span>
                            {props.tourDetail.end_date}
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default InfoRightTourDetail