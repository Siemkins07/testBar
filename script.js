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

const BarOnTop = true;


//functons

showToolbar = () => {
  if (BarOnTop) {
    toolbarAll.classList.add('top');
  } else {
    toolbarAll.classList.add('bottom');
  }
  return
}

hideToolbar = () => {
  if (toolbarAll.classList.contains('top')) {
    toolbarAll.classList.remove('top')
  } else {
    toolbarAll.classList.remove('bottom')
  };
}

//events

circleDiv.addEventListener('click', showToolbar)
toolbarCloseBtn.addEventListener('click', hideToolbar)