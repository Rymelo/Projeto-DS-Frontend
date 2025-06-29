import { NavLink } from "react-router-dom";

const Informations = ({Title, Information}) => {
    const informacoes = Information
    const titulo = Title

    return (
      <>
        <div className='footer-info'>
          <p>{titulo}</p>
          <ul>
              {informacoes.map( (info) => {
                return(
                  <li key={info.link}>
                  <NavLink to={info.link}> {info.text} </NavLink>
                  </li>);
              })}
          </ul>
        </div>
      </>
    )
}
  
  export default Informations;