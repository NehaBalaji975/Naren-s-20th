document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll(".letter");
    const overlay = document.querySelector(".overlay");
    const letterText = document.querySelector(".letter-text");
    const closeBtn = document.querySelector(".close-btn");

    letters.forEach(letter => {
        letter.addEventListener("click", () => {
            const content = letter.getAttribute("data-content");
            letterText.textContent = content;
            overlay.classList.remove("hidden");
        });
    });

    closeBtn.addEventListener("click", () => {
        overlay.classList.add("hidden");
    });
});
