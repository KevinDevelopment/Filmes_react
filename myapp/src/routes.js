import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Header from "./Components/Header";
import Filme from "./Pages/Filmes";
import Favoritos from "./Pages/Favoritos";
import NotFound from "./Pages/Notfound/notfound";

const Router = () => {
    return (        
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/filme/:id" element={<Filme />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>        
    );
}
export default Router