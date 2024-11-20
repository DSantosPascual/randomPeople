# Detalles de Usuarios con Edades Aleatorias

Este proyecto utiliza JavaScript para obtener datos simulados de usuarios desde la [API JSONPlaceholder](https://jsonplaceholder.typicode.com/users). Luego, se agrega una edad aleatoria a cada usuario y se muestran detalles específicos en una lista en el DOM. También se añaden imagenes que se han generado con IA desde https://thispersondoesnotexist.com/


## Estructura de Carpetas

- 📄 **index.html**: Página principal HTML.
- 📁 **css**: Contiene el archivo `styles.css` para estilos básicos.
- 📁 **js**: Contiene el archivo `script.js` para la lógica principal.

## Cómo Funciona

1. La página HTML (`index.html`) tiene una lista (`ul`) con el id `listaUsuarios` donde se mostrarán los detalles de los usuarios.
2. El archivo CSS (`styles.css`) proporciona estilos básicos para mejorar la apariencia de la lista.
3. El archivo JavaScript (`script.js`) realiza lo siguiente:
    - Obtiene datos simulados de usuarios desde la API JSONPlaceholder `https://jsonplaceholder.typicode.com/users`.
    - Agrega una edad aleatoria a cada usuario.
    - Cada usuario tendrá una imagen asociada por `ID` (están en la carpeta assets/img) son extensión `.jpeg`  
    - Muestra detalles específicos de cada usuario en la lista en el DOM: name, age, username, img, phone, email, company, address
    - address tendrá estos datos como valor: usuario.address.street, usuario.address.suite, usuario.address.city

Debería quedar algo similar a esto

![users](./assets/img/users.png)

## Consejos

Aprovecha para usar:
- Destructuring
- spread operator. Crea un nuevo array con el objeto y con los nuevos datos a añadir (age, img, address con los nuevos datos)
- Modifica el archivo `styles.css` para cambiar estilos.
- Ajusta el archivo `script.js` para mostrar diferentes detalles de usuarios según tus necesidades.
