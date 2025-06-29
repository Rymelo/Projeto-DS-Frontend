import { Link } from 'react-router-dom'
import '../styles/ProductCard.css'

export const ProductCard = ({ id, imagem, name, price, priceDiscount, percentage }) => {

    // ternário simples para detectar se existe desconto, e aplicá-lo
    const discountStyle = priceDiscount != null ? { '--priceDiscount': `"$${priceDiscount}"` } : null
    const changeprice = priceDiscount != null ? 'discount active' : 'price'

    const discountPercentual = priceDiscount != null ? "card-image-discount-active" : "card-image-discount"

    return (
        <>
            <Link className='linka' to={`/produto/${id}`}>

            <div className='container'>
                <div className="container-card">
                    <div className="card-image-container">
                        <span className={discountPercentual}>{percentage}% OFF</span>
                        <img className='card-image' src={imagem} alt={name} />
                    </div>
                    <div className="card-text">
                        <p className="card-type">Tênis</p>
                        <h3 className="card-name">{name}</h3>
                        <div className='container-prices'>
                            <p style={discountStyle} className={changeprice}>${price}</p>
                        </div>
                    </div>
                </div>

            </div>

            </Link>
        </>
    );
}