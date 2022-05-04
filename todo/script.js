// my codigs =)
function salvar() {
  const nodeDB = document.querySelector('ul');
  const localDB = nodeDB.innerHTML;
  localStorage.setItem('listDB', localDB);
}
// selecionar tarefa
function selectTask(event) {
  const sell = document.querySelectorAll('li');
  sell.forEach((iten) => {
    if (iten.classList.contains('selected')) {
      iten.classList.remove('selected');
      iten.classList.remove('animate__fadeInDown');
      iten.classList.remove('animate__bounceIn');
    }
  });
  event.target.classList.add('selected');
  event.target.classList.add('animate__bounceIn');
  salvar();
}
// marcar concluido
function taskComplet(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
    event.target.classList.remove('animate__bounceIn');
    event.target.classList.remove('animate__fadeInDown');
  } else {
    event.target.classList.add('completed');
    event.target.classList.add('animate__bounceIn');
  }
  salvar();
}

function binExec() {

}

// adicionar observers para os itens da lista
function observers() {
  const bloco = document.querySelectorAll('li');
  bloco.forEach((add) => {
    add.addEventListener('click', selectTask);
    add.addEventListener('dblclick', taskComplet);
  });
};

// puxar base existente
function loadDB() {
  const localDB = localStorage.getItem('listDB');
  const node = document.querySelector('ul');
  node.innerHTML = localDB;
  observers();
}

const pre = '<label class="itenList">';
const suf = '</label><i class="bi bi-trash-fill" id="remover-selecionado"></i>';

// triar nova tarefa
function newTesc() {
  const imputNode = document.querySelector('#texto-tarefa');
  const location = document.querySelector('#lista-tarefas');
  if (imputNode.value.length < 1) {
    alert('Por gentileza digite algo no campo nova tarefa');
    return imputNode.focus();
  }
  const newTsc = document.createElement('li');
  newTsc.innerHTML = `${pre}${imputNode.value}$  ${suf}`;
  newTsc.classList = 'fila animate__animated animate__fadeInDown';
  newTsc.style.setProperty('--animate-delay', '2s');
  newTsc.style.setProperty('--animate-duration', '2s');
  location.appendChild(newTsc);
  newTsc.addEventListener('click', selectTask);
  newTsc.addEventListener('dblclick', taskComplet);
  imputNode.value = ''; imputNode.focus();
  salvar();
}

const btnCriar = document.querySelector('#criar-tarefa');
btnCriar.addEventListener('click', () => {
  const test = document.querySelector('#texto-tarefa');
  if (test === 'undefined') {
    return alert('Insira uma tarefa por gentileza!');
  }
  newTesc();
});
// botoes para apagar todas as tarefas
const btnClrAll = document.querySelector('#apaga-tudo');
btnClrAll.addEventListener('click', () => {
  const allLi = document.querySelector('ul');
  allLi.innerHTML = ''; salvar();
});
// apagar so selecionados
const btnClrSelected = document.querySelectorAll('#remover-selecionado');
btnClrSelected.addEventListener('click', () => {
  const grup = document.querySelectorAll('li');
  grup.forEach((alvo) => {
    if (alvo.classList.contains('selected')) {
      alvo.classList = 'fila animate__animated animate__flash';
      alvo.style.setProperty('--animate-delay', '2s');
      alvo.style.setProperty('--animate-duration', '2s');
      setTimeout(() => {
        alvo.remove();
      }, 1500);
    }
  });
  salvar();
});
// apagar com bin-icon
// function btnBIn() {
//   const bins = querySelectorAll('.bi-trash-fill');
//   bins.forEach((e) => e.addEventListener('click', (e) => e.remove(e)))
// }
// btnBIn();

// apagar concluidos
const btnClrDone = document.querySelector('#remover-finalizados');
btnClrDone.addEventListener('click', () => {
  const list = document.querySelectorAll('li');
  list.forEach((done) => {
    if (done.classList.contains('completed')) {
      done.classList = 'fila animate__animated animate__flash';
      done.style.setProperty('--animate-delay', '2s');
      done.style.setProperty('--animate-duration', '2s');
      setTimeout(() => {
        done.remove();
      }, 1500);
    }
  });
  salvar();
});
// salva tarefas
const btnSalve = document.querySelector('#salvar-tarefas');
btnSalve.addEventListener('click', salvar);
// mover itens

// move iten up
const btnUp = document.querySelector('#mover-cima');
btnUp.addEventListener('click', () => {
  const list = document.querySelector('ul');
  const nodeIten = document.querySelector('.selected');
  if (nodeIten !== null) {
    const previlNode = nodeIten.previousElementSibling;
    if (previlNode !== null) {
      list.insertBefore(nodeIten, previlNode);
    }
  }
});
// move iten down
const btnDown = document.querySelector('#mover-baixo');
btnDown.addEventListener('click', () => {
  const list = document.querySelector('ul');
  const nodeIten = document.querySelector('.selected');
  if (nodeIten !== null) {
    const previlNode = nodeIten.nextElementSibling;
    if (previlNode !== null) {
      list.insertBefore(previlNode, nodeIten);
    }
  }
});

const input = document.querySelector('#texto-tarefa');
input.addEventListener('keyup', (event) => { if (event.keyCode === 13){newTesc();} } );

// iniciar com base caso ja tenha
  window.onload = () => loadDB();
