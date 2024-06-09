var today= new Date();
var hourNow = today.getHours();
var saludo;

console.log(today);
console.log(hourNow);

function saludoN(nombre){
    if(hourNow > 18) {
            saludo = "Buenas Noches";
        } else if (hourNow > 12){
            saludo = "Buenas Tardes";
        } else if (hourNow > 0){
            saludo = "Buenos dias";
        } else {
            saludo = 'Bienvenido!!';
        }

    document.write('<h3>' + saludo + " " + nombre + '</h3>');
}

saludoN('Juan');