import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ProductListingPage } from "../pages/ProductListingPage";
import { ProductViewPage } from "../pages/ProductViewPage";
import { NotFoundPage } from "../pages/NotFoundPage";


export const Paths = () => {

    return(
        <BrowserRouter basename="/Projeto-DS-Frontend">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/produtos" element={<ProductListingPage />} />
                <Route path="/produto/:id" element={<ProductViewPage />}/>
                <Route path="*" element={<NotFoundPage />}/>
            </Routes>
        </BrowserRouter>
    );
}