export const validateForm = (form) =>  {

        let errors = {}
        const regexInput = /^\d+(\.?\d)?$/

        if (!form.height) errors.height = 'El campo Altura es requerido'
        else if (!regexInput.test(form.height)) errors.height = 'Solo se permiten valores positivos con hasta un decimal'

        if (!form.weight) errors.weight = 'El campo Peso es requerido'
        else if (!regexInput.test(form.weight)) errors.weight = 'Solo se permiten valores positivos con hasta un decimal'

        if (!form.waist) errors.waist = 'El campo Cintura es requerido'
        else if (!regexInput.test(form.waist)) errors.waist = 'Solo se permiten valores positivos con hasta un decimal'

        if (!form.neck) errors.neck = 'El campo Cuello es requerido'
        else if (!regexInput.test(form.neck)) errors.neck = 'Solo se permiten valores positivos con hasta un decimal'

        if (!form.hip && form.gender == 'M') errors.hip = 'El campo Cadera es requerido'
        else if (!regexInput.test(form.hip) && form.gender == 'M') errors.hip = 'Solo se permiten valores positivos con hasta un decimal'

        return errors
}