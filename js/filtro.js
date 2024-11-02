//OWL
jQuery(document).ready(function ($) {

    window.onscroll = function () {
         if (window.pageYOffset > 140) {
           $("#header").addClass("active");
         } else {
           $("#header").removeClass("active");
         }
       };

     //Select tipo de Imóvel
     VirtualSelect.init({ 
       ele: '#multipleSelect' 
     });
 });