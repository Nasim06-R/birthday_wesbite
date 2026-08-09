/* =====================================================
   🎂 BIRTHDAY WEBSITE SCRIPT
===================================================== */


/* =====================================================
   🎀 INTRO → EXISTING INDEX PAGE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const intro =
        document.getElementById("birthdayIntro");

    const mainWebsite =
        document.getElementById("mainWebsite");

    const clickHereBtn =
        document.getElementById("clickHereBtn");


    /*
       Intro elements exist hain to hi
       intro logic chalega.
    */

    if (intro && mainWebsite && clickHereBtn) {

        /*
           Existing website initially hidden
        */

        mainWebsite.classList.remove("show");


        clickHereBtn.addEventListener(
            "click",
            function () {

                /*
                   🎉 Confetti
                */

                if (typeof confetti === "function") {

                    confetti({
                        particleCount: 150,
                        spread: 100,
                        startVelocity: 35,
                        origin: {
                            y: 0.6
                        }
                    });

                }


                /*
                   🎂 Intro hide
                */

                intro.classList.add("hide");


                /*
                   🌐 Existing page show
                */

                setTimeout(function () {

                    mainWebsite.classList.add("show");

                    window.scrollTo({
                        top: 0,
                        behavior: "instant"
                    });

                }, 700);

            }
        );

    }


    /* =================================================
       🎁 OPEN MY HEART
    ================================================= */

    const giftBtn =
        document.getElementById("giftBtn");


    if (giftBtn) {

        giftBtn.addEventListener(
            "click",
            function () {

                const questionBox =
                    document.getElementById(
                        "questionBox"
                    );


                if (questionBox) {

                    questionBox.style.display =
                        "flex";

                }


                createBalloons();

            }
        );

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


            /*
               Available screen space
            */

            const maxX =
                window.innerWidth -
                buttonWidth -
                padding;


            const maxY =
                window.innerHeight -
                buttonHeight -
                padding;


            /*
               Random position
            */

            const randomX =
                padding +
                Math.random() *
                Math.max(
                    0,
                    maxX - padding
                );


            const randomY =
                padding +
                Math.random() *
                Math.max(
                    0,
                    maxY - padding
                );


            /*
               Fixed is important for mobile
            */

            noBtn.style.position =
                "fixed";


            noBtn.style.left =
                randomX + "px";


            noBtn.style.top =
                randomY + "px";


            noBtn.style.zIndex =
                "999999";


            /*
               Prevent transition problems
            */

            noBtn.style.margin = "0";

        }


        /*
           🖥️ Desktop
        */

        noBtn.addEventListener(
            "mouseover",
            moveNoButton
        );


        /*
           📱 Mobile
        */

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


        /*
           🖱️ Click
        */

        noBtn.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                moveNoButton();

            }
        );

    }


    /* =================================================
       ❤️ YES / SOMETHING SOMETHING
    ================================================= */

    const yesBtn =
        document.getElementById("yesBtn");


    if (yesBtn) {

        yesBtn.addEventListener(
            "click",
            function () {


                /*
                   🎬 VIDEO SCREEN
                */

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
                            overflow:hidden;
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

                            Your browser does not support
                            this video.

                        </video>

                    </div>

                `;


                const video =
                    document.getElementById(
                        "loveVideo"
                    );


                if (!video) {
                    return;
                }


                /*
                   🎬 Video finished
                */

                video.onended =
                    function () {


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

                                    box-sizing:border-box;

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



/* =====================================================
   🎈 BALLOONS
===================================================== */

function createBalloons() {

    for (let i = 0; i < 15; i++) {

        const b =
            document.createElement("div");


        b.innerHTML = "🎈";


        b.style.position =
            "fixed";


        b.style.left =
            Math.random() * 100 + "vw";


        b.style.bottom =
            "-60px";


        b.style.fontSize =
            "40px";


        b.style.pointerEvents =
            "none";


        b.style.zIndex =
            "99999";


        document.body.appendChild(b);


        let y = -60;


        const fly =
            setInterval(
                function () {

                    y += 4;


                    b.style.bottom =
                        y + "px";


                    if (
                        y >
                        window.innerHeight + 100
                    ) {

                        clearInterval(fly);

                        b.remove();

                    }

                },
                20
            );

    }

}



/* =====================================================
   🎁 OPEN YOUR SURPRISE
===================================================== */

function checkBirthday() {

    const today =
        new Date();


    const day =
        today.getDate();


    const month =
        today.getMonth() + 1;


    /*
       🎂 22 August

       January = 1
       August = 8
    */

    if (
        day === 22 &&
        month === 8
    ) {

        window.location.href =
            "surprise.html";

    }

    else {

        alert(
            "🎁 This surprise is locked until 22 August ❤️"
        );

    }

}



/* =====================================================
   🎂 COUNTDOWN
===================================================== */

const birthday =
    new Date(2026, 7, 22);


/*
   August = 7
   because JavaScript months start at 0
*/


function updateCountdown() {

    const timer =
        document.getElementById("timer");


    if (!timer) {
        return;
    }


    const now =
        new Date();


    const diff =
        birthday - now;


    if (diff <= 0) {

        timer.innerHTML =
            "🎉 It's Your Birthday Today! 🎂";

        return;

    }


    const days =
        Math.floor(
            diff /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                diff /
                (1000 * 60 * 60)
            ) % 24
        );


    const minutes =
        Math.floor(
            (
                diff /
                (1000 * 60)
            ) % 60
        );


    const seconds =
        Math.floor(
            (
                diff /
                1000
            ) % 60
        );


    timer.innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);
