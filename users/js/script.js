const listaUsuarios = document.getElementById("listaUsuarios"); //?punto de ref en el DOM para insertar lista de usuarios//

const generarEdadAleatoria = () => Math.floor(Math.random() * (60 - 18 + 1)) + 18; //?edad aleatoria entre 18 y 60//
const construirString = (address) => `${address.street}, ${address.suite}, ${address.city}`;

//!procesar y mostrar usuarios//
const procesarUsuarios = (usuarios) => {
    const usuariosProcesados = usuarios.map((usuario, index) => {
        const edad = generarEdadAleatoria();
        const img = `./assets/img/${index + 1}.jpeg`; //?imágenes numeradas 1.jpeg, 2.jpeg...//
        const direccion = construirString(usuario.address);
         
        return { ...usuario, edad, img, direccion };
    });

    mostrarUsuarios(usuariosProcesados);
};

//!renderizar los usuarios en el DOM//
function mostrarUsuarios(usuarios) {
    usuarios.forEach(usuario => {
        const li = document.createElement("li");
        li.className = "usuario";
        li.innerHTML = `
            <img src="${usuario.img}" alt="Imagen de ${usuario.name}" class="usuario-img">
            <div class="usuario-info">
                <p><strong>Nombre:</strong> ${usuario.name}</p>
                <p><strong>Edad:</strong> ${usuario.edad}</p>
                <p><strong>Username:</strong> ${usuario.username}</p>
                <p><strong>Teléfono:</strong> ${usuario.phone}</p>
                <p><strong>Email:</strong> ${usuario.email}</p>
                <p><strong>Compañía:</strong> ${usuario.company.name}</p>
                <p><strong>Dirección:</strong> ${usuario.direccion}</p>
            </div>
        `;
        listaUsuarios.appendChild(li);
    });
}

//! Uso fetch para traer datos de la API y procesarlos
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error("Error al obtener los usuarios");
        }
        return response.json();
    })
    .then(usuarios => procesarUsuarios(usuarios))
    .catch(error => console.error("Error al procesar los usuarios:", error));
