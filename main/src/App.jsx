import { BrowserRouter, Routes, Route} from "react-router-dom";

import Activity1 from "./pages/activities/activity1/Activity1";
import Activity2 from "./pages/activities/activity2/Activity2";
import Activity3 from "./pages/activities/activity3/Activity3";
import Activity4 from "./pages/activities/activity4/Activity4";
import Activity5 from "./pages/activities/activity5/Activity5";
import Mco2 from "./pages/mco/Mco2";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Mco2/>}/>
                <Route path = "/activity1" element = {<Activity1/>}/>
                <Route path = "/activity2" element = {<Activity2/>}/>
                <Route path = "/activity3" element = {<Activity3/>}/>
                <Route path = "/activity4" element = {<Activity4/>}/>
                <Route path = "/activity5" element = {<Activity5/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;