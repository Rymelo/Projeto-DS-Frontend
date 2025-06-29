import { useState } from 'react'
import '../styles/ProductOptions.css'

export const ProductOptions = ({shape, options, radius, title}) => {


    // ternário para controlar o clique do square
    const [ clicou , setClicou ] = useState(null)

    return(
        <div className='options-container'>
            <h3 className='options-title'>{title}</h3>
            <div className='options'>
                {options.map((opcoes, index) => {

                    return(
                        shape == 'square' ?
                        
                        (<button 
                        onClick={() => setClicou(index)} 
                        key={index} 
                        className={`option-button${clicou == index ? ' ' + 'active' : ''}`}
                        style={{borderRadius: radius}}
                        >
                            {opcoes}
                        </button>) 
                        :
                        (<input 
                        key={index} 
                        name='inputradio'
                        type='radio'
                        className='options-input'
                        style={{'--colorChange': `${options[index]}`}}
                        >
                        </input>)
                    );
                })}
            </div>
        </div>
    );
}