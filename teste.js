'use strict'


				var divPrincipal = document.getElementById("status");
				var divOpcoes = document.getElementById("div-opcoes");

				divPrincipal.addEventListener("click", function () {
					if (divOpcoes.style.display === "none") {
						divOpcoes.style.display = "block";
					} else {
						divOpcoes.style.display = "none";
					}
				});
		

// ---------------------------------------------------------------------------

			const room = document.querySelectorAll('.room');
			const main = document.getElementById('principal');
			const main2 = document.getElementById('segundario');


			room.forEach(function (element) {
				console.log(element)
				element.addEventListener('click', function () {
					main.style.display = 'none';
					main2.style.display = 'block';
				});
			});
		

//----------------------------------------------------


			const containerAlunos = document.querySelectorAll('.containerAlunos');
			const segundario = document.getElementById('segundario');
			const terciario = document.getElementById('terciario');

			containerAlunos.forEach(function (element) {
				console.log(element)
				element.addEventListener('click', function () {
					segundario.style.display = 'none';
					terciario.style.display = 'block';
				});
			});
