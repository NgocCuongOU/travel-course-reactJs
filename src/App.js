import Body from "./layouts/Body";
import script from './script'
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/base.css'
import './css/main.css'
import './css/bookTour.css'

function App() {
  return (
    <>
      <Body />
      <script src={script}></script>
    </>
  );
}

export default App;
