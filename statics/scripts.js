console.log("Hola mundo");

function do_alert(){
    document.getElementById("show").innerHTML = "presionaste un boton";
}

let operation;

if (document.getElementById("show") === 0 && do_alert() === true) {
    document.getElementById("show").innerHTML = "presionaste un boton una vez";

}
