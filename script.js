/* =====================================================
   🎈 BALLOONS
===================================================== */

function createBalloons() {

    for (let i = 0; i < 15; i++) {

        const b = document.createElement("div");

        b.innerHTML = "🎈";

        b.style.position = "fixed";
        b.style.left = Math.random() * 100 + "vw";
        b.style.bottom = "-60px";
        b.style.fontSize = "40px";
        b.style.pointerEvents = "none";
        b.style.zIndex = "99999";

        document.body.appendChild(b);

        let y = -60;

        const fly = setInterval(() => {

            y += 4;

            b.style.bottom = y + "px";

            if (y > window.innerHeight + 100) {

                clearInterval(fly);
                b.remove();

            }

        }, 20);
    }
}


/* =====================================================
   ❤️ OPEN MY HEART
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const giftBtn = document.getElementById("giftBtn");

    if (giftBtn) {

        giftBtn.addEventListener("click", function () {

            const questionBox =
                document.getElementById("questionBox");

            if (questionBox) {
                questionBox.style.display = "flex";
            }

            createBalloons();

        });
    }


    /* =================================================
       😜 NOTHING NOTHING
       DESKTOP + MOBILE
    ================================================= */

    const noBtn =
        document.getElementById("noBtn");

    if (noBtn) {

        function moveNoButton() {

            const padding = 15;

            const buttonWidth =
                noBtn.offsetWidth || 150;

            const buttonHeight =
                noBtn.offsetHeight || 50;

            const maxX =
                window.innerWidth -
                buttonWidth -
                padding;

            const maxY =
                window.innerHeight -
                buttonHeight -
                padding;

            const randomX =
                padding +
                Math.random() *
                Math.max(0, maxX - padding);

            const randomY =
                padding +
                Math.random() *
                Math.max(0, maxY - padding);

            noBtn.style.position = "fixed";

            noBtn.style.left =
                randomX + "px";

            noBtn.style.top =
                randomY + "px";

            noBtn.style.zIndex = "999999";

        }


        /* Desktop */

        noBtn.addEventListener(
            "mouseover",
            moveNoButton
        );


        /* Mobile */

        noBtn.addEventListener(
            "touchstart",
            function (event) {

                event.preventDefault();

                moveNoButton();

            },
            {
                passive: false
            }
        );


        /* Click */

        noBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                moveNoButton();

            }
        );

    }


    /* =================================================
       ❤️ YES BUTTON
    ================================================= */

    const yesBtn =
        document.getElementById("yesBtn");

    if (yesBtn) {

        yesBtn.addEventListener(
            "click",
            function () {

                document.body.innerHTML = `

                    <div
                        id="videoScreen"
                        style="
                            width:100vw;
                            height:100vh;
                            background:black;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                        "
                    >

                        <video
                            id="loveVideo"
                            controls
                            autoplay
                            playsinline
                            style="
                                width:100%;
                                height:100%;
                                object-fit:contain;
                            "
                        >

                            <source
                                src="images/love-video.mp4"
                                type="video/mp4"
                            >

                        </video>

                    </div>

                `;


                const video =
                    document.getElementById("loveVideo");


                if (!video) return;


                video.onended = function () {

                    document.body.innerHTML = `

                        <div
                            id="finalScreen"
                            style="
                                min-height:100vh;
                                display:flex;
                                flex-direction:column;
                                justify-content:center;
                                align-items:center;
                                text-align:center;
                                padding:30px;
                                color:white;
                                background:
                                linear-gradient(
                                    rgba(0,0,0,.55),
                                    rgba(0,0,0,.55)
                                ),
                                url('images/rose-bg.jpg');
                                background-size:cover;
                                background-position:center;
                            "
                        >

                            <h1>
                                ❤️ I Knew It ❤️
                            </h1>

                            <h2>
                                🎂 Happy Birthday Madam 🎂
                            </h2>

                            <p>
                                Thank you for being
                                the most beautiful
                                part of my life.
                            </p>

                            <p>
                                You are my happiness,
                                my peace,
                                and my favorite person
                                in this world.
                            </p>

                            <h2>
                                Happy Birthday ❤️
                            </h2>

                        </div>

                    `;

                };

            }
        );

    }

});
