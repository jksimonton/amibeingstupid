document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    sessionStorage.setItem("currentlocation","start")

})

function buttonClicked(element) { 

    if (sessionStorage.getItem("currentlocation") == "start") {
        const startingBlock = document.getElementById("startingblock");
        startingBlock.classList.add("up")
    }

}