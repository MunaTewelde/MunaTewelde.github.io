alert("Hello, world!");

window.onload = function () {
    "use strict";
    let biggerB = document.getElementById("bigger");
    biggerB.onclick = function () {
        alert("Hello, world");
    }



    document.getElementById("bigger").onclick = function () {
        document.getElementById("texts").style.fontSize = "24pt";
    }

    // let butbig = document.getElementById("bigger");
    // butbig.onchange = function () {
    //     let isclicked = butbig.onclick;
    //     if (isclicked) {
    //         document.getElementById("texts").style.fontSize = "24pt";
    //         var id = setInterval(increaseTextsize, 1000);
    //     } else {
    //         setTimeout(clearInterval, 5000, id);
    //     }


    // }

    // function increaseTextsize() {
    //     // document.getElementById("textarea").style.fontSize="24pt";
    //     var prop = window.getComputedStyle(document.getElementById("textarea")).fontSize;
    //     newProp = parseInt(prop) + 2 + "pt";
    //     document.getElementById("textarea").style.fontSize = newProp;
    // }






    let blingch = document.getElementById("blingbox");
    blingch.onchange = function () {
        alert("hello");
    }


    let blingcheck = document.getElementById("blingbox");
    blingcheck.onchange = function () {
        let isChecked = blingcheck.checked;
        let boldtext = document.getElementById("texts");
        let backimg = document.getElementById("icon");
        if (isChecked) {
            boldtext.style.fontWeight = "bold";
            boldtext.style.color = "green"
            boldtext.style.textDecoration = "underline"
            // document.body.style.backgroundImage = "url(" / ")";

        } else {

            boldtext.style.fontWeight = "normal";
            boldtext.style.textDecoration = "none"
        }
    }





}










