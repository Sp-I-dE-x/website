// ==============================
// Premium Landing Page Effects
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".channel-btn");

    // Staggered appearance
    buttons.forEach((button, index) => {

        button.style.animationDelay = `${index * 0.15}s`;

    });

    // Ripple Effect
    buttons.forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            const rect = this.getBoundingClientRect();

            const size = Math.max(rect.width, rect.height);

            ripple.style.width = ripple.style.height = `${size}px`;

            ripple.style.left = `${e.clientX - rect.left - size / 2}px`;

            ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

            ripple.classList.add("ripple");

            this.appendChild(ripple);

            ripple.addEventListener("animationend", () => {

                ripple.remove();

            });

        });

    });

    // Floating Hover Effect
    buttons.forEach(button => {

        button.addEventListener("mousemove", e => {

            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 8;
            const rotateX = ((rect.height / 2 - y) / rect.height) * 8;

            button.style.transform = `
                perspective(800px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-6px)
                scale(1.02)
            `;

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

});

// ==============================
// Background Parallax
// ==============================

const bg = document.querySelector(".background");

window.addEventListener("mousemove", (e) => {

    if (!bg) return;

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    bg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;

});

// ==============================
// Ripple CSS (Injected)
// ==============================

const style = document.createElement("style");

style.textContent = `

.channel-btn{

    overflow:hidden;
    transform-style:preserve-3d;

}

.ripple{

    position:absolute;

    border-radius:50%;

    transform:scale(0);

    background:rgba(255,255,255,.25);

    pointer-events:none;

    animation:ripple .65s ease-out;

}

@keyframes ripple{

    to{

        transform:scale(4);

        opacity:0;

    }

}

`;

document.head.appendChild(style);
