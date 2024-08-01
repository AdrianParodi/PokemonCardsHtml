let containerCard = document.querySelector('#container-card') 

const pokemon = "pikachu"



const obtenerPersonaje = (pokemon)=>{
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    

    // fetch(baseUrl)
    //     .then(response => response.json())
    //     .then(data => {
    //         const name = data.name;
    //         const image = data.sprites.other.home.front_default ;
    //         const height = data.height * 10; // meters
    //         const weight = data.weight * 0.1; // kilograms
    //         const abilities = data.abilities;
    //         console.log(name, height, weight, abilities, image)
    //     })
    // }

    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {createCard(data)
        // console.log("Hola", data.sprites.other.home.front_default)
       
    })
}


const createCard=(personaje)=>{
    const{name,height, weight, abilities, sprites:{other:{home:{front_default: image}}}}=personaje  // utilicé destructuring
    // console.log(name, height, weight, abilities, image)
    containerCard.innerHTML = `<div class="card" style="width: 18rem;">
            <img src=${image} class="card-img-top" alt="imagen de ${name}">
            <div class="card-body">
            <h4 class="card-title">${name.charAt(0).toUpperCase() + name.slice(1)}</h4>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
        </div>`
}


obtenerPersonaje(6)





// const obtenerPersonaje = (pokemon)=>{
//     const baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    

//     fetch(baseUrl)
//         .then(response => response.json())
//         .then(data => console.log(data))
//     }

// obtenerPersonaje(6)