import { ProductListing } from "../components/ProductListing";
import { Layout } from "../layouts/Layout";
import Section from "../components/Section"
import '../styles/ListingPageFilters.css'
import { FilterGroup } from "../components/FilterGroup";
import { FilterOrderBy } from "../components/FilterOrderBy";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { getAllProducts } from "../data/db";

export const ProductListingPage = () => {

    // pega todos os produtos de data
    const produtos = getAllProducts()

    // mecanismo de pesquisa dos produtos
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const itemSearch = searchParams.get("filter")

    const produtosFiltrados = itemSearch ? produtos.filter((item) => item.name.toLowerCase().includes(itemSearch.toLowerCase())) : produtos
    
    
    // preencher filtros
    const preenchermarca = [
    {text: 'Adidas', value: 'Adidas'},
    {text: 'Nike', value: 'Nike'},
    {text: 'Puma', value: 'Puma'},
    {text: 'K-Swiss', value: 'K-Swiss'}
]

    const preenchercategoria = [
    {text: 'Esporte e lazer', value: 'Esporte e lazer'},
    {text: 'Casual', value: 'Casual'},
    {text: 'Utilitário', value: 'Utilitario'},
    {text: 'Corrida', value: 'Corrida'}
]

    const preenchergenero = [
    {text: 'Masculino', value: 'Masculino'},
    {text: 'Feminino', value: 'Feminino'},
    {text: 'Unissex', value: 'Unissex'}
]

    const preencherestado = [
    {text: 'Novo', value: 'Novo'},
    {text: 'Usado', value: 'Usado'}

]
    //abre a aba lateral filtro ao clicar no botão
    const [abrir, setAbrir] = useState(false);


    return(
        <>
            <Layout>
                <FilterOrderBy abrir={abrir} setAbrir={setAbrir}/>
                
                <div style={{display: "flex"}}>
                    <div className={abrir ? "container-filtrar-por active" : "container-filtrar-por"}>
                        <div className="filtros">
                            <h2>Filtrar por</h2>
                            <hr className="hr-filtros" />
                            <div className="input-container">
                                <FilterGroup title='Marca' inputType='checkbox' options={preenchermarca}/>
                                <FilterGroup title='Categoria' inputType='checkbox' options={preenchercategoria}/>
                                <FilterGroup title='Gênero' inputType='checkbox' options={preenchergenero}/>
                                <FilterGroup title='Estado' inputType='radio' options={preencherestado}/>   
                            </div>
                        </div>
                    </div>
                        
                    {/* Overlay para o botão filtro */}
                    {abrir && <div className="overlayf" onClick={() => setAbrir(false)}></div>}

                    <Section title={`Total de produtos: ${produtosFiltrados.length}`}>
                        <ProductListing produtos={produtosFiltrados} />
                    </Section>
                </div> 
            </Layout>          
        </>
    );
}