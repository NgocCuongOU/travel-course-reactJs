import "../css/about.css";
import "../css/contact.css";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from "react-google-maps";

function Map() {
  return (
    <div>
      <GoogleMap
        faultZoom={18}
        defaultCenter={{ lat: 10.833791, lng: 106.683372 }}
      >
        <Marker
          icon={{
            url: "https://insulationpads.co.uk/wp-content/uploads/2017/10/Home.png",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          position={{ lat: 10.833791, lng: 106.683372 }}
        />
      </GoogleMap>
    </div>
  );
}

export default withScriptjs(withGoogleMap(Map));
