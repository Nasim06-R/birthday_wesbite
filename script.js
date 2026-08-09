/* =====================================================
   🎂 BIRTHDAY WEBSITE SCRIPT
===================================================== */


/* =====================================================
   💝 INTRO → YOUR EXISTING PAGE
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const intro =
        document.getElementById("birthdayIntro");

    const mainWebsite =
        document.getElementById("mainWebsite");

    const clickHereBtn =
        document.getElementById("clickHereBtn");


    if (
        !intro ||
        !mainWebsite ||
        !clickHereBtn
    ) {
        return;
    }


    clickHereBtn.addEventListener(
        "click",
        function () {

            /* Confetti */

            if (typeof confetti === "function") {

                confetti({
                    particleCount: 150,
                    spread: 100,
                    origin: {
                        y: 0.6
                    }
                });

            }


            /* Hide intro */

            intro.classList.add("hide");


            /* Show YOUR existing website */

            setTimeout(function () {

                mainWebsite.classList.add("show");

                window.scrollTo({
                    top: 0,
                    behavior: "instant"
                });

            }, 700);

        }
    );

});



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
       🎂 Birthday:
       9 August

       August = 8
    */

    if (
        day === 9 &&
        month === 8
    ) {

        window.location.href =
            "surprise.html";

    } else {

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


/* August = 7
   because JavaScript starts months at 0
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
            (diff /
                (1000 * 60 * 60))
            % 24
        );


    const minutes =
        Math.floor(
            (diff /
                (1000 * 60))
            % 60
        );


    const seconds =
        Math.floor(
            (diff / 1000)
            % 60
        );


    timer.innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds ❤️`;

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);
