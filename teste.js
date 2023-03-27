
// document.addEventListener('DOMContentLoaded', function() {
//   var sign = document.getElementById("sign");
//   var div1 = document.getElementById("segundario");
//   var div2 = document.getElementById("terciario");

//   sign.addEventListener('click', function() {
//     if (div1.style.display === "none") {
//       div1.style.display = "block";
//       div2.style.display = "none";
//     } else {
//       div1.style.display = "none";
//       div2.style.display = "block";
//     }
//   });
// });

function mostrarOpcoes() {
    const divOpcoes = document.querySelector(".option");
    divOpcoes.classList.toggle("visivel");
  }