document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       SAFE CONFETTI
    ===================================== */

    function safeConfetti(options) {
        try {
            if (typeof confetti === "function") {
                confetti(options);
            }
        } catch (e) {
            console.log(e);
        }
    }

    /* =====================================
       PARTICLES
    ===================================== */

    function createParticles() {

        const container =
            document.getElementById("particles");

        if (!container) return;

        for (let i = 0; i < 60; i++) {

            const particle =
                document.createElement("div");

            particle.classList.add("particle");

            const size =
                Math.random() * 6 + 2;

            particle.style.width =
                size + "px";

            particle.style.height =
                size + "px";

            particle.style.left =
                Math.random() * 100 + "vw";

            particle.style.animationDuration =
                Math.random() * 10 + 8 + "s";

            particle.style.animationDelay =
                Math.random() * 5 + "s";

            container.appendChild(particle);
        }
    }

    createParticles();

    /* =====================================
       FLOATING HEARTS
    ===================================== */

    function createHeart() {

        const container =
            document.getElementById(
                "hearts-container"
            );

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            Math.random() * 20 + 20 + "px";

        heart.style.animationDuration =
            Math.random() * 8 + 6 + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 14000);
    }

    setInterval(createHeart, 500);

    /* =====================================
       OPENING CONFETTI
    ===================================== */

    const openingDuration = 3000;

    const openingEnd =
        Date.now() + openingDuration;

    (function frame() {

        safeConfetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });

        safeConfetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < openingEnd) {
            requestAnimationFrame(frame);
        }

    })();

    /* =====================================
       MUSIC PLAYER
    ===================================== */

    const music =
        document.getElementById(
            "birthdayMusic"
        );

    const musicBtn =
        document.getElementById(
            "musicBtn"
        );

    let musicPlaying = false;

    musicBtn.addEventListener("click", () => {

        if (!musicPlaying) {

            music.play();

            musicBtn.innerHTML =
                "⏸ Pause Music";

            musicPlaying = true;

        } else {

            music.pause();

            musicBtn.innerHTML =
                "🎵 Play Music";

            musicPlaying = false;
        }
    });

    /* =====================================
       BIRTHDAY LETTER
    ===================================== */

    const birthdayMessage = `



`;

    const typingText =
        document.getElementById(
            "typingText"
        );

    let typingStarted = false;

    function startTypingEffect() {

        if (typingStarted) return;

        typingStarted = true;

        let i = 0;

        function typeWriter() {

            if (
                i <
                birthdayMessage.length
            ) {

                typingText.innerHTML +=
                    birthdayMessage.charAt(i);

                i++;

                setTimeout(
                    typeWriter,
                    35
                );
            }
        }

        typeWriter();
    }

    /* =====================================
       START BUTTON
    ===================================== */

    const startBtn =
        document.getElementById(
            "startBtn"
        );

    const messageSection =
        document.getElementById(
            "messageSection"
        );

    startBtn.addEventListener("click", () => {

        safeConfetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 }
        });

        messageSection.scrollIntoView({
            behavior: "smooth"
        });

        startTypingEffect();
    });

    /* =====================================
       SCROLL REVEAL
    ===================================== */

    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            if (
                                entry.target.id ===
                                "messageSection"
                            ) {
                                startTypingEffect();
                            }
                        }
                    }
                );

            },
            {
                threshold: 0.15
            }
        );

    document
    .querySelectorAll(".hidden")
    .forEach((section) => {

        if (
            section.id !== "finalCelebration" &&
            section.id !== "giftMessage"
        ) {
            observer.observe(section);
        }

    });

    /* =====================================
       COUNTDOWN TIMER
    ===================================== */

    const targetDate =
    new Date("2027-06-04T00:00:00");

    function updateCountdown() {

        const now = new Date();

        const difference =
            targetDate - now;

        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );

        const hours =
            Math.floor(
                (
                    difference %
                    (1000 *
                        60 *
                        60 *
                        24)
                ) /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (
                    difference %
                    (1000 *
                        60 *
                        60)
                ) /
                (1000 * 60)
            );

        const seconds =
            Math.floor(
                (
                    difference %
                    (1000 * 60)
                ) / 1000
            );

        document.getElementById(
            "days"
        ).textContent = days;

        document.getElementById(
            "hours"
        ).textContent = hours;

        document.getElementById(
            "minutes"
        ).textContent = minutes;

        document.getElementById(
            "seconds"
        ).textContent = seconds;
    }

    setInterval(
        updateCountdown,
        1000
    );

    updateCountdown();

    /* =====================================
       GALLERY LIGHTBOX
    ===================================== */

    const galleryImages =
        document.querySelectorAll(
            ".gallery-item img"
        );

    const lightbox =
        document.getElementById(
            "lightbox"
        );

    const lightboxImg =
        document.getElementById(
            "lightboxImg"
        );

    const closeLightbox =
        document.getElementById(
            "closeLightbox"
        );

    galleryImages.forEach(
        (img) => {

            img.addEventListener(
                "click",
                () => {

                    lightbox.style.display =
                        "flex";

                    lightboxImg.src =
                        img.src;
                }
            );

        }
    );

    closeLightbox.addEventListener(
        "click",
        () => {

            lightbox.style.display =
                "none";

        }
    );

    lightbox.addEventListener(
        "click",
        (e) => {

            if (
                e.target === lightbox
            ) {

                lightbox.style.display =
                    "none";
            }
        }
    );

    /* =====================================
       QUIZ
    ===================================== */

    window.checkAnswer =
        function (
            isCorrect
        ) {

            const result =
                document.getElementById(
                    "quizResult"
                );

            if (
                isCorrect
            ) {

                result.innerHTML =
                    "Correct ❤️ You know the answer!";

                safeConfetti({
                    particleCount: 120,
                    spread: 80
                });

            } else {

                result.innerHTML =
                    "Not quite 😅 Try again!";
            }
        };

    /* =====================================
       GIFT SURPRISE
    ===================================== */

    const giftBox =
        document.getElementById(
            "giftBox"
        );

    const giftMessage =
        document.getElementById(
            "giftMessage"
        );

    const finalCelebration =
        document.getElementById(
            "finalCelebration"
        );

    let giftOpened = false;

    giftBox.addEventListener(
        "click",
        () => {

            if (
                giftOpened
            ) return;

            giftOpened = true;

            giftBox.style.display =
                "none";

            giftMessage.classList.remove(
                "hidden"
            );

            giftMessage.classList.add(
                "visible"
            );

            const duration =
                5000;

            const animationEnd =
                Date.now() +
                duration;

            const defaults = {
                startVelocity: 30,
                spread: 360,
                ticks: 60
            };

            function randomInRange(
                min,
                max
            ) {
                return (
                    Math.random() *
                        (max - min) +
                    min
                );
            }

            const fireworks =
                setInterval(
                    () => {

                        const timeLeft =
                            animationEnd -
                            Date.now();

                        if (
                            timeLeft <=
                            0
                        ) {

                            clearInterval(
                                fireworks
                            );

                            return;
                        }

                        const particleCount =
                            50 *
                            (
                                timeLeft /
                                duration
                            );

                        safeConfetti({
                            ...defaults,
                            particleCount,
                            origin: {
                                x:
                                    randomInRange(
                                        0.1,
                                        0.3
                                    ),
                                y:
                                    Math.random() -
                                    0.2
                            }
                        });

                        safeConfetti({
                            ...defaults,
                            particleCount,
                            origin: {
                                x:
                                    randomInRange(
                                        0.7,
                                        0.9
                                    ),
                                y:
                                    Math.random() -
                                    0.2
                            }
                        });

                    },
                    250
                );

            setTimeout(
                () => {

                    finalCelebration.classList.remove(
                        "hidden"
                    );

                    finalCelebration.classList.add(
                        "visible"
                    );

                    setInterval(
                        () => {

                            safeConfetti({
                                particleCount: 60,
                                spread: 120,
                                origin: {
                                    y: 0
                                }
                            });

                        },
                        2000
                    );

                },
                4000
            );
        }
    );

  window.showLoveMessage = function(message, image){

    const box = document.getElementById("loveMessageBox");

    box.innerHTML = `
        <img src="${image}" class="love-photo">
        <p>${message}</p>
    `;

    safeConfetti({
        particleCount:50,
        spread:70,
        origin:{ y:0.6 }
    });
};
/* =====================================
   TIMELINE MEMORY GALLERY
===================================== */

window.openMemoryGallery = function(images){

    const modal =
        document.getElementById("memoryModal");

    const gallery =
        document.getElementById("memoryGallery");

    gallery.innerHTML = "";

    images.forEach((imgPath)=>{

        const img =
            document.createElement("img");

        img.src = imgPath;

        gallery.appendChild(img);

    });

    modal.style.display = "flex";
};

const closeMemoryModal =
    document.getElementById("closeMemoryModal");

closeMemoryModal.addEventListener(
    "click",
    () => {

        document.getElementById(
            "memoryModal"
        ).style.display = "none";

    }
);

document.getElementById(
    "memoryModal"
).addEventListener(
    "click",
    (e)=>{

        if(e.target.id === "memoryModal"){

            document.getElementById(
                "memoryModal"
            ).style.display = "none";

        }

    }
);
});