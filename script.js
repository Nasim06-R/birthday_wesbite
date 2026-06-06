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

// Set birthday date
const birthday = new Date("22 August, 2026");

function updateCountdown() {

    const now = new Date();
    const diff = birthday - now;

    // Birthday reached
    if (diff <= 0) {
        document.getElementById("timer").innerHTML =
        "🎉 It's Your Birthday Today! 🎂";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML =
    `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;
}

// Start countdown immediately
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);
const giftBtn = document.getElementById("giftBtn");

if(giftBtn){

    giftBtn.addEventListener("click", () => {

        document.getElementById("questionBox").style.display =
        "block";

    });

}
const noBtn = document.getElementById("noBtn");

if(noBtn){

    noBtn.addEventListener("mouseover", () => {

        const maxX = window.innerWidth - 200;
        const maxY = window.innerHeight - 100;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = randomX + "px";
        noBtn.style.top = randomY + "px";

    });

}
const yesBtn = document.getElementById("yesBtn");

if(yesBtn){

    yesBtn.addEventListener("click", () => {

        document.body.innerHTML = `

        <div style="
        text-align:center;
        margin-top:150px;
        ">

            <h1>❤️ I Knew It ❤️</h1>

            <h2>
                Happy Birthday My Best Friend ,My Phillosopher, My Guide🎂
            </h2>

            <p>
                Thank you for being the most
                beautiful part of my life ❤️
            </p>

        </div>

        `;

    });

}
