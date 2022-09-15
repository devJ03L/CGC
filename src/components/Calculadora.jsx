import { useForm } from "../hooks/useForm"
import { Resultado } from "./Resultado"

export const Calculadora = () => {

  const {
    form,
    errors,
    handleChange,
    handleSubmit,
    handleReset,
    handleBlur
  } = useForm()

  return (
    <div className="row">
      <div id='formulario'>
        <h1>Calculadora de Grasa Corporal</h1>
        <p id='descripcion'>El método de la Marina de Estados Unidos (US Navy Method) ofrece una manera
          sencilla de calcular un aproximado del porcentaje de tejido adiposo en el cuerpo de una persona.<br /><br />
          Los valores requeridos por la fórmula son los siguientes:
        </p>
        <form onSubmit={handleSubmit} autoComplete="off">
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
              onBlur={handleBlur}/>
          </div>

          <div>
            <label>Peso (kg)</label>{errors.weight ? <p className="error">{errors.weight}</p> : <br />}
            <input
              type='text'
              placeholder="Escribe tu peso"
              name='weight'
              value={form.weight || ''}
              onChange={handleChange}
              onBlur={handleBlur}/>
          </div>

          <div>
            <label>Cintura (cm)</label>{errors.waist ? <p className="error">{errors.waist}</p> : <br />}
            <input
              type='text'
              placeholder="Medida de tu cintura"
              name='waist'
              value={form.waist || ''}
              onChange={handleChange}
              onBlur={handleBlur}/>
          </div>

          <div>
            <label>Cuello (cm)</label>{errors.neck ? <p className="error">{errors.neck}</p> : <br />}
            <input
              type='text'
              placeholder="Medida de tu cuello"
              name='neck'
              value={form.neck || ''}
              onChange={handleChange}
              onBlur={handleBlur}/>
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
          <button id='btnLimpiar' onClick={handleReset}>Limpiar</button>
        </form>
      </div>

      <div id='resultado'>
        {
          !isNaN(form.BFP) &&
          <Resultado {...form} />
        }
      </div>

    </div>
  )
}
