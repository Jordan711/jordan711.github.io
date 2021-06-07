/*jshint esversion: 6 */

(function(){
    "use strict";

    window.onload = function(){
      $('#about-toggle').click(function(){
          $('#about').slideToggle();
          $('#about-toggle > span').toggleClass('rotate-180');
      });

      $('#work-experience-toggle').click(function(){
          $('#work-experience').slideToggle();
          $('#work-experience-toggle > span').toggleClass('rotate-180');
      });

      $('#education-toggle').click(function(){
          $('#education').slideToggle();
          $('#education-toggle > span').toggleClass('rotate-180');
      });

      $('#school-projects-toggle').click(function(){
          $('#school-projects').slideToggle();
          $('#school-projects-toggle > span').toggleClass('rotate-180');
      });

      $('#side-projects-toggle').click(function(){
          $('#side-projects').slideToggle();
          $('#side-projects-toggle > span').toggleClass('rotate-180');
      });

      $('#b-toggle').click(function(){
          $('#b-courses').slideToggle();
          $('#b-toggle > span').toggleClass('rotate-180');
      });

      $('#c-toggle').click(function(){
          $('#c-courses').slideToggle();
          $('#c-toggle > span').toggleClass('rotate-180');
      });

      $('#d-toggle').click(function(){
          $('#d-courses').slideToggle();
          $('#d-toggle > span').toggleClass('rotate-180');
      });
    };
}());
