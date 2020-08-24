const projects = document.querySelector('.projects__items');
const prjTitle = document.querySelector('.projects__title');

prjTitle.addEventListener('mouseover', () =>{
    prjTitle.style.display = 'none';
    projects.classList.add('show')
    const myWork = document.querySelector('.projects__work').classList.add('show')
})


const colorSwitch = () =>{
    prjTitle.classList.toggle('switch-color')
}
setInterval(colorSwitch, 1000)