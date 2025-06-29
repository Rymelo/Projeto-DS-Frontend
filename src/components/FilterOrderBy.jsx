import '../styles/FilterOrderBy.css'

export const FilterOrderBy = ({abrir, setAbrir}) => {

    return (

        <div className="container-ordenar">
            <label className="label-ordenar" htmlFor="ordenar-por">Ordenar Por:
            <div style={{display: 'flex', gap:'10px'}}>
                <select className="ordenar-por">
                    <option value="maiorp">Preço: Maior Custo</option>
                    <option value="menorp">Preço: Menor Custo</option>
                    </select>
                    <button onClick={() => setAbrir(!abrir)} className="button-filter"><img src="/imagens/Filter-button.png" alt="botão de filtro" /></button>
            </div>
            </label>
        </div>
    );
}