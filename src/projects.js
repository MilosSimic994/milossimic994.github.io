const projectSection = document.querySelector(".project-wrapper");

const projects = [
  {
    title: "frigo",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur perspiciatis, est corrupti mollitia asperiores, neque debitis saepe alias rerum corporis sit officiis deserunt blanditiis explicabo, provident eius libero. ",
    tool: ["WordPress", "Themify", "CMS"],
    img: "/images/frigo1.jpg",
    site: "https://frigoservis.rs/",
    code: "newWork.html",
  },
  {
    title: "Bambo",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur perspiciatis, est corrupti mollitia asperiores, neque debitis saepe alias rerum corporis sit officiis deserunt blanditiis explicabo, provident eius libero. ",
    tool: ["JavaScript", "HTML", "CSS"],
    img: "/images/bambo.jpg",
    site: "https://upbeat-shirley-7aed7d.netlify.app/",
    code: "https://github.com/MilosSimic994/crowdfunding-product-page",
  },
  {
    title: "Hemer Veleprodaja",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur perspiciatis, est corrupti mollitia asperiores, neque debitis saepe alias rerum corporis sit officiis deserunt blanditiis explicabo, provident eius libero. ",
    tool: ["JavaScript", "HTML", "CSS"],
    img: "/images/hemera.png",
    site: "http://vpkucnahemijahemera.rs/",
    code: "https://github.com/MilosSimic994/Hemera__New",
  },
  {
    title: "Manage Agency",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur perspiciatis, est corrupti mollitia asperiores, neque debitis saepe alias rerum corporis sit officiis deserunt blanditiis explicabo, provident eius libero. ",
    tool: ["SCSS", "HTML", "CSS"],
    img: "/images/manage.png",
    site: "https://goofy-minsky-7233db.netlify.app/",
    code: "https://github.com/MilosSimic994/LandingPage1",
  },
  {
    title: "Pizza Bar",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur perspiciatis, est corrupti mollitia asperiores, neque debitis saepe alias rerum corporis sit officiis deserunt blanditiis explicabo, provident eius libero. ",
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
      console.log("ana");
      e.target.classList.add("resize");
    });
    img.addEventListener("mouseout", (e) => {
      console.log("ana");
      e.target.classList.remove("resize");
    });
  });
}

resizeImg();
