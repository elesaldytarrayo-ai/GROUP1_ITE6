import { BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Mco1/>}/>
                <Route path = "/activity1" element = {<Activity1/>}/>
            </Routes>
                
        </BrowserRouter>
    )
}
export default App;