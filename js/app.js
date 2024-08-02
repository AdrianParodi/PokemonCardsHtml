let containerCard = document.querySelector('#container-card');
let contenedorTarjetas = document.querySelector('#contenedor-tarjetas');
let botonSiguiente = document.querySelectorAll('.siguiente')
let botonAnterior = document.querySelectorAll('.anterior')
let botonInicio = document.querySelectorAll('.inicio')
let botonFinal = document.querySelectorAll('.final')

let URLBase = 'https://pokeapi.co/api/v2/'

// Accedemos al EndPoint /pokemon/{id or name}
const obtenerPersonaje = async (pokemon) => {
    const endpoint = `${URLBase}/pokemon/${pokemon}`;
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


// Funcion utilizada para generar un rango de numeros:
function generarLista(inicio, fin) {
    let lista = [];
    for (let i = inicio; i <= fin; i++) {
        lista.push(i);
    }
    return lista;
}


const crearListaTarjetas = async (inicio, fin) => {
    let listaPokemon = generarLista(inicio, fin)
    // Limpio el contenedor de tarjetas
    contenedorTarjetas.innerHTML = ''

    for (const pokemon of listaPokemon) {
        const tarjeta = await obtenerPersonaje(pokemon);
        contenedorTarjetas.innerHTML += tarjeta;
    }
}

// Despliegue de la primera página
let inicio = 1;
let fin = 12;
crearListaTarjetas(inicio, fin)


// Como tenemos dos botones iguales, aplicamos la funcionalidad a cada uno de ellos
botonSiguiente.forEach(boton => {
    boton.addEventListener('click', () => {
        if (inicio < 1021){
            inicio += 12;
            fin = inicio + 11;
            crearListaTarjetas(inicio, fin);
        }
    });
});

// Como tenemos dos botones iguales, aplicamos la funcionalidad a cada uno de ellos
botonAnterior.forEach(boton => {
    boton.addEventListener('click', () => {
        if (inicio>12){
            fin = inicio - 1;
            // console.log(`inicio: ${fin}`)
            inicio = fin - 11;
            // console.log(`fin: ${inicio}`)

            crearListaTarjetas(inicio, fin);
        } 
        
    });
});

// Como tenemos dos botones iguales, aplicamos la funcionalidad a cada uno de ellos
botonFinal.forEach(boton => {
    boton.addEventListener('click', () => {
        if (inicio != 1021){
            inicio = 1021;
            fin = 1025;
            console.log(inicio,fin);
            crearListaTarjetas(inicio, fin); 
        }
        
    });
});

// Como tenemos dos botones iguales, aplicamos la funcionalidad a cada uno de ellos
botonInicio.forEach(boton => {
    boton.addEventListener('click', () => {
        if (inicio != 1){
            inicio = 1;
            fin = inicio + 11;
            console.log(fin);
            crearListaTarjetas(inicio, fin); 
        }
        
    });
});

// console.log(1025%12)

