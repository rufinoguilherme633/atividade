'use strict'
const urlCurso = "http://localhost:8080/v1/lion-school/cursos";

async function getCursos() {
  const response = await fetch(urlCurso);
  const data = await response.json();
  console.log(data)
  const cursos = data.cursos.map(curso => {
    console.log(data)
    return {
      nome: curso.Curso,
      icone: curso.Icone,
      sigla: curso.Sigla_Curso
    };
  });
  return cursos;
}
const criarMateria = (materia) => {
  const room = document.createElement("div");
  room.classList.add("room");

  const img = document.createElement('img');
  img.classList.add('imgAula');
  img.src = materia.icone;

  const name = document.createElement('span');
  name.classList.add('nameClassRoom');
  name.textContent = materia.nome;

  room.append(img, name);

  
  return room;
}

const carregarAula = async () => {
  const container = document.getElementById('classRoom');
  const cursos = await getCursos();
  const cntatoI = cursos.map(criarMateria);
  container.append(...cntatoI);

  const room = document.querySelectorAll('.room');

    // adiciona evento de clique na div .room
    const rooms = document.querySelectorAll('.room');
    rooms.forEach(room => {
      room.addEventListener('click', () => {
        const cursoSelecionado = room.querySelector('.nameClassRoom').textContent;
     
        console.log(alunos);
        // adicionar código para exibir os alunos na tela
      });
    });

    
  const main = document.getElementById('couses');
  const main2 = document.getElementById('studants');

  main.style.overflow = 'auto'
  main.style.height = '100%'

  main2.style.overflow = 'auto'
  main2.style.height = '100%'

  const main3 = document.getElementById('student')
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

      const span = document.getElementById("t");
      if (span.textContent === "Sair") {
        span.textContent = "voltar"
      } else {
        span.textContent = "Sair"
      }
      // Obter o texto da classe a ser usado como novo texto
      const newClassName = this.querySelector(".nameClassRoom").textContent;

      // Atualizar o texto da classe nameClassRoom com o novo texto
      const nameClassRoom = document.querySelector(".nameClassRoomescolhida");
      nameClassRoom.textContent = newClassName;

    });
  });

  span.addEventListener('click', function () {
    if (span.textContent === "Sair") {

    } else {
      if (span.textContent === "voltar" && main2.style.display == 'block') {

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
        headerSecondary.style.display = "flex"
      }

    }
  });
}


carregarAula();
// ---------------------------------------------------------------------------------------
const urlgetlistStudents = "http://localhost:8080/v1/lion-school/alunos"
async function getAlunos() {
  const response = await fetch(urlgetlistStudents)
  // console.log(response)
  const data = await response.json()

  const alunos = data.alunos.map(aluno =>{
    return {
      nome_aluno: aluno.Nome,
      image_aluno: aluno.Perfil,
      status_aluno: aluno.Status,
      curso_aluno: aluno.Curso
    }
  })
 return alunos
}
let idIncremental = 1; // variável para gerar um ID único para cada div de aluno
const criarAlunos = (aluno) => {
  const containerAlunos = document.createElement('div');
  containerAlunos.classList.add('containerAlunos');

  const containerAluno = document.createElement('div');
  containerAluno.classList.add('containerAluno');
  // containerAluno.id = 'containerAluno'
  containerAluno.id = `containerAluno-${idIncremental}`; // utiliza a variável incremental para gerar um ID único

  if (aluno.status_aluno === 'Finalizado') { containerAluno.style.backgroundColor = '#3347B0' }
  else { containerAluno.style.backgroundColor = ' #E5B657' }

  const img = document.createElement('img')
  img.classList.add('imgAluno')
  img.src = aluno.image_aluno

  const name = document.createElement('span')
  name.classList.add('nameAluno')
  name.textContent = aluno.nome_aluno

  containerAluno.append(img, name);
  containerAlunos.append(containerAluno);

  idIncremental++; // incrementa a variável incremental para gerar um novo ID único para a próxima div de aluno
  
  return containerAlunos;
}

const carregarAlunos = async () => {
  const container = document.getElementById('alunos');
  const alunos = await getAlunos();
  const cntatoI = alunos.map(criarAlunos);
  container.append(...cntatoI);
  addClickListeners();
}
const statusDivoption = document.querySelector('.statusDivoption');
const divOpcoes = document.getElementById('div-opcoes');

statusDivoption.addEventListener('click', () => {
  if (divOpcoes.style.display === 'none') {
    divOpcoes.style.display = 'block';
  } else {
    divOpcoes.style.display = 'none';
  }
});
document.addEventListener('click', (event) => {
  if (!statusDivoption.contains(event.target)) {
    divOpcoes.style.display = 'none';
  }
});

// Adicionando um event listener para a li "Finalizado"
const finalizado = document.querySelector('.finalizado');
finalizado.addEventListener('click', async () => {
  const alunos = await getAlunos();
  const filteredAlunos = alunos.filter(aluno => aluno.status_aluno === 'Finalizado');

  const container = document.getElementById('alunos');
  container.innerHTML = '';

  const cntatoI = filteredAlunos.map(criarAlunos);
  container.append(...cntatoI);


  addClickListeners()
  
});

const cursando = document.querySelector('.cursando');
cursando.addEventListener('click', async () => {
  const alunos = await getAlunos();
  const filteredAlunos = alunos.filter(aluno => aluno.status_aluno === 'Cursando');

  const container = document.getElementById('alunos');
  container.innerHTML = '';

  const cntatoI = filteredAlunos.map(criarAlunos);
  container.append(...cntatoI);
  addClickListeners()
});



const status = document.querySelector('.status');
status.addEventListener('click', async () => {
  const alunos = await getAlunos();
  const filteredAlunos = alunos.filter(aluno => aluno.status_aluno === 'Cursando' ||  aluno.status_aluno === 'Finalizado');

  const container = document.getElementById('alunos');
  container.innerHTML = '';

  const cntatoI = filteredAlunos.map(criarAlunos);
  container.append(...cntatoI);
  addClickListeners()
});
// Restante do código JavaScript
// ...

const container = document.getElementById('alunos');
const main2 = document.querySelector('.main2');
const student = document.getElementById('student');
// Function to handle click event on each containerAluno element
const handleClick = (event) => {
  main2.style.display = 'none'; // hide main2
  student.style.display = 'flex'; // show student
  headerSecondary.style.display = "none"
  
  const newClassName = event.currentTarget.querySelector(".nameAluno").textContent;
  const perfilAluno= event.currentTarget.querySelector(".imgAluno").src;
  const nameClassRoom = document.querySelector(".aluno__name");
  const perfilClassRoom = document.querySelector(".aluno__image");
  nameClassRoom.textContent = newClassName;
  perfilClassRoom.src = perfilAluno;
};



// Add event listener to each containerAluno element
const addClickListeners = () => {
  const containerAlunos = container.querySelectorAll('.containerAlunos');
  containerAlunos.forEach((containerAluno) => {
    containerAluno.addEventListener('click', handleClick);
  });
};


carregarAlunos();



getAlunos()

