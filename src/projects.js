const projectSection = document.querySelector(".project-wrapper");

const projects = [
  {
    title: "frigo",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur perspiciatis, est corrupti mollitia asperiores, neque debitis saepe alias rerum corporis sit officiis deserunt blanditiis explicabo, provident eius libero. Numquam, atque!",
    tool: ["WordPress", "HTML", "CSS"],
    img: "/images/frigo1.jpg",
    site: "https://frigoservis.rs/",
    code: "newWork.html",
  },
  {
    title: "Bambo",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur perspiciatis, est corrupti mollitia asperiores, neque debitis saepe alias rerum corporis sit officiis deserunt blanditiis explicabo, provident eius libero. Numquam, atque!",
    tool: ["WordPress", "HTML", "CSS"],
    img: "/images/bambo.jpg",
  },
  {
    title: "Hemer Veleprodaja",
    desc:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur perspiciatis, est corrupti mollitia asperiores, neque debitis saepe alias rerum corporis sit officiis deserunt blanditiis explicabo, provident eius libero. Numquam, atque!",
    tool: ["WordPress", "HTML", "CSS"],
    img: "/images/hemera.png",
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
