const projectSection = document.querySelector(".project-wrapper");

const projects = [
  {
    title: "Todo App",
    desc:
      "Application for creating a todo list in light and dark versions, also allows you to view completed tasks, those that are waiting, also allows you to delete and create a new list.",
    tool: ["JavaScript", "HTML", "SCSS"],
    img: "/images/todo.jpg",
    site: "https://serene-kare-2096e9.netlify.app/",
    code: "https://github.com/MilosSimic994/to-do-app",
  },
  {
    title: "frigo",
    desc:
      "The client had a Joomla website, which needed a complete “makeover”. My job was to redesign it, add new content, and migrate it to WordPress CMS. The new website was built with Themify. ",
    tool: ["WordPress", "Themify", "CMS"],
    img: "/images/frigo1.jpg",
    site: "https://frigoservis.rs/",
    code: "newWork.html",
  },
  {
    title: "Bamboo",
    desc:
      "Mastercraft bamboo monitor riser is a landing page for a fictitious client that offers a choice of multiple products, shows the number of available products and the ability to order. ",
    tool: ["JavaScript", "HTML", "CSS"],
    img: "/images/bambo.jpg",
    site: "https://upbeat-shirley-7aed7d.netlify.app/",
    code: "https://github.com/MilosSimic994/crowdfunding-product-page",
  },
  {
    title: "Hemera Veleprodaja",
    desc:
      "Hemera is a wholesale of cosmetics, the purpose of the website is to show part of the offer as well as the entire price list for existing customers with secured access. ",
    tool: ["JavaScript", "HTML", "CSS"],
    img: "/images/hemera.png",
    site: "http://vpkucnahemijahemera.rs/",
    code: "https://github.com/MilosSimic994/Hemera__New",
  },
  {
    title: "Manage Agency",
    desc:
      "Manage Agency is a landing page for a fictitious client with a nice slider to display testimonials. ",
    tool: ["SCSS", "HTML", "CSS"],
    img: "/images/manage.png",
    site: "https://goofy-minsky-7233db.netlify.app/",
    code: "https://github.com/MilosSimic994/LandingPage1",
  },
  {
    title: "Pizza Bar",
    desc:
      "Pizza bar is a landing page with an interesting look, with a lot of overlapping elements, this project was made for a fictitious client  ",
    tool: ["SCSS", "HTML", "CSS"],
    img: "/images/whats-new-pizza.jpg",
    site: "https://zealous-visvesvaraya-beea78.netlify.app/",
    code: "https://github.com/MilosSimic994/pizza-bar",
  },
];

function renderProjects(projects) {
  let displayProjects = projects.map((project) => {
    return `
      <article class="project">
        <div class="project__image">
            <img src="${project.img}" alt="">
        </div>
        <div class="project__description">
            <h2 class="project__description--title">${project.title}</h2>
            <p>${project.desc}</p>
            <ul role="list" class="project__description--tools">
               <li>${project.tool[0]}</li>
               <li>${project.tool[1]}</li>
               <li>${project.tool[2]}</li>
            </ul>
            <div class="project__description--btn">
                <a href="${project.site}" target="_blank">View Demo</a>
                <a href="${project.code}"  target="_blank">View Code</a>
            </div> 
        </div>
      </article>
        `;
  });

  displayProjects = displayProjects.join("");
  projectSection.innerHTML += displayProjects;
}

renderProjects(projects);

const imgs = projectSection.querySelectorAll("img");
console.log(imgs);

function resizeImg() {
  imgs.forEach((img) => {
    img.addEventListener("mouseover", (e) => {
      e.target.classList.add("resize");
    });
    img.addEventListener("mouseout", (e) => {
      e.target.classList.remove("resize");
    });
  });
}

resizeImg();
