import '../styles/FilterGroup.css'

export const FilterGroup = ({title, inputType, options}) => {

    // permite que só um dos dois input radios seja selecionado
    const radio = inputType === 'radio' ? { name: 'radio' } : {};

    return (
        <div className="filter-group">
            <h3>{title}</h3>
            {options.map((preencher, index) => {
                return (
                    <div key={index} className="input-container">
                        <label className="label-check">
                            <input type={inputType} value={preencher.value} {...radio} />
                            {preencher.text}
                        </label>
                    </div>
                );
            })}
        </div>
    );
};