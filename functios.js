//     'use strict'
//     import {alunos} from "./alunos.js"


//     // const criarAlunos = (aluno) => {
//     //     const alunos = document.createElement('div')
//     //     alunos.classList.add('containerAlunos')

//     //     const containerAluno = document.createElement('div');
//     //     containerAluno.classList.add('containerAluno');

//     //       const img = document.createElement('img')
//     //      img.classList.add('imgAluno')
//     //      img.src = `./img/aluno.png`

//     //     const name = document.createElement('span')
//     //     name.classList.add('nameAluno')
//     //    name.textContent = aluno.nome
//     // alunos.append(name, img)
//     // alunos.append(containerAluno)


//     // return alunos
//     // }

//     // const carregarAlunos = () => {
//     //     const container = document.getElementById('alunos')
//     //     const cntatoI = alunos.map(criarAlunos)


//     //     container.replaceChildren(...cntatoI)
//     // }


//     // carregarAlunos()
//     const criarMateria = (materia) => {
//         const room = document.createElement("div");
//         room.classList.add("room");

//         const img = document.createElement('img');
//         img.classList.add('imgAula');
//         img.src = materia.icone;

//         const name = document.createElement('span');
//         name.classList.add('nameClassRoom');
//         name.textContent = materia.nome;

//         room.append(img, name);

//         return room;
//       }

//       const carregarAula = () => {
//         const container = document.getElementById('classRoom');
//         const cntatoI = alunos[0].curso.map(criarMateria);
//         container.append(...cntatoI);
//       }

//       carregarAula();


//     let idIncremental = 1; // variável para gerar um ID único para cada div de aluno
//      const criarAlunos = (aluno) => {
//         const containerAlunos = document.createElement('div');
//         containerAlunos.classList.add('containerAlunos');

//         const containerAluno = document.createElement('div');
//         containerAluno.classList.add('containerAluno');

//         // containerAluno.id = 'containerAluno'

//         containerAluno.id = `containerAluno-${idIncremental}`; // utiliza a variável incremental para gerar um ID único

//         if(aluno.status  === 'Finalizado') {containerAluno.style.backgroundColor = '#3347B0'}
//         else{  containerAluno.style.backgroundColor = ' #E5B657'}





//         const img = document.createElement('img')
//         img.classList.add('imgAluno')
//         img.src = `./img/aluno.png`

//         const name = document.createElement('span')
//         name.classList.add('nameAluno')
//         name.textContent = aluno.nome

//         containerAluno.append(img, name);
//         containerAlunos.append(containerAluno);

//  idIncremental++; // incrementa a variável incremental para gerar um novo ID único para a próxima div de aluno

//         return containerAlunos;
//     }

//     const carregarAlunos = () => {
//         const container = document.getElementById('alunos');
//         const cntatoI = alunos.map(criarAlunos);
//         container.append(...cntatoI);
//     }

//     carregarAlunos();

//     // -----------------------------------------------


//     // const aluno = () => {
//     //     const containerAlunos = document.createElement('div');
//     //     containerAlunos.classList.add('alunoselecionado');


//     //     const img = document.createElement('img')
//     //     img.classList.add('imgalunoescolhido')
//     //     img.src = `./img/aluno.png`

//     //     const name = document.createElement('span')
//     //     name.classList.add('namealunoselecionado')
//     //     name.textContent = aluno.nome

//     //     containerAluno.append(img, name);

//     // }

//     // const carregaAlunoIndividual = () => {
//     //     const container = document.getElementById('alunoselecionado');
//     //     const cntatoI = alunos.map(criarAlunos);
//     //     container.append(...cntatoI);
//     // }

//     // carregaAlunoIndividual()
'use strict'
// import { alunos } from "./alunos.js"


// const criarAlunos = (aluno) => {
//     const alunos = document.createElement('div')
//     alunos.classList.add('containerAlunos')

//     const containerAluno = document.createElement('div');
//     containerAluno.classList.add('containerAluno');

//       const img = document.createElement('img')
//      img.classList.add('imgAluno')
//      img.src = `./img/aluno.png`

//     const name = document.createElement('span')
//     name.classList.add('nameAluno')
//    name.textContent = aluno.nome
// alunos.append(name, img)
// alunos.append(containerAluno)


// return alunos
// }

