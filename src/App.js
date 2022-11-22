// https://github.com/alexandreatlima/MONGO_REST

import { Routes, Route } from "react-router-dom"
import { Home} from "./Pages/Home"
import { MyActivities } from "./Pages/MyActivities";
import { EditActivity } from "./Pages/EditActivity"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-activities" element={<MyActivities />} />
        <Route path="/my-activities/:id" element={<EditActivity />} />
      </Routes>
    </div>
  );
}

export default App;
