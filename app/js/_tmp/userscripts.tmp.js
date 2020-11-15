"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var body = document.querySelector('body');
  cx = window.innerWidth / 2;
  cy = window.innerHeight / 2;
  body.addEventListener('mousemove', function (e) {
    clientX = e.pageX;
    clientY = e.pageY;
    request = requestAnimationFrame(updateMe);
  });

  function updateMe() {
    dx = clientX - cx;
    dy = clientY - cy;
    tiltx = dy / cy;
    tilty = dx / cx;
    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    degree = radius * 12;
    gsap.to('.content', 1, {
      transform: "rotate3d(".concat(tiltx, ", ").concat(tilty, ", 0, ").concat(degree, "deg)")
    });
  }
});