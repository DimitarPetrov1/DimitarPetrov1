const portfolioItems = document.getElementById("portfolioItems");
const projects = [
  {
    cat: "ReactJS",
    name: "Pizza builder",
    img: "./images/pizza.jpg",
    link: "https://condescending-aryabhata-96601b.netlify.app",
  },
  {
    cat: "Javascript",
    name: "Weather forecast",
    img: "./images/weather.jpg",
    link: "https://nervous-brown-01e67e.netlify.app",
  },
  {
    cat: "ReactJS",
    name: "Weekly planner",
    img: "./images/planner.jpg",
    link: "https://sleepy-shirley-a1802c.netlify.app",
  },
  {
    cat: "ReactJS",
    name: "Gmail UI clone",
    img: "./images/gmail.jpg",
    link: "https://ui-aa65d.web.app",
  },
  // {
  //   cat: "Javascript",
  //   name: "project name",
  //   img: "https://i.picsum.photos/id/616/300/300.jpg?hmac=eQKtU2fvqBbWzcZLd1QWT51Nm-Mro6VnR7UkUvM3LZQ",
  // },
  // {
  //   cat: "Javascript",
  //   name: "project name",
  //   img: "https://i.picsum.photos/id/616/300/300.jpg?hmac=eQKtU2fvqBbWzcZLd1QWT51Nm-Mro6VnR7UkUvM3LZQ",
  // },
  // {
  //   cat: "Javascript",
  //   name: "project name",
  //   img: "https://i.picsum.photos/id/616/300/300.jpg?hmac=eQKtU2fvqBbWzcZLd1QWT51Nm-Mro6VnR7UkUvM3LZQ",
  // },
  // {
  //   cat: "React Native",
  //   name: "project name",
  //   img: "https://i.picsum.photos/id/616/300/300.jpg?hmac=eQKtU2fvqBbWzcZLd1QWT51Nm-Mro6VnR7UkUvM3LZQ",
  // },
  // {
  //   cat: "ReactJS",
  //   name: "project name",
  //   img: "https://i.picsum.photos/id/616/300/300.jpg?hmac=eQKtU2fvqBbWzcZLd1QWT51Nm-Mro6VnR7UkUvM3LZQ",
  // },
  // {
  //   cat: "ReactJS",
  //   name: "project name",
  //   img: "https://i.picsum.photos/id/616/300/300.jpg?hmac=eQKtU2fvqBbWzcZLd1QWT51Nm-Mro6VnR7UkUvM3LZQ",
  // },
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
