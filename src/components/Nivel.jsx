export const Nivel = ({porcentage, descripcion, color}) => {
    return (
        <div className='infoNivel'>
            <div className='colorNivel' style={{ backgroundColor: color }}></div>
            <h1 className='porcentNivel'>{porcentage}</h1>
            <p>{descripcion}</p>
        </div>
    )
}
