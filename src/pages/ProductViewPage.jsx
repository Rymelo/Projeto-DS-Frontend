import { BuyBox } from "../components/BuyBox";
import { Gallery } from "../components/Gallery";
import { ProductOptions } from "../components/ProductOptions";
import { Layout } from "../layouts/Layout";
import { ProductListing } from "../components/ProductListing";
import '../styles/ProductViewPage.css'
import Section from "../components/Section";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById, getXProducts } from "../data/db";

export const ProductViewPage = () => {
  // guarda o ID dos paramêtros da página
  const { id } = useParams();

  // setProdutos para guardar o produto encontrado, e o outro para aguardar o carregamento dos dados
  const [produtos, setProdutos] = useState(null);
  const [loading, setLoading] = useState(true);

  // aguarda o carregamento da página até as informações chegarem
  useEffect(() => {
    setLoading(true);

    const foundProduct = getProductById(id);
    setProdutos(foundProduct);

    setLoading(false);
  }, [id]);

  if (loading) {
    return 
  }

  const linkobj = {
    "text": "Ver todos →",
    "href": "/produtos"
  }

  return (
    <Layout>
      <nav className="product-navigation">
        <ul className="product-navlist">
          <li>Home</li>
          <li>/</li>
          <li>Produtos</li>
          <li>/</li>
          <li>{produtos.type}</li>
          <li>/</li>
          <li>{produtos.brand}</li>
          <li>/</li>
          <li>{produtos.name}</li>
        </ul>
      </nav>

      <div className="viewpage-container">

        <Gallery
          images={produtos.galleryimages}
          radius='8px'
          showthumbs
        />

        <BuyBox
          name={produtos.name}
          reference={produtos.reference}
          brand={produtos.brand}
          stars={produtos.stars}
          rating={produtos.rating}
          price={produtos.price}
          priceDiscount={produtos.priceDiscount}
          description={produtos.description}
        >

          <ProductOptions
            title='Tamanho'
            options={produtos.tamanho}
            shape='square'
            radius='4px'
          />

          <ProductOptions
            title='Cores'
            options={produtos.cores}
            shape='circle'
          />

        </BuyBox>
      </div>

      <Section title='Produtos Relacionados' titleAlign='left' link={linkobj} >
        <ProductListing produtos={() => getXProducts(4)} />
      </Section>
    </Layout>
  );
}