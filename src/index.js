import './sass/styles.scss';
import $ from 'jquery';


$(document).ready(function(){

  $(window).scroll(function(){
   if ($(this).scrollTop() < 10) {
     $(".navBar").removeClass("scrolled");
   }
  });

  $(window).scroll(function(){
   if ($(this).scrollTop() > 10) {
     $(".navBar").addClass("scrolled");
   }
 });

}); /*Document Ready Close*/
