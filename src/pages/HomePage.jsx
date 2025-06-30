import { Layout } from '../layouts/Layout';
import Section from '../components/Section'
import '../styles/Colecoes.css'
import '../styles/ColecoesIcone.css'
import { SpecialOffer } from '../components/SpecialOffer'
import { ProductListing } from '../components/ProductListing'
import { Gallery } from '../components/Gallery';
import { getXProducts } from '../data/db';

export const HomePage = () => {

  // objetos da propriedade link
  const linkobj = {
    "text": "Ver todos →",
    "href": "/produtos"
  }

  // array para preencher as colecoes que não estão componentizadas, conforme edital.
  const preenchercolecoes = [
    { discount: '30', text: `Novo drop Supreme`, img: `${import.meta.env.BASE_URL}/imagens/camisa-fundo.png`, alt: 'Camisa com desconto' },
    { discount: '30', text: 'Coleção Adidas', img: `${import.meta.env.BASE_URL}/imagens/tenis-fundo.png`, alt: 'Tenis com desconto' },
    { discount: '30', text: 'Novo Beats Bass', img: `${import.meta.env.BASE_URL}/imagens/fone-fundo.png`, alt: 'Fone com desconto' },
  ]

  const preenchericones = [
    { text: 'Camisetas', img: `${import.meta.env.BASE_URL}/imagens/icone-camisetas.png`, alt: 'Icone de camiseta' },
    { text: 'Calças', img: `${import.meta.env.BASE_URL}/imagens/icone-calcas.png`, alt: 'Icone de calça' },
    { text: 'Bonés', img: `${import.meta.env.BASE_URL}/imagens/icone-bones.png`, alt: 'Icone de Boné' },
    { text: 'Headphones', img: `${import.meta.env.BASE_URL}/imagens/icone-headphones.png`, alt: 'Icone de Headphones' },
    { text: 'Tênis', img: `${import.meta.env.BASE_URL}/imagens/icone-tenis.png`, alt: 'Icone de Tênis' },
  ]

  const arraygaleria = [
    { imagem: `${import.meta.env.BASE_URL}/imagens/tenis-galeria.png` },
    { imagem: `${import.meta.env.BASE_URL}/imagens/tenis-galeria.png` },
    { imagem: `${import.meta.env.BASE_URL}/imagens/tenis-galeria.png` },
    { imagem: `${import.meta.env.BASE_URL}/imagens/tenis-galeria.png` },
    { imagem: `${import.meta.env.BASE_URL}/imagens/tenis-galeria.png` }
  ]


  return (
    <Layout>
      <Gallery
        images={arraygaleria}
        radius='4px'
        width='100%'
        height='681px'
      />
      <Section title='Coleções em destaque' titleAlign='left'>
        <div className='container-grupo-colecoes'>
          {
            preenchercolecoes.map((preencher) => {
              return (
                <div key={preencher.text} className='container-colecao'>
                  <span className='desconto'>{preencher.discount}% OFF</span>
                  <h3 className='nome-colecao'>{preencher.text}</h3>
                  <button>Comprar</button>
                  <img src={preencher.img} alt={preencher.alt} />
                </div>
              );
            })
          }
        </div>
      </Section>

      <Section title='Selecione o produto' titleAlign='center' className='secao'>
        <div key={preenchericones.text} className='container-grupo-icones'>
          {preenchericones.map((preenchericon) => {
            return (
              <div key={preenchericon.text} className='card-icone'>
                <div className='fundo-icone'>
                  <img className='icone' src={preenchericon.img} alt={preenchericon.alt} />
                </div>
                <p className='nome-icone'>{preenchericon.text}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section title='Produtos em Alta' titleAlign='left' link={linkobj}>
        <ProductListing produtos={() => getXProducts(8)} />
      </Section>

      <SpecialOffer />
    </Layout>
  );
}