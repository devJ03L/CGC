import { Niveles } from '../data/Niveles'

//Regla de tres para calcular la posicion del indicador
const calculaPadding = valor => {
  if (valor > 32) return 98
  if (valor < 0) return 0
  return valor * 99 / 32
}

export const Resultado = ({BFP, gender}) => {

  const posicionMarcador = {
    'paddingLeft': `${calculaPadding(BFP)}%`
  }

  return (
    <>
      <h1>Tu resultado: {BFP < 0 ? 0 : BFP}%</h1><br />
      <div className='indicadorNivel' style={posicionMarcador}>
        <p>{BFP < 0 ? 0 : BFP}%</p>
        <p>&#9660;</p>
      </div>
      <div id='gradiente'></div>
      <div className='row'>
        {Niveles.map((n, i) =>
          <Nivel 
            {...n} 
            gender={gender}           
            key={i} />)
        }
      </div>

    </>
  )
}

//Componente que muestra info de cada nivel debajo de la barra de colores
const Nivel = ({ color, porcentageH, porcentageM, descripcion, gender }) => {
  return (
    <div className='infoNivel'>
      <div className='colorNivel' style={{ backgroundColor: color }}></div>
      <h1 className='porcentNivel'>{gender == 'H' ? porcentageH : porcentageM}</h1>
      <p>{descripcion}</p>
    </div>
  )
}
