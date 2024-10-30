//Regla de tres para calcular la posicion del indicador
const calculaPadding = valor => {
    if (valor > 32) return 98
    if (valor < 0) return 0
    return valor * 99 / 32
}

export const BarraResultado = ({ porcentage = 0 }) => {

    const posicionMarcador = {
        'paddingLeft': `${calculaPadding(porcentage)}%`
    }

    return (
        <>
            <h1>Tu resultado: {porcentage}</h1><br />
            <div className='indicadorNivel' style={posicionMarcador}>
                <p>{porcentage < 0 ? 0 : porcentage}%</p>
                <p>&#9660;</p>
            </div>
            <div id='gradiente'></div>
        </>
    )
}
