# Calculadora de Grasa Corporal
Proyecto creado con **Vite** para calcular el porcentage de grasa corporal

### `yarn`
Comando para descargar las dependencias

### `yarn dev`
Comando para ejecutar de forma local el proyecto

### Descripción

Se creó un custom hook donde se encuentran las funciones para los eventos dentro del formulario. Este custom hook tambien guarda el estado del formulario y de los errores generados por cada validación no cumplida.

Se usa context para compartir los datos del indice de grasa y genero entre los diversos componentes.

En la barra de porcentage, la posición del indicador se logra con la propiedad paddin-left de CSS. 
EL valor se calcula con una regla de tres considerando que 32% es el porcentage máximo que se puede representar y un maximo de 99% de padding para que el indicador no se salga de la barra.

En la carpeta helpers se encuentran las funciones para calcular el indice de grasa corporal, validaciones del formulario y obtencion de los niveles para hombre o mujer.
