import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import '../styles/ProductListing.css'
import { useLocation } from "react-router-dom";

export const ProductListing = ({ produtos }) => {

    
    // Atualiza os produtos
    const [arrayprod, setArrayprod] = useState(produtos)

    useEffect(() => {
        setArrayprod(produtos);
    }, [produtos]);

    // Muda o estilo de disposição dos produtos acordo com a página e garante a aplicação do classname
    const location = useLocation()
    const paginaprodutos = location.pathname === '/produtos' || location.pathname.startsWith('/produtos/');

    return(
        <>
        <div className={ paginaprodutos ? "productlist-container-listingpage" : "productlist-container" }>
        
        {arrayprod.map((produtos, index) => (
            <ProductCard
                key={index}
                id={produtos.id}
                name={produtos.name}
                imagem={produtos.imagem}
                price={produtos.price}
                priceDiscount={produtos.priceDiscount}
                percentage={produtos.percentage} 
            />
            ))}

        </div>  
        </>
    );
}