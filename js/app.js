// let containerCard = document.querySelector('#container-card') 
// let contenedorTarjetas = document.querySelector('#contenedor-tarjetas')
// // const pokemon = "pikachu"

// // Funcion que realiza el request de informacion de un pokemon a la API
// const obtenerPersonaje = (pokemon)=>{
//     // pokemon puede ser el nombre o un numero entero 
//     const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
//     fetch(endpoint)
//     .then(response => response.json())
//     .then(data => {createCard(data)
//         // console.log(data.name)
//     })
// }


// const createCard = (personaje) => {
//     const{name, height, weight, abilities, 
//         sprites:{other:{home:{front_default: image}}}} = personaje  // utilicé destructuring

//     // Creo el HTML para las habilidades
//     const abilitiesHTML = abilities.map(ability => ability.ability.name).join(', ')

//     containerCard.innerHTML = `<div class="card" style="width: 18rem;">
//             <img src=${image} class="card-img-top" style="width: 18rem; height: 18rem" alt="imagen de ${name}">
//             <div class="card-body">
//             <h3 class="card-title">${name.charAt(0).toUpperCase() + name.slice(1)}</h4>
//             <p class="card-text">
//                 <b>Height:</b> ${(height * 0.1).toFixed(2) } m <br> 
//                 <b>Weight:</b> ${(weight * 0.1).toFixed(2)} kg <br>
//                 <b>Abilities:</b> ${abilitiesHTML}          
//             </p>
//             </div>
//         </div>`
//     return containerCard
// }

// // Voy a crear y mostrar una lista de pokemon en pantalla
// let listaPokemon = [1, 4, 5, 'pikachu', '112'];

// function crearListaTarjetas(listaPokemon){
//     for (pokemon of listaPokemon){
//         let tarjeta = obtenerPersonaje(pokemon)
//         console.log(tarjeta)
//         contenedorTarjetas.innerHTML += tarjeta
//     }
// }

// // obtenerPersonaje('persian')
// crearListaTarjetas(listaPokemon)




// // const obtenerPersonaje = (pokemon)=>{
// //     const baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    

// //     fetch(baseUrl)
// //         .then(response => response.json())
// //         .then(data => console.log(data))
// //     }

// // obtenerPersonaje(6)


let containerCard = document.querySelector('#container-card');
let contenedorTarjetas = document.querySelector('#contenedor-tarjetas');

const obtenerPersonaje = async (pokemon) => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(endpoint);
    const data = await response.json();
    return createCard(data);
}

const createCard = (personaje) => {
    const {id, name, height, weight, abilities, 
        sprites: { other: { home: { front_default: image } } } } = personaje;

    const abilitiesHTML = abilities.map(ability => ability.ability.name).join(', ');

    const cardHTML = `
        <div class="card" style="width: 18rem; margin: 1.5rem">
            <img src=${image} class="card-img-top" style="width: 18rem; height: 18rem" alt="imagen de ${name}">
            <div class="card-body">
                <h3 class="card-title">${id} - ${name.charAt(0).toUpperCase() + name.slice(1)}</h3>
                <p class="card-text">
                    <b>Height:</b> ${(height * 0.1).toFixed(2)} m <br> 
                    <b>Weight:</b> ${(weight * 0.1).toFixed(2)} kg <br>
                    <b>Abilities:</b> ${abilitiesHTML}
                </p>
            </div>
        </div>`;
    return cardHTML;
}

const listaPokemon = [4, 5, 6, 'pikachu', 26, 112, 125,126 ];

const crearListaTarjetas = async (listaPokemon) => {
    for (const pokemon of listaPokemon) {
        const tarjeta = await obtenerPersonaje(pokemon);
        console.log(tarjeta);
        contenedorTarjetas.innerHTML += tarjeta;
    }
}

crearListaTarjetas(listaPokemon);