import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/Header.css'
import Logo from './Logo';
import { useState } from 'react';
import minicart from '../assets/mini-cart.svg'


const Header = () => {

  // recebe os valores do campo de pesquisa
  const [inputValue, setInputValue] = useState('');

  // useState para abrir e fechar o menu lateral
  const [abrir, setAbrir] = useState(false);

  // useState para abrir e fechar a barra de pesquisa mobile
  const [abrirSearch, setAbrirSearch] = useState(false);

  // função para levar à pagina de login ao clicar em entrar
  const navigate = useNavigate()
  const ClickLogin = () => {
    navigate('/login')
  }

  // função para levar à pagina de pedidos ao clicar em entrar no carrinho
  const ClickPedidos = () => {
    navigate('/pedidos')
  }


  // Abre o search ao clicar na lupa em resoluções menores
  const lupa = () => {
    if (window.innerWidth <= 900) {
      setAbrirSearch(!abrirSearch)
    }}

    // Mecanismo de busca com filtro para a página de listagem de produtos
    const pesquisar = (e) => {
      e.preventDefault();
      navigate(`/produtos/?filter=${encodeURIComponent(inputValue)}`);
    };

  return (
    <>
      <header>
        {/* elementos de cima */}

        <div className='header top'>
          <NavLink to="/">
            <Logo local="header" />
          </NavLink>

          <div className='div-input'>
            
            <input 
            className='busca' 
            type="search" 
            placeholder='Pesquisar produto...' 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />

            <button 
            type='submit' 
            onClick={window.innerWidth <= 900? () => 
            lupa() : pesquisar} 
            className={`icone-search ${abrirSearch ? ' active' : ''}`}>          
              <img src={`${import.meta.env.BASE_URL}/imagens/Search.png`} alt="" />
            </button>
          </div>

          <NavLink className='cadastre-se' to='/cadastre-se'>Cadastre-se</NavLink>
          <button className='botao-entrar' onClick={ClickLogin}>Entrar</button>
          <img className='mini-cart' onClick={ClickPedidos} src={minicart} alt="Imagem de carrinho de produto" />

        </div>

        {/* elementos da navegação */}

        <nav className='header nav'>
          {/* Ícone Hamburguer */}
          <button className="hamburguer" onClick={() => setAbrir(!abrir)}>
            ☰
          </button>
          <ul className={`header-nav-ul ${abrir ? 'open' : ''}`}>
            <p className="pagina-paragrafo" onClick={() => setAbrir(false)}>Páginas</p>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/produtos'>Produtos</NavLink>
            </li>
            <li>
              <NavLink to='/categorias'>Categorias</NavLink>
            </li>
            <li>
              <NavLink to='/pedidos'>Meus Pedidos</NavLink>
            </li>

            {/* botões na barra lateral */}

            <div className='div-botoes-laterais'>
              <hr className='hr-header' />
              <button className='botao-entrar lat' onClick={ClickLogin}>Entrar</button>
              <NavLink className='cadastre-se lat' to='/cadastre-se'>Cadastre-se</NavLink>
            </div>
          </ul>
        </nav>

        {/* Overlay */}
        {abrir && <div className="overlay" onClick={() => setAbrir(false)}></div>}


        {/* Barra de pesquisa mobile */}
        <div className={`div-mobile-input ${abrirSearch ? '' : 'hidden'}`}>

          <input
            className='busca-mobile'
            type="search"
            placeholder='Pesquisar produto...'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            type='submit'
            onClick={pesquisar}
            className='icone-search-mobile'>

            <img src={`${import.meta.env.BASE_URL}/imagens/Search.png`} alt="" />

          </button>
        </div>
      </header>
    </>
  )
}

export default Header;