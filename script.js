//Create template HTML in JS
const wrapper = document.createElement('div');
wrapper.classList.add('wrapper')
document.body.appendChild(wrapper);

const toolbarAll = document.createElement('div')
toolbarAll.classList.add('toolbar-all');
wrapper.appendChild(toolbarAll);

const toolbarContent = document.createElement('div');
toolbarContent.classList.add('toolbar-content');
toolbarAll.appendChild(toolbarContent);

const description = document.createElement('div');
description.textContent = 'Add beautiful widgets to your website';
toolbarContent.appendChild(description);

const actionBtn = document.createElement('button');
actionBtn.textContent = 'Get widgets';
actionBtn.classList.add('action');
toolbarContent.appendChild(actionBtn);

const toolbarCloseBtn = document.createElement('button');
toolbarCloseBtn.textContent = 'X';
toolbarCloseBtn.classList.add('toolbar-close');
toolbarAll.appendChild(toolbarCloseBtn);

const circleDiv = document.createElement('div');
circleDiv.textContent = 'Show Bar';
circleDiv.classList.add('circle');
wrapper.appendChild(circleDiv);


//variables
const BarOnTop = false;


//functions
showToolbar = () => {
  toolbarAll.className = 'toolbar-all'
  if (BarOnTop) {
    toolbarAll.classList.add('top');
    toolbarAll.classList.add('show-bar-top');
  } else {
    toolbarAll.classList.add('bottom');
    toolbarAll.classList.add('show-bar-bottom');
  }
}

hideToolbar = () => {
  if (toolbarAll.classList.contains('top')) {
    toolbarAll.classList.add('hide-bar-top');
    toolbarAll.classList.remove('show-bar-top');
    setTimeout(() => toolbarAll.classList.remove('top'), 400);
  } else {
    toolbarAll.classList.add('hide-bar-bottom');
    toolbarAll.classList.remove('show-bar-bottom');
    setTimeout(() => toolbarAll.classList.remove('bottom'), 400);
  };
}


//events
circleDiv.addEventListener('click', showToolbar)
toolbarCloseBtn.addEventListener('click', hideToolbar)