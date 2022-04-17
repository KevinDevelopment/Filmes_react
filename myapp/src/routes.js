import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Header from "./Components/Header";
import Filme from "./Pages/Filmes";

const Router = () => {
    return (        
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/filme/:id" element={<Filme />} />
                </Routes>
            </BrowserRouter>        
    );
}
export default Router