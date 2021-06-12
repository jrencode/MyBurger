const projectContainer = document.querySelector('.project-container');

function currentWindow() {
  projectContainer.style.Width = window.innerWidth;
}

window.addEventListener('resize', currentWindow);