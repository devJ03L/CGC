import React from 'react'
import { infoNiveles } from '../helpers/index'
import { Nivel } from './index'

export const ListaNiveles = React.memo(({ genero }) => {

    const niveles = infoNiveles(genero)

    return (
        <div className="row">
            {niveles.map((n, i) => <Nivel key={i} {...n} />)}
        </div>
    )
})
