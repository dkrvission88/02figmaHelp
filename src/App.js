import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Raise from "./Components/Raise";
import Submit from "./Components/Submit";
import RisedT from "./Components/RisedT";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={< Raise/>}>
            <Route path="/Submit" element={< Submit/>}></Route>
            <Route path="RisedT" element={<RisedT/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
