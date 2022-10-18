import { useState } from "react";

export const useForm = (initialState, validateForm) => {

    const [form, setForm] = useState(initialState)
    const [errors, setErrors] = useState({})    

    //Funcion que actualiza el estado del form cada que cambia un input
    const handleChange = event => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }

    //Borra el estado del formulario, la opcion H en el radio button siempre es la de default
    const handleReset = event => {
        event.preventDefault()
        setForm(initialState)
        setErrors({})
    }

    //Funcion que llama las validaciones cada que se sale de un input
    const handleBlur = event => {
        handleChange(event)
        let errores = validateForm(form)
        setErrors(errores)
    }

    //Se calcula el indice de grasa corporal cuando el objeto de errores esta vacío
    const handleSubmit = (event, postFunc) => {
        
        event.preventDefault()
        let errores = validateForm(form)        

        if (Object.keys(errores).length === 0) {
            postFunc(form)            
        }else{
            setErrors(errores)
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