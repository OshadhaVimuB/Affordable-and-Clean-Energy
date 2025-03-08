document.addEventListener("DOMContentLoaded", function (){
    const applyButtons = document.querySelectorAll(".apply-btn");

    applyButtons.forEach(button=> {
        button.addEventListener("click", function () {
            alert("Thank you for applying! We will contact you soon.");

        })
    })
})

document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        star.addEventListener("click", function () {
            let value = this.getAttribute("data-value");

            stars.forEach(s => s.classList.remove("active"));
            for (let i = 0; i < value; i++) {
                stars[i].classList.add("active");
            }
        });
    });
});

function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

function filterPrograms(filterType) {
    let programs = document.querySelectorAll(".program-card");
    let reviewSection = document.getElementById("reviews");

    // Hide all programs first
    programs.forEach(program => {
        program.style.display = "none";
    });

    if (filterType === "newest") {
        let newestPrograms = document.querySelectorAll(".card.newest");
        newestPrograms.forEach(program => {
            program.closest(".program-card").style.display = "block";
        });

        // Show review section
        reviewSection.style.display = "block";
    } else if (filterType === "most-popular") {
        let popularPrograms = document.querySelectorAll(".card.most-popular");
        popularPrograms.forEach(program => {
            program.closest(".program-card").style.display = "block";
        });

      
    }
}

// Close dropdown if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.best-match-btn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};
