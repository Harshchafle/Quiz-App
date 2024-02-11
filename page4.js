'use strict';
let x;
    function subClicked(clicked) {
        x = clicked;
        location.replace(`${x}topics.html`);
        // window.onload = function() {
        //     document.getElementById("top").innerHTML = x;  //example function call.
        //   }          
        // console.log(x); 
    }
