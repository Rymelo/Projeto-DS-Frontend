import '../styles/Logo.css'
import logoheader from '../assets/logo-header.svg'
import logofooter from '../assets/logo-footer.svg'



const Logo = ({ local }) => {
    const trocarlogo = local == "footer" ? logofooter : logoheader

    const trocarestilo = local == "footer" ? "logo footer" : "logo header"

    return (
        <img className={trocarestilo} src={trocarlogo} alt="Logo digital store" />
    )
}
  
export default Logo;