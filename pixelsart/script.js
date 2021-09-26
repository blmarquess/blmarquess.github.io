function rmvSelect() {
  const atualSelect = document.querySelector('.selected');
  atualSelect.classList.remove('selected');
}

function addClsSelect(event) {
  const atualColor = event.target;
  rmvSelect();
  atualColor.classList.add('selected');
}

function selectColor() {
  const colors = document.querySelectorAll('.color');
  for (let ind = 0; ind < colors.length; ind += 1) {
    colors[ind].addEventListener('click', addClsSelect);
  }
}

function randomColor() {
  const corPalette = ['Crimson', 'Tomato', 'Khaki', 'Moccasin', 'teal', 'Lavender', 'Blue', 'red'];
  const redColors = document.querySelectorAll('.randomColor');
  for (let loop = 0; loop < redColors.length; loop += 1) {
    const corAtual = Math.floor(Math.random() * corPalette.length);
    redColors[loop].style.backgroundColor = `${corPalette[corAtual]}`;
  }
}

randomColor();

selectColor();

function changerColor(evt) {
  const pixelAtual = evt.target;
  const newColor = document.querySelector('.selected');
  pixelAtual.style.backgroundColor = newColor.style.backgroundColor;
}

function clearAll() {
  const pixelEraze = document.querySelectorAll('.pixel');
  for (let clin = 0; clin < pixelEraze.length; clin += 1) {
    pixelEraze[clin].style.backgroundColor = 'white';
  }
}

function makeBottonClear() {
  const locate = document.querySelector('#menis');
  const botCliear = document.createElement('button');
  botCliear.id = 'clear-board';
  botCliear.innerText = 'Limpar';
  locate.appendChild(botCliear);
  botCliear.addEventListener('click', clearAll);
}

makeBottonClear();

// montar a grid conforme valor passado para a função
function makeGrid(gSize) {
  const localGame = document.getElementById('pixel-board');
  const sizeGB = gSize;
  for (let line = 0; line < sizeGB; line += 1) {
    const gridLine = document.createElement('li');
    gridLine.className = 'ul-pixel-line';
    localGame.appendChild(gridLine);
    for (let bloc = 0; bloc < sizeGB; bloc += 1) {
      const box = document.createElement('li');
      box.className = 'pixel';
      box.addEventListener('click', changerColor);
      gridLine.appendChild(box);
    }
    const lin = document.createElement('br');
    gridLine.appendChild(lin);
  }
}

function rmvGrid() {
  const nodeSize = document.querySelector('#pixel-board');
  nodeSize.innerHTML = '';
}

function newGrid(num) {
  const size = num;
  rmvGrid();
  makeGrid(size);
}

function makeImputSize() {
  const loc = document.querySelector('#inputs');
  const impt = document.createElement('input');
  impt.id = 'board-size'; impt.className = 'imputes';
  impt.type = 'number'; impt.placeholder = 'Insira o tamanho da grid';
  impt.maxLength = '2'; impt.min = '1';
  impt.max = '50';
  loc.appendChild(impt);
}

function maxNum(numSize) {
  let num = numSize;
  if (num < 5) {
    num = 5;
    newGrid(num);
  }
  if (num > 50) {
    num = 50;
    newGrid(num);
  }
  newGrid(num);
}

function validImput(imputn) {
  let numVBalid = imputn;
  if (numVBalid === '') {
    alert('Board inválido!');
    return;
  }
  if (numVBalid < 5) {
    numVBalid = 5;
    return maxNum(numVBalid);
  }
  return maxNum(numVBalid);
}

function numImput() {
  const imptNUm = document.querySelector('#board-size').value;
  return validImput(imptNUm);
}

makeImputSize();

function makeBtnNumGrid() {
  const locateBtn = document.querySelector('#inputs');
  const btnVQV = document.createElement('button');
  btnVQV.id = 'generate-board';
  btnVQV.innerText = 'VQV';
  btnVQV.setAttribute('type', 'button', 'class', 'impurus');
  locateBtn.appendChild(btnVQV);
  btnVQV.addEventListener('click', numImput);
}

makeBtnNumGrid();

makeGrid(5);
