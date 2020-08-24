const navLinks = document.querySelectorAll('.nav__links');
const navList = document.querySelector('.list')
const toggleMenu = document.querySelector('.nav__hamb');
const navHolder = document.querySelector('.nav')








navLinks.forEach((link) => {
    link.addEventListener('mouseover', (e) => {
        e.currentTarget.innerHTML = link.dataset.txt;
    })


    link.addEventListener('mouseout', (e) => {
        e.currentTarget.innerHTML = ''
        let img = document.createElement('img')
        img.src = `/images/${link.dataset.txt}.png`

        link.appendChild(img)

    })
})


toggleMenu.addEventListener('click', () => {
    const height = navHolder.getBoundingClientRect().height;
    console.log(height);
    navList.style.top = `${height}px`
    navList.classList.toggle('toggle-hamb')
})

