// Sesión 4 Strings
let str_sng = "Hola soy un texto de comillas simples";
let str_dbl = " Hola soy un texto con comillas dobles ";
console.log(str_sng);
console.log(str_dbl);

let str_comillas = " El otro día me dijo literalmente \"ve a sacar la basura\" ";
let str_comillas_simples =
  " El otro día me dijo literalmente \" ve a sacar la basura \" ";

////// Comillas invertidas ( backticks )
let str_backticks = " Hola esto es un string con backticks ";

console.log(str_backticks);

let nombre = " Iñigo ";
let saludo = `Hola ,${nombre}bienvenido`;
console.log(saludo);

// Plantillas HTML

let plantilla = `

<html>
    <h1>Pagina web de ${nombre}</h1>
    <p>Este es un párrafo</p>
</html>
`;

console.log(plantilla);

// Introducción de en html

let libros = [
    "Empieza por el por qué",
    "El monje que vendió su ferrari",
    "El poder de la hora",
];
