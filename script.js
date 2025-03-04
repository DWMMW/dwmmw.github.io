document.addEventListener("DOMContentLoaded", function() {
    // Анимация кнопки
    let btn = document.querySelector(".btn");
    btn.addEventListener("mouseover", function() {
        btn.style.backgroundColor = "#ff5733";
    });
    btn.addEventListener("mouseout", function() {
        btn.style.backgroundColor = "#007bff";
    });

    // Раскрытие новостей и советов
    let items = document.querySelectorAll(".feature h3, .news-item h3, .tip h3");
    items.forEach(item => {
        item.addEventListener("click", function() {
            let p = this.nextElementSibling;
            if (p.style.display === "block") {
                p.style.display = "none";
            } else {
                p.style.display = "block";
            }
        });
    });

    // Анимация появления секций при скролле
    function revealSections() {
        let sections = document.querySelectorAll(".section");
        sections.forEach(section => {
            let sectionTop = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) {
                section.classList.add("animate");
            }
        });
    }
    window.addEventListener("scroll", revealSections);
    revealSections(); // Проверка при загрузке
});

// Добавим анимацию в CSS
let style = document.createElement('style');
style.innerHTML = `
    .section.animate {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .section {
        opacity: 0;
        transform: translateY(50px);
    }
`;
document.head.appendChild(style);
