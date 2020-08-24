
const skills = document.querySelector('.skills__slide h1');

const skillsArray = ['CSS','HTML','js','SASS','npm','git', 'JSON','bem']

let counter = 0;

const slider = () =>{
        counter++
        
        if(counter > skillsArray.length -1) {
            counter  = 0
        }
        skills.textContent = skillsArray[counter]
    
}
setInterval(slider, 3000)