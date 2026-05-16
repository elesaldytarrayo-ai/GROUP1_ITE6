import { BrowserRouter, Routes, Route} from "react-router-dom";

import Activity1 from "./pages/activities/activity1/Activity1";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/activity1" element = {<Activity1/>}/>
            </Routes>
                
        </BrowserRouter>
    )
}
export default App;