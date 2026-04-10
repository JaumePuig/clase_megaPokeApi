let rand = Math.floor(Math.random() * 100) + 1;

let userTry = 0;
let tries = 0;

function guess() {
  tries = 0;
  while (userTry != rand || tries < 5) {
    userTry = prompt("Elige un numero");
    if (userTry == rand) {
      console.log("Correcto!");
    } else if (userTry > rand) {
      console.log("Mas bajo");
      console.log("Te quedan " + (5 - tries) + " intentos");
    } else if(userTry < rand) {
      console.log("Mas alto");
      console.log("Te quedan " + (5 - tries) + " intentos");
    }
  }
  if (tries == 5) {
    console.log("Te quedaste sin intentos");
  }
}

guess();
