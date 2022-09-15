# Calculadora de Grasa Corporal
Proyecto creado con **Vite** para calculadora el porcentage de grasa corporal

### `yarn`
Comando para descargar las dependencias

### `yarn dev`
Comando para ejecutar de forma local el proyecto

### Descripción

Se creó un custom hook donde se encuentran las funciones para los eventos dentro del formulario. Este custom hook tambien guarda el estado del formulario y de los errores generados por cada validación no cumplida.

En la barra de porcentage, la posición del indicador se logra con la propiedad paddin-left de CSS. 
EL valor se calcula con una regla de tres considerando que 32% es el porcentage máximo que se puede representar y un maximo de 99% de padding para que el indicador no se salga de la barra.

En la carpeta data solo se guarda un archivo con un array que contiene la informacion mostrada debajo de la barra de colores.