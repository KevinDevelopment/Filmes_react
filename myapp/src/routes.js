import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Header from "./Components/Header";

const Router = () => {
    return (        
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>        
    );
}
export default Router