import { NavLink } from 'react-router-dom';
import '../styles/NotFoundPage.css'

export const NotFoundPage = () => {


    return (
        <>
            <div className="nf-container">
                <div className='nf-elements'>
                    <h2>OPS!</h2>
                    <p className='error'>404 - Página não encontrada</p>
                    <p className='error-msg'>A página que você procura está em construção ou não existe.</p>
                    <NavLink to='/'>
                        <button className='voltar'>Voltar ao início</button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}