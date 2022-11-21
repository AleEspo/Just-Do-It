// https://github.com/alexandreatlima/MONGO_REST

import {Routes, Route} from "react-router-dom"
import {Home} from "./Pages/Home"
import { MyActivities } from "./Pages/MyActivities";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-activities" element={<MyActivities />} />
      </Routes>
    </div>
  );
}

export default App;
