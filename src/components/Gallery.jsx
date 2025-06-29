import { useState } from 'react';
import '../styles/Gallery.css'
import setaesq from '../assets/arrow-left.svg'
import setadir from '../assets/arrow-right.svg'
import { useLocation } from 'react-router-dom';

export const Gallery = ({ showthumbs, images, width, height, radius }) => {
    
    /*          inicio das configurações da galeria             */


    // array de imagens para alimentar a galeria
    const arraygaleria = images

    // usestate para detectar qual índice está selecionado
    const [indiceatual, setIndiceAtual] = useState(0)

    // usa um ternário simples para mudar o indice da imagem
    const irEsquerda = () => {
        const PrimeiraIMG = indiceatual === 0;
        const trocaIMG = PrimeiraIMG ? arraygaleria.length - 1 : indiceatual - 1
        setIndiceAtual(trocaIMG);
    }

    // usa um ternário simples para mudar o indice da imagem
    const irDireita = () => {
        const PrimeiraIMG = indiceatual === arraygaleria.length - 1;
        const trocaIMG = PrimeiraIMG ? 0 : indiceatual + 1;
        setIndiceAtual(trocaIMG);
    }

    // aplica estilos para que a imagem mude de posição de acordo com o índice
    const estilosgaleria = { transform: `translateX(-${indiceatual * 100}%)`, width: width, height: height, borderRadius: radius }

    // permite selecionar os slides de acordo com os dots
    const selectSlide = (indice) => {
        setIndiceAtual(indice);
    };

    // desabilita a seta esquerda na primeira imagem
    const dsetaesq = indiceatual == 0 ? 'button left disable' : 'button left'
    // desabilita a seta direita na ultima imagem
    const dsetadir = indiceatual == arraygaleria.length - 1 ? 'button right disable' : 'button right'

    /*          fim das configurações da galeria             */

    
    
    /*         inicio das configurações das propriedades           */

    // habilita showthumbs
    const showthumb = showthumbs ? 'thumb-container' : 'thumb-container disable'

    //configura as propriedades
    const propriedades = { width: width, height: height, borderRadius: radius }

    /*         fim das configurações das propriedades           */





    /*         inicio das configurações de acordo com a página           */

    // Usando useLocation para estilizar a galeria na página de product view
    const location = useLocation()
    const productviewpage = location.pathname.startsWith('/produto/');

    // Desativa tudo que for necessário para adaptar a viewpage
    const change = productviewpage ? ' change' : ''

    /*         fim das configurações de acordo com a página           */

    return (
        <>
            <div className={`all-container${change}`}>
                <div className='gallery-container' style={propriedades}>
                    <div className='slides-container' style={estilosgaleria}>
                        {arraygaleria.map((array, index) => {
                            return (
                                <>
                                    <div className={`slide${change}`} key={index}>
                                        <div className={`conteudo${change}`}>
                                            <p className='melhor-oferta'>Melhores ofertas personalizadas</p>
                                            <h2 className='queima-estoque'>Queima de estoque Nike 🔥</h2>
                                            <p className='lorem'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus neque magnam vel.</p>
                                            <button className='botao-ofertas'>Ver ofertas</button>
                                        </div>
                                        <div className={`background${change}`}>
                                            <img className={`produtoimagem${change}`} src={array.imagem} alt="" />
                                            <img className={`efeito-fundo${change}`} src="/imagens/ornament.png" alt="" />
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                    <div>
                        <button onClick={irEsquerda} className={dsetaesq}><img src={setaesq} alt="" /></button>
                        <button onClick={irDireita} className={dsetadir}><img src={setadir} alt="" /></button>
                    </div>
                </div>
                {/* pontos de navegação */}
                <div className={`dots${change}`}>
                    {arraygaleria.map((array, index) => {
                        return (
                            <>
                                <button onClick={() => selectSlide(index)} key={index} className={`dot ${indiceatual == index ? ' ' + 'active' : ''}`}></button>
                            </>
                        );
                    })}
                </div>
                
                {/* showthumbs */}
                <div className={showthumb}>
                    {arraygaleria.map((array, index) => {
                        return (
                            <>
                                <div style={{borderRadius: radius}} onClick={() => selectSlide(index)} className={`thumb i${index}${indiceatual == index ? ' ' + 'active' : ''}`}>
                                    <img key={index} src={array.imagem} className='thumb-img' alt="miniatura" />
                                </div>
                            </>
                        );
                    })}
                </div>

            </div>
        </>
    );
}