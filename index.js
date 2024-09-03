document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    sessionStorage.setItem("currentlocation","start")

})

function breathwait() {
    const button2 = document.getElementById("button2");
    console.log("waited")
    button2.classList.remove("gone");
    button2.classList.add("reset");
}

function buttonClicked(element) { 

    switch (sessionStorage.getItem("currentlocation")) {
        case "start":
            const startingBlock = document.getElementById("startingblock");
            const startingline = document.getElementById("startingline");
            const arecalm = document.getElementById("arecalm");
            const arecalmyes = document.getElementById("arecalmyes");
            const arecalmno = document.getElementById("arecalmno");
            const button1 = document.getElementById("button1");
            const button2 = document.getElementById("button2");
            startingBlock.classList.add("up");
            startingline.classList.remove("down");
            startingline.classList.add("up");
            arecalm.classList.remove("down");
            arecalmyes.classList.remove("downdown");
            arecalmyes.classList.add("down");
            arecalmno.classList.remove("rightdown");
            arecalmno.classList.add("right");
            button1.classList.remove("gone");
            button1.textContent = "Yes";
            button2.textContent= "No";
            sessionStorage.setItem("currentlocation","arecalm");
            break;
        case "arecalm":
            document.getElementById("startingblock").style.display = "none";
            if (element.id == "button2") {
                const startingline = document.getElementById("startingline");
                const arecalm = document.getElementById("arecalm");
                const arecalmyes = document.getElementById("arecalmyes");
                const arecalmno = document.getElementById("arecalmno");
                const breath = document.getElementById("breath");
                const button1 = document.getElementById("button1");
                const button2 = document.getElementById("button2");
                startingline.classList.remove("up");
                startingline.classList.add("upleft");
                arecalm.classList.add("left");
                arecalmyes.classList.remove("down");
                arecalmyes.classList.add("downleft");
                arecalmno.classList.remove("right");
                arecalmno.classList.add("left");
                breath.classList.remove("right");
                button1.classList.add("gone");
                button2.classList.add("gone");
                button2.textContent = "Reset";
                setTimeout(breathwait, 5000);
                
            } else {

            }
            break;
    }

}