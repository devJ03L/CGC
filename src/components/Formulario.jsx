import { useContext } from "react"
import { GrasaCorporalContext } from "../context/GrasaCorporalContext";
import { calculoIndiceGrasa, validateForm } from "../helpers/index";
import { useForm } from "../hooks/useForm"

export const Formulario = () => {

    const { setGrasaCorporalInfo } = useContext(GrasaCorporalContext)
    const {
        form,
        errors,
        handleChange,
        handleSubmit,
        handleReset,
        handleBlur
    } = useForm({ gender: 'H' }, validateForm)

    const submitForm = form => {
        let res = calculoIndiceGrasa(form)
        setGrasaCorporalInfo({ porcentage: res, genero: form.gender })                
    }

    const resetForm = (event) => {
        handleReset(event)
        setGrasaCorporalInfo()
    }

    return (
        <form onSubmit={event => handleSubmit(event, submitForm)} autoComplete="off">
            <label>Género</label><br />
            <input
                type='radio'
                name='gender'
                value='H'
                checked={form.gender == 'H'}
                onChange={handleChange}
            />
            <label htmlFor="H">Hombre</label>
            <input
                type='radio'
                name='gender'
                value='M'
                checked={form.gender == 'M'}
                onChange={handleChange}
            /> 
            <label htmlFor="M">Mujer</label>

            <br />
            <div>
                <label>Altura (cm)</label>{errors.height ? <p className="error">{errors.height}</p> : <br />}
                <input
                    type='text'
                    placeholder="Escribe tu altura"
                    name='height'
                    value={form.height || ''}
                    onChange={handleChange}
                    onBlur={handleBlur} />
            </div>

            <div>
                <label>Peso (kg)</label>{errors.weight ? <p className="error">{errors.weight}</p> : <br />}
                <input
                    type='text'
                    placeholder="Escribe tu peso"
                    name='weight'
                    value={form.weight || ''}
                    onChange={handleChange}
                    onBlur={handleBlur} />
            </div>

            <div>
                <label>Cintura (cm)</label>{errors.waist ? <p className="error">{errors.waist}</p> : <br />}
                <input
                    type='text'
                    placeholder="Medida de tu cintura"
                    name='waist'
                    value={form.waist || ''}
                    onChange={handleChange}
                    onBlur={handleBlur} />
            </div>

            <div>
                <label>Cuello (cm)</label>{errors.neck ? <p className="error">{errors.neck}</p> : <br />}
                <input
                    type='text'
                    placeholder="Medida de tu cuello"
                    name='neck'
                    value={form.neck || ''}
                    onChange={handleChange}
                    onBlur={handleBlur} />
            </div>

            {
                form.gender == 'M' &&
                <div>
                    <label>Cadera (cm)</label>{errors.hip ? <p className="error">{errors.hip}</p> : <br />}
                    <input
                        type='text'
                        placeholder="Medida de tu cadera"
                        name='hip'
                        value={form.hip || ''}
                        onChange={handleChange}
                        onBlur={handleBlur} />
                </div>
            }

            <button id='btnCalcular' type='submit'>Calcular</button>
            <button id='btnLimpiar' onClick={resetForm}>Limpiar</button>
        </form>
    )
}
