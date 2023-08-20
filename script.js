const agora = new Date();
const horario = agora.getHours();
console.log(horario);
if (horario >= 9 && hora <= 11) {
  document.getElementById("hora").innerHTML = "Bom Dia!";
} else if (horario >= 12 && hora <= 17) {
  document.getElementById("hora").innerHTML = "Boa Tarde!";
} else if (horario >= 18 && hora <= 23) {
  document.getElementById("hora").innerHTML = "Boa Noite!";
} else {
  document.getElementById("hora").innerHTML = "Boa Madrugada!";
}
