// Mobile nav layout
const btn = document.querySelector("button.mobile-menu-button");
        const menu = document.querySelector(".mobile-menu");

        btn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
        });

// projects filter
const proj_btns = document.querySelectorAll("button.filter-btn");

proj_btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");

        const projects = document.querySelectorAll(".proj-filter > div");

        // fade-in animation for the grid
        const proj_grid = document.querySelector(".proj-filter")
        proj_grid.classList.add("fade-in-quick")
        setTimeout(() => {
            proj_grid.classList.remove("fade-in-quick");
        }, 500);

        projects.forEach(project => {
            if (filter === "all" || project.getAttribute("data-category") === filter) {
                project.classList.remove("hidden");
            } else {
                project.classList.add("hidden");
            }
        });

        // update btn style
        proj_btns.forEach(button => {
            button.classList.remove("bg-blue-400", "text-white");
            button.classList.add("bg-gray-200", "text-gray-800");
        });

        btn.classList.remove("bg-gray-200", "text-gray-800");
        btn.classList.add("bg-blue-400", "text-white");
    });
});

// paragraph insert
const edu1 = `
  During my first and second year, I acquired solid practical skills and theoretical knowledge in computer science.
   Additionally, I developed expertise in full stack development, <b>Database Management</b>, 
   <b>UI/UX Design</b>, <b>Media Design and Production</b>, and  <b>Sound Design</b>.
    In my final year, I chose more technical modules such as <b>Advanced Web Programming</b> and
     <b>Game Development</b>, as well as data analysis modules including <b>Neural Networks and Deep Learning
     </b> and <b>Data Mining</b>.
`;
document.getElementById('edu1').innerHTML = edu1;
