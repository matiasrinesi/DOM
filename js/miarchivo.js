class Jugador {
    constructor(id, nombre, apellido, club, nacionalidad) {
        this.id = id
        this.nombre = nombre
        this.apellido = apellido
        this.club = club
        this.nacionalidad = nacionalidad
    }
}

const jugador1 = new Jugador(1,"Lionel", "Messi", "PSG" , "Argentina" )
const jugador2 = new Jugador(2,"Angel", "Di Maria", "Juventus" , "Argentina" )
const jugador3 = new Jugador(3,"Cristiano", "Ronaldo", "Manchester United" , "Portugal" )
const jugador4 = new Jugador(4,"Kevin", "De Bruyne", "Manchester City" , "Belgica")

 
const jugadores = [jugador1, jugador2, jugador3, jugador4]

const divJugadores = document.getElementById("jugadores")



jugadores.forEach(jugador => {
    divJugadores.innerHTML += `
    <div class="card jugadores" id="jugador${jugador.id}" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${jugador.apellido}</h5>
        <p class="card-text">Nombre: ${jugador.nombre}</p>
        <p class="card-text">Club: ${jugador.club}</p>
        <p class="card-text">Nacionalidad: ${jugador.nacionalidad}</p>

</div>
</div>
    `
})
texto.innerHTML += "<p> De todos ellos solo Messi y Ronaldo ganaron el balon de oro </p>"