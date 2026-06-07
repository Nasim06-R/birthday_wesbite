function checkBirthday() {

    const today = new Date();

    const day = today.getDate();
    const month = today.getMonth() + 1;

    if (day === 22 && month === 8) {
        window.location.href = "surprise.html";
    } else {
        alert("🎁 This surprise is locked until 22 August ❤️");
    }
}

// 🎂 Birthday date (SAFE FORMAT)
const birthday = new Date(2026, 7, 22); // August = 7

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
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// =========================
// Gift Button
// =========================
const giftBtn = document.getElementById("giftBtn");

if (giftBtn) {
    giftBtn.addEventListener("click", () => {
        const box = document.getElementById("questionBox");
        if (box) box.style.display = "block";
    });
}

// =========================
// NO Button runaway effect (FIXED + MOBILE SAFE)
// =========================
const noBtn = document.getElementById("noBtn");

if (noBtn) {

    function moveNoBtn() {

        // 📱 MOBILE: no runaway (normal below YES)
        if (window.innerWidth <= 600) return;

        const maxX = window.innerWidth - 200;
        const maxY = window.innerHeight - 100;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = "absolute";
        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";
    }

    noBtn.addEventListener("mouseover", moveNoBtn);
    noBtn.addEventListener("click", moveNoBtn);
    noBtn.addEventListener("touchstart", function(e){
        e.preventDefault();
        moveNoBtn();
    });
}

// =========================
// YES Button final screen
// =========================
const yesBtn = document.getElementById("yesBtn");

if (yesBtn) {
    yesBtn.addEventListener("click", () => {

        document.body.innerHTML = `
            <div style="
                text-align:center;
                margin-top:150px;
                font-family: Arial;
            ">

                <h1>❤️ I Knew It ❤️</h1>

                <h2>
                    Happy Birthday My Best Friend, My Philosopher, My Guide 🎂
                </h2>

                <p>
                    Thank you for being the most beautiful part of my life ❤️
                </p>

            </div>
        `;
    });
}
