import { infoNiveles } from '../helpers/index'
import { Nivel } from './index'

export const ListaNiveles = ({ genero }) => {

    const niveles = infoNiveles(genero)

    return (
        <div className="row">
            {niveles.map((n, i) => <Nivel key={i} {...n} />)}
        </div>
    )
}
