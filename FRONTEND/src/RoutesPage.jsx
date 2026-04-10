import {BrowserRouter,Routes, Route} from "react-router-dom"
import App from "./App.jsx"
import Bug from "./Bug.jsx"
import PP from "./PP.jsx"
import Sug from "./Sug.jsx"
function RoutesPage(){
  return(
    <BrowserRouter basename="/FRC-Programming-Practice">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/debug" element={<Bug />} />
        <Route path="/PP" element={<PP />}/>
        <Route path="/Sug" element={<Sug />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default RoutesPage