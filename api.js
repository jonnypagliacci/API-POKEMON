
let botonPokemon = document.getElementById("botonAceptarPokemon");
botonPokemon.addEventListener("click", () => {
    let nombrePokemon = document.getElementById("nombrePokemon").value;
    let apiUrl = `https://pokeapi.co/api/v2/pokemon/${nombrePokemon}/`
    let htmlResponse = document.getElementById("ventanaPokemon");
    const newRequest = new XMLHttpRequest();
    newRequest.open("GET", apiUrl);
    newRequest.send();
    newRequest.onload = () => {
        if(newRequest.status === 200 && newRequest.readyState === 4){
            let data = JSON.parse(newRequest.response);
            let ability = data.abilities[0].ability.name;
            htmlResponse.innerHTML = `<ul>Habilidad del Pokemon</ul>
            <ul>${ability}</ul>`;
        }else{
            window.alert(`Error ${newRequest.status}`);
        };
    };

});
