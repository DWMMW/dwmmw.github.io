document.addEventListener("DOMContentLoaded", function() {
    let btn = document.querySelector(".btn");
    btn.addEventListener("mouseover", function() {
        btn.style.backgroundColor = "#ff5733";
    });
    btn.addEventListener("mouseout", function() {
        btn.style.backgroundColor = "#007bff";
    });

    let newsItems = document.querySelectorAll(".item h3");
    newsItems.forEach(item => {
        item.addEventListener("click", function() {
            alert("Вы выбрали: " + item.textContent);
        });
    });
});
