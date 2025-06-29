import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Section.css'

const Section = ({title, children, titleAlign, link}) => {
    
    // ternário simples para alinhar o título
    const alinhatitulo = titleAlign == 'center' ? 'section-titulo center' : 'section-titulo left';

    // ternário simples caso o usuário precise utilizar a propriedade link
    const usalink = link == null ? 'section-link none' : 'section-link';

    // ternário simples para definir o texto da propriedade link
    const textolink = link == null ? '' : link.text;

    // Uso do prop link para levar à outra página.
    const navigate = useNavigate();
    const hreflink = () => {
        navigate(`${link.href}`)
    }

    // Usando useLocation para estilizar section na página inicial
    const location = useLocation()
    const paginahome = location.pathname === '/'

    return(
        <section className={paginahome ? 'section-homepage' : `section`}>
                <div className='container-titulos'>
                    <h2 className={alinhatitulo}>{title}</h2>
                    <h2 onClick={hreflink} className={usalink}>{textolink}</h2>
                </div>
            <div>{ children }</div>
        </section>
    );
}

export default Section;