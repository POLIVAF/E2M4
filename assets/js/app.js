// codigo refactorizado
const usuario = {
  nombre: 'Ana',
  edad: 24,
  ciudad: 'Barcelona'
};

// Arrow function para crear el mensaje de presentación
const crearMensajePresentacion = (user) => {
  const {nombre, edad, ciudad} = user;
  

  const mensaje = `Hola, mi nombre es ${nombre}, tengo ${edad} años y vivo en la ciudad de ${ciudad}.`;
  
  return mensaje;
};

// Se llama a la función y se muestra el resultado en consola
const mensajeDeBienvenida = crearMensajePresentacion(usuario);
console.log(mensajeDeBienvenida);


