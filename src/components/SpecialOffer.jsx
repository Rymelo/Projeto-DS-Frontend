import '../styles/SpecialOffer.css'

export const SpecialOffer = () => {


    return(
        <section className="section-specialoffer">
            <div className="container-specialoffer">
                <div className="container-img-offer">
                    <img className="img-offer" src="\imagens\oferta-especial.png" alt="Oferta Especial" />
                </div>
                <div className="container-text-offer">
                    <span>Oferta Especial</span>
                    <h2>Air Jordans edição de Colecionador</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, reiciendis ad exercitationem incidunt dignissimos, eligendi amet veniam et distinctio consequuntur maiores impedit suscipit corrupti laborum. Doloremque quas maiores ipsa beatae!</p>
                    <button>Ver Oferta</button>
                </div>
            </div>
        </section>
    );
}