import { useState } from "react";

export const useForm = () => {

    const [form, setForm] = useState({ gender: 'H' })
    const [errors, setErrors] = useState({})

    const handleChange = event => {
        const name = event.target.name
        const value = event.target.value
        setForm({ ...form, [name]: value })
    }

    const handleReset = event => {
        event.preventDefault()
        setForm({ gender: 'H' })
    }

    const handleBlur = event => {
        handleChange(event)
        validateForm()
    }

    const validateForm = () => {
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

        if (!form.hip && form.gender=='M') errors.hip = 'El campo Cadera es requerido'
        else if (!regexInput.test(form.hip) && form.gender=='M') errors.hip = 'Solo se permiten valores positivos con hasta un decimal'

        setErrors(errors)
    }

    const handleSubmit = (event) => {
        event.preventDefault()        
        validateForm()
        
        if (Object.keys(errors).length == 0) {
            let res
            const W = Number(form.waist)
            const N = Number(form.neck)
            const H = Number(form.height)
            const HI = form.gender == 'M' && Number(form.hip)

            if (form.gender == 'H')                
                res = ((495 / (1.0324 - (0.19077 * Math.log10(W - N)) + (0.15456 * Math.log10(H)))) - 450).toFixed(1)
            else
                res = ((495 / (1.29579 - (0.35004 * Math.log10(W + HI - N)) + (0.22100 * Math.log10(H)))) - 450).toFixed(1)

            setForm({ ...form, ['BFP']: res })
        }
    }

    return {
        form,
        errors,
        handleChange,
        handleSubmit,
        handleReset,
        handleBlur        
    }
}