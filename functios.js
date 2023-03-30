    'use strict'
    import {alunos} from "./alunos.js"


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
      
      const carregarAula = () => {
        const container = document.getElementById('classRoom');
        const cntatoI = alunos[0].curso.map(criarMateria);
        container.append(...cntatoI);
      }
      
      carregarAula();
      

    let idIncremental = 1; // variável para gerar um ID único para cada div de aluno
     const criarAlunos = (aluno) => {
        const containerAlunos = document.createElement('div');
        containerAlunos.classList.add('containerAlunos');
        
        const containerAluno = document.createElement('div');
        containerAluno.classList.add('containerAluno');

        // containerAluno.id = 'containerAluno'

        containerAluno.id = `containerAluno-${idIncremental}`; // utiliza a variável incremental para gerar um ID único

        if(aluno.status  === 'Finalizado') {containerAluno.style.backgroundColor = '#3347B0'}
        else{  containerAluno.style.backgroundColor = ' #E5B657'}

       

         
    
        const img = document.createElement('img')
        img.classList.add('imgAluno')
        img.src = `./img/aluno.png`
    
        const name = document.createElement('span')
        name.classList.add('nameAluno')
        name.textContent = aluno.nome
    
        containerAluno.append(img, name);
        containerAlunos.append(containerAluno);
        
 idIncremental++; // incrementa a variável incremental para gerar um novo ID único para a próxima div de aluno

        return containerAlunos;
    }
    
    const carregarAlunos = () => {
        const container = document.getElementById('alunos');
        const cntatoI = alunos.map(criarAlunos);
        container.append(...cntatoI);
    }
    
    carregarAlunos();

    // -----------------------------------------------


    const aluno = () => {
        const containerAlunos = document.createElement('div');
        containerAlunos.classList.add('alunoselecionado');
       

        const img = document.createElement('img')
        img.classList.add('imgalunoescolhido')
        img.src = `./img/aluno.png`

        const name = document.createElement('span')
        name.classList.add('namealunoselecionado')
        name.textContent = aluno.nome

        containerAluno.append(img, name);
        
    }

    const carregaAlunoIndividual = () => {
        const container = document.getElementById('alunoselecionado');
        const cntatoI = alunos.map(criarAlunos);
        container.append(...cntatoI);
    }

    carregaAlunoIndividual()