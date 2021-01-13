const hbs = require('hbs');
//helpers
//esto nos sirve para declarar lo que deseamos mostrar en los parciales y págias princiales de hbs con formato de fechas en utilizando algo de js pero en una hoja aparte que se utilice en todas las demás.
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, i) => {
        palabras[i] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});
//esta parte  se comento ya que puede crear conflictos una vez que sea lanzado el driname de la carpeta que deseamos mostrar con datso html