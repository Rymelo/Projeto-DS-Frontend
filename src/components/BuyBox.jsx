import starfull from '../assets/star-full.svg'
import starblank from '../assets/star-blank.svg'
import '../styles/BuyBox.css'

export const BuyBox = ({name, reference, brand, stars, rating, price, priceDiscount, description, children}) => {

    const discountStyle = priceDiscount != null ? {'--priceDiscount': `"$${priceDiscount}"`} : null
    const changeprice = priceDiscount != null ? 'buybox-discount active' : 'buybox-price'

    return(
        <div className="buybox-container">
            <div className="buybox-content">
                <h1 className='buybox-title'>{name}</h1>
                <p className='buybox-ref'>Casual | {brand} | REF:{reference}</p>
                <div className="avaliation-container">
                    <img src={starfull} alt="estrela de avaliação" />
                    <img src={starfull} alt="estrela de avaliação" />
                    <img src={starfull} alt="estrela de avaliação" />
                    <img src={starfull} alt="estrela de avaliação" />
                    <img src={starblank} alt="estrela de avaliação" />
                    
                    <div className='star-box'>
                        <p>{stars}</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.15102 1.2306L10.0003 5.65038L14.7346 6.06108C15.063 6.08972 15.1966 6.50343 14.9473 6.72122L11.3563 9.86292L12.4324 14.5367C12.507 14.8614 12.1585 15.1169 11.8764 14.9443L7.80774 12.4666L3.73906 14.9443C3.45622 15.1162 3.10846 14.8607 3.18309 14.5367L4.25921 9.86292L0.667401 6.72047C0.418146 6.50268 0.550983 6.08896 0.880089 6.06033L5.61444 5.64962L7.46371 1.2306C7.59206 0.923134 8.02266 0.923134 8.15102 1.2306Z" />
                        </svg>
                    </div>
                    <p className='buybox-avaliation'>({rating} avaliações)</p>
                </div>
                <div className='price-container'>
                    <p style={discountStyle} className={changeprice}>${price}</p>
                </div>
                <div className='description-container'>
                    <p className='description-title'>Descrição do produto</p>
                    
                    <p className='description'>{description}</p>
                </div>
                {children}
                <button className='action-button'>comprar</button>
            </div>
        </div>        
    );
}