document.addEventListener("DOMContentLoaded", function() {
    // Анимация кнопки
    let btn = document.querySelector(".btn");
    btn.addEventListener("mouseover", function() {
        btn.style.backgroundColor = "#ff5733";
        btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseout", function() {
        btn.style.backgroundColor = "#007bff";
        btn.style.transform = "scale(1)";
    });

    // Раскрытие элементов
    let items = document.querySelectorAll(".feature h3, .news-item h3, .tip h3");
    items.forEach(item => {
        item.addEventListener("click", function() {
            let p = this.nextElementSibling;
            p.style.display = p.style.display === "block" ? "none" : "block";
            p.style.transition = "max-height 0.3s ease";
        });
    });

    // Анимация появления секций при скролле
    function revealSections() {
        let sections = document.querySelectorAll(".hero, .features, .news, .tips, .testimonials");
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

    // Ленивая загрузка изображений
    let images = document.querySelectorAll("img");
    images.forEach(img => {
        img.setAttribute("loading", "lazy");
    });
});
