define(["jquery"], function ($) {
    "use strict";
    return function () {
      let myTest = document.querySelector(".filters__button-more");

      myTest.addEventListener("click", myWindow);

      function myWindow() {
          alert("Hello!");
      }
      
        // let actionMoreBtn = document.querySelectorAll(".filters__button-more");

        // actionMoreBtn.addEventListener("click", "lol")

        // console.log(5555);

        // function lol(event) {

        //     console.log(66666);
        //     //$("filters__hidden").toggleCalss("filters__show");
        // };
    };
});