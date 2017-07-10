/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

let header = document.body.querySelector('header');
let particles = document.body.querySelector("#particles");
let icons = document.body.querySelector(".socialIcons");
let main = document.body.querySelector("main");

document.body.querySelector('#firstButton').addEventListener('click', function (e) {
    header.style.opacity = 0;
    particles.style.opacity = 0;
    icons.style.opacity = 0;
    setTimeout(function () {
        header.remove();
        particles.remove();
        icons.remove();
        main.style.display = "flex";
    }, 1000);
});