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

// typing effect
const words = ["Web Developer", "Software Engineer"];
    let wordIndex = 0;
    let charIndex = 0;
    let typing = true;
    const typewriterElement = document.getElementById("typewriter");

    function typeEffect() {
        const currentWord = words[wordIndex];
        if (typing) {
            charIndex++;
            if (charIndex === currentWord.length + 1) {
                typing = false;
                setTimeout(typeEffect, 1000); // Pause before deleting
                return;
            }
        } else {
            charIndex--;
            if (charIndex === -1) {
                typing = true;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeEffect, 500); // Pause before typing the next word
                return;
            }
        }

        typewriterElement.textContent = currentWord.substring(0, charIndex);
        setTimeout(typeEffect, typing ? 200 : 100); // Typing speed / Deleting speed
    }
typeEffect();

// toggle button effect
// document.getElementById('toggleSwitch').addEventListener('change', function() {
//     var toggleBg = document.getElementById('toggleBg');
//     var toggleKnob = document.getElementById('toggleKnob');

//     if (this.checked) {
//         toggleBg.classList.add('toggle-bg-checked');
//         toggleKnob.classList.add('toggle-knob-checked');
//     } else {
//         toggleBg.classList.remove('toggle-bg-checked');
//         toggleKnob.classList.remove('toggle-knob-checked');
//     }
// });


// paragraph insert

// const edu1 = `
//   During my first and second year, I acquired solid practical skills and theoretical knowledge in computer science.
//    Additionally, I developed expertise in full stack development, <b>Database Management</b>, 
//    <b>UI/UX Design</b>, <b>Media Design and Production</b>, and  <b>Sound Design</b>.
//     In my final year, I chose more technical modules such as <b>Advanced Web Programming</b> and
//      <b>Game Development</b>, as well as data analysis modules including <b>Neural Networks and Deep Learning
//      </b> and <b>Data Mining</b>.
// `;
// document.getElementById('edu1').innerHTML = edu1;

// experience fade in effect
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }, {
        threshold: 0.5 // Adjust this value based on when you want the fade effect to trigger
    });

    document.querySelectorAll('.fade').forEach(block => {
        observer.observe(block);
    });
});

// handles projects redirection
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.proj-filter div[data-category]');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const projectName = this.getAttribute('data-project');
            console.log("Redirecting to project:", projectName); // Debug log
            window.location.href = `projects.html#${projectName}`;
        });
    });
});