// const carregarAlunos = () => {
//     const container = document.getElementById('alunos')
//     const cntatoI = alunos.map(criarAlunos)


//     container.replaceChildren(...cntatoI)
// }


// carregarAlunos()
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
  const main = document.getElementById('couses');
  const main2 = document.getElementById('studants');

  main.style.overflow = 'auto'
  main.style.height = '100%'

  main2.style.overflow = 'auto'
  main2.style.height = '100%'


  // const main3 = document.getElementById('terciario')
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
  console.log("-------------------------------------------")
  console.log(data)
  console.log("-------------------------------------------")
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
const container = document.getElementById('alunos');
const main2 = document.querySelector('.main2');
const student = document.getElementById('student');

// Function to handle click event on each containerAluno element
const handleClick = (event) => {
  const containerAluno = event.currentTarget;
  main2.style.display = 'none'; // hide main2
  student.style.display = 'flex'; // show student
};

// Add event listener to each containerAluno element
const addClickListeners = () => {
  const containerAlunos = container.querySelectorAll('.containerAlunos');
  containerAlunos.forEach((containerAluno) => {
    containerAluno.addEventListener('click', handleClick);
  });
};

// Function to create student container based on selected student
const createStudentContainer = (aluno) => {
  const container = document.createElement('div');
  container.classList.add('aluno-container');
  container.id = 'student';

  const alunoContainer = document.createElement('div');
  alunoContainer.classList.add('aluno');
  alunoContainer.id = 'alunoselecionado';
  const img = document.createElement('img');
  img.classList.add('aluno__image');
  img.src = aluno.image_aluno;
  const name = document.createElement('span');
  name.classList.add('aluno__name');
  name.textContent = aluno.nome_aluno;
  alunoContainer.append(img, name);

  const graphicContainer = document.createElement('div');
  graphicContainer.classList.add('graphic-container');

  // Code to create graphic__subject elements goes here

  container.append(alunoContainer, graphicContainer);

  return container;
};


carregarAlunos();
// const alunos = await getAlunos
// const opcoesStatus = document.querySelector('#div-opcoes');



// opcoesStatus.addEventListener('click', async event => {
//   const opcaoSelecionada = event.target.textContent.trim();
//   const alunos = await getAlunos();
//   console.log("estou chamando")
//   if (opcaoSelecionada === 'Finalizado') {
//     const alunosFinalizados = alunos.filter(aluno => status_aluno === 'Finalizado');
//     const container = document.getElementById('alunos');
//     container.innerHTML = '';
//     const alunosFiltrados = alunosFinalizados.map(criarAlunos);

//     container.append(...alunosFiltrados);
//   }
//   else if (opcaoSelecionada === 'Cursando') {
//     const alunosCursando = alunos.filter(aluno => aluno.status === 'Cursando');
//     const container = document.getElementById('alunos');
//     container.innerHTML = '';
//     const alunosFiltrados = alunosCursando.map(criarAlunos);

//     container.append(...alunosFiltrados);

//   } else if (opcaoSelecionada === 'Status') {
//     const alunosCursando = alunos
//     const container = document.getElementById('alunos');
//     container.innerHTML = '';
//     const alunosFiltrados = alunosCursando.map(criarAlunos);

//     container.append(...alunosFiltrados);
//   }
// });



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

getAlunos()


// -----------------------------------------------


// const criarAluno = (aluno) => {
//     const containerAlunos = document.createElement('div');
//     containerAlunos.classList.add('alunoselecionado');


//     const img = document.createElement('img')
//     img.classList.add('"aluno__image')
//     img.src = `./img/aluno.png`

//     const name = document.createElement('span')
//     name.classList.add('aluno__name')
//     name.textContent = "test"

//     containerAlunos.append(img, name);

//     return containerAlunos

// }

// const carregaAlunoIndividual = async () => {
//     const container = document.getElementById('student');
//     const cntatoI = alunos.map(criarAlunos);
//     container.append(...cntatoI);
// }

// carregaAlunoIndividual()


// const urlCurse= "http://localhost:8080/v1/lion-school/cursos"
//   async function getCursos() {
//     const response = await fetch(urlCurse)
//     // console.log(response)
//     const data = await response.json()
//     console.log("-------------------------------------------")
//     console.log(data)
//     console.log("-------------------------------------------")
// return data.cursos

//   }

//   getCursos()