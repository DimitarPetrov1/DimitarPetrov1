const portfolioItems = document.getElementById("portfolioItems");
const iconsBg = document.getElementById("iconsBg");
const projects = [
  {
    cat: "ReactJS",
    name: "Pizza builder",
    img: "./images/pizza.jpg",
    link: "https://pizza-builder1.netlify.app",
  },
  {
    cat: "Javascript",
    name: "Weather forecast",
    img: "./images/weather.jpg",
    link: "https://digital-clock001.netlify.app",
  },
    {
    cat: "Javascript",
    name: "Digital clock",
    img: "./images/clock.jpg",
    link: "https://weather-forecaster-app1.netlify.app",
  },
  {
    cat: "ReactJS",
    name: "Weekly planner",
    img: "./images/planner.jpg",
    link: "https://weekly-planner-app.netlify.app",
  },
  {
    cat: "ReactJS",
    name: "Gmail UI clone",
    img: "./images/gmail.jpg",
    link: "https://gmial-ui-clone.netlify.app",
  },
];

const sortProjectsBtn = document.querySelectorAll(".sort-projects");

const sortProjects = (str) => {
  const items = document.querySelectorAll(".portfolio-item");

  items.forEach((item) => {
    item.style.transform = "scale(0)";
    setTimeout(() => {
      renderItems(str);
      item.style.transform = "scale(1)";
    }, 1000);
  });
};

const renderItems = (str) => {
  const arr = [];
  projects.forEach((item) => {
    if (item.cat === str) {
      arr.push(
        `<div class="animate__animated portfolio-item">
                    <a href=${item.link}>
                    <img src=${item.img} alt=${item.name} />
                    </a>
                    <p class='portfolio-item__name'>${item.name}</p>
                    <p class='portfolio-item__cat'>${item.cat}</p>
              </div>`
      );
    } else if (str === undefined || str === "All") {
      arr.push(
        `<div class="animate__animated portfolio-item">
                        <a href=${item.link}>
                        <img src=${item.img} alt=${item.name} />
                        </a>
                        <p class='portfolio-item__name'>${item.name}</p>
                        <p class='portfolio-item__cat'>${item.cat}</p>
                  </div>`
      );
    }
  });

  portfolioItems.innerHTML = arr;

  return arr;
};

portfolioItems.innerHTML = renderItems();

const goTo = (str) => {
  const P = document.querySelector(".portfolio");
  const C = document.querySelector(".contact");
  if (str === "portfolio") {
    P.scrollIntoView();
  } else if (str === "contact") {
    C.scrollIntoView();
  }
};

const addBg = () => {
  const template = () => {
    const arr = [];

    for (let i = 0; i < 40; i++) {
      arr.push(
        `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="bg-svg"
        >
          <circle cx="12" cy="5" r="3"></circle>
          <line x1="12" y1="22" x2="12" y2="8"></line>
          <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
        </svg>
        `,
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bg-svg"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
        `,
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bg-svg"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
        `,
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bg-svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        `,
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bg-svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        `,
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bg-svg"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
        `,
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bg-svg"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
        `
      );
    }

    return arr;
  };

  iconsBg.innerHTML = template();
};

addBg();
