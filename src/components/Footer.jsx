import { NavLink } from 'react-router-dom';
import '../styles/Footer.css'
import Informations from './Informations';
import Logo from './Logo';
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import instagram from '../assets/instagram.svg'

const Footer = () => {
    

    // arrays de objetos que preenchem as colunas no componente Informations
    const info = [
        {text: "Sobre Drip Store", link: "/about"},
        {text: "Segurança",        link: "/seguranca"},
        {text: "Wishlist",         link: "/wishlist"},
        {text: "Blog",             link: "/blog"},
        {text: "Trabalhe Conosco", link: "/trabalheconosco"},
        {text: "Meus Pedidos",     link: "/pedidos"}
    ]

    const categorias = [
        {text: "Camisetas",  link: "/camisetas"},
        {text: "Calças",     link: "/calcas"},
        {text: "Bonés",      link: "/bones"},
        {text: "Headphones", link: "/headphones"},
        {text: "Tênis",      link: "/tenis"}
    ]

    const contato = [
        {text: "Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161", link: "/endereco"},
        {text: "(85) 3051-3411", link: "/telefone"}
    ]

    return (
      <>
        <footer>
            <div className='footer-colunas'>
                <div className='footer-descricao'>
                    <NavLink to="/">
                        <Logo local="footer" />
                    </NavLink>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id dolorum, a fugiat doloremque voluptates ratione.</p>
                    <div className='footer-icones'>
                    <a href="https://www.facebook.com/digitalcollegebr"><img src={facebook} alt="Facebook da Digital College" /></a>
                    <a href="https://www.instagram.com/digitalcollegebr/"><img src={twitter} alt="Instagram da Digital College" /></a>
                    <a href="https://x.com/eaicollegers"><img src={instagram} alt="Twitter da Digital College" /></a>
                </div>

                </div>
                <div className='footer-info'>
                    <Informations Title="Informação" Information={info} />
                </div>
                <div className='footer-categorias'>
                    <Informations Title="Categorias" Information={categorias} />
                </div>
                <div className='footer-contato'>
                    <Informations Title="Contato" Information={contato} />
                </div>
            </div>

            <div className='footer-direitos'>
                <hr />
                <p>© 2025 Digital Store</p>
            </div>

        </footer>       
      </>
    )
  }
  
  export default Footer;