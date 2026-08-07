function checkBirthday() {
    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 1;

    // ✅ TESTING KE LIYE 7 AUGUST
    // Final me isko 22 aur 8 kar dena
    if (day === 7 && month === 8) {
        window.location.href = "surprise.html";
    } else {
        alert("🎁 This surprise is locked until 22 August ❤️");
    }
}

// ====================================
// 🎂 Birthday Countdown
// ====================================

const birthday = new Date(2026, 7, 22); // August 22, 2026

function updateCountdown() {
    const timer = document.getElementById("timer");
    if (!timer) return;

    const now = new Date();
    const diff = birthday - now;

    if (diff <= 0) {
        timer.innerHTML = "🎉 It's Your Birthday Today! 🎂";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timer.innerHTML =
        ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ====================================
// 🎈 Balloons Animation
// ====================================

function createBalloons() {
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement("div");

        balloon.innerHTML = "🎈";
        balloon.style.position = "fixed";
        balloon.style.left = Math.random() * window.innerWidth + "px";
        balloon.style.bottom = "-50px";
        balloon.style.fontSize = "40px";
        balloon.style.zIndex = "9999";
        balloon.style.pointerEvents = "none";

        document.body.appendChild(balloon);

        let position = -50;

        const fly = setInterval(() => {
            position += 5;
            balloon.style.bottom = position + "px";

            if (position > window.innerHeight + 100) {
                clearInterval(fly);
                balloon.remove();
            }
        }, 20);
    }
}

// ====================================
// 🎁 Gift Button
// ====================================

const giftBtn = document.getElementById("giftBtn");

if (giftBtn) {
    giftBtn.addEventListener("click", () => {
        const box = document.getElementById("questionBox");

        if (box) {
            box.style.display = "block";
        }

        createBalloons();
    });
}

// ====================================
// 😜 Nothing Nothing Button Runaway
// ====================================

const noBtn = document.getElementById("noBtn");

if (noBtn) {
    function moveNoBtn() {
        const maxX = window.innerWidth - 180;
        const maxY = window.innerHeight - 80;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = "fixed";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
        noBtn.style.zIndex = "9999";
    }

    // Desktop hover
    noBtn.addEventListener("mouseover", moveNoBtn);

    // Desktop click
    noBtn.addEventListener("click", moveNoBtn);

    // Mobile touch
    noBtn.addEventListener("touchstart", function (e) {
        e.preventDefault();
        moveNoBtn();
    });
}

// ====================================
// ❤️ Something Something Button
// ====================================

const yesBtn = document.getElementById("yesBtn");

if (yesBtn) {
    yesBtn.addEventListener("click", () => {
        createBalloons();

        document.body.innerHTML = `
            <div style="
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
                padding: 20px;
                font-family: Arial, sans-serif;
                background: linear-gradient(135deg, #ffdde1, #ee9ca7);
                color: #fff;
            ">

                <h1 style="font-size: 42px;">❤️ I Knew It ❤️</h1>

                <h2 style="max-width: 700px;">
                    Happy Birthday My Best Friend,
                    My Philosopher, My Guide 🎂
                </h2>

                <p style="font-size: 20px; max-width: 650px; line-height: 1.6;">
                    Thank you for being the most beautiful part of my life ❤️
                    <br><br>
                    You are my happiness, my support,
                    and the reason behind so many smiles 😊
                </p>

                <h2 style="margin-top: 25px;">
                    🎉 Happy Birthday Once Again ❤️🎂
                </h2>

            </div>
        `;

        createBalloons();
    });
}
