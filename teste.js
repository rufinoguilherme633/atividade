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

				divOpcoes.addEventListener("click", function () {
					if (divOpcoes.textContent = "Status") {
						main2.backgroundColor = 'red'
					} else {
						
					}
				});
		
		

// ---------------------------------------------------------------------------

			const room = document.querySelectorAll('.room');
			const main = document.getElementById('principal');
			const main2 = document.getElementById('segundario');

			main2.style.overflow = 'auto'
			main2.style.height ='100%'

		
		const main3 = document.getElementById('terciario')
			const span = document.getElementById("t");
			const headerSecondary = document.getElementById('headerSecondary')

			
			// main3.style.overflow = 'auto'
			// main3.style.height ='100%'
			room.forEach(function (element) {
				console.log(element)
				element.addEventListener('click', function () {

					main.style.display = 'none';
					headerSecondary.style.display = "flex"
					main2.style.display = 'block';

					const span =document.getElementById("t");
					if(span.textContent ===  "Sair") {
						span.textContent = "voltar"
					}else {
						span.textContent = "Sair"
					}
// Obter o texto da classe a ser usado como novo texto
const newClassName = this.querySelector(".nameClassRoom").textContent;

// Atualizar o texto da classe nameClassRoom com o novo texto
const nameClassRoom = document.querySelector(".nameClassRoomescolhida");
nameClassRoom.textContent =newClassName;
					
				});
			});
			span.addEventListener('click', function () {
				if(span.textContent ==="Sair") {


				}else{
					if(span.textContent ==="voltar" && main2.style.display == 'block') {
					
						main.style.display = 'flex';
						headerSecondary.style.display = "none"
						main3.style.display = 'none'
						main2.style.display = 'none';
						span.textContent = "Sair"
		
		
						
		
						}
						
						else {
							main2.style.display = 'block';
							main3.style.display = 'none'
							main.style.display = 'none';
						}

				}

			


				
			  });
		
//----------------------------------------------------


			const containerAluno = document.querySelectorAll('.containerAlunos');
			const segundario = document.getElementById('segundario');
			const terciario = document.getElementById('terciario');
			// const headerSecondary = document.getElementById('headerSecondary')


			// containerAluno.forEach(function (element) {
			// 	element.addEventListener('click', function (event) {
			// 	  var alunoId = event.target.id; // obtém o id do aluno clicado
			// 	  var alunoInfo = document.getElementById(alunoId + '-info'); // obtém as informações específicas do aluno
			// //    alunoInfo.style.display = 'block'; // exibe as informações
			// 	console.log(alunoInfo)
			// 	});
			//   });



			containerAluno.forEach(function (element) {
				console.log(element)
				element.addEventListener('click', function () {
					segundario.style.display = 'none';
					terciario.style.display = 'flex';
					headerSecondary.style.display = 'none';
				});
			});
// //----------------------------------------------------------------------



