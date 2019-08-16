/**
 * @file
 * A JavaScript file for the theme.
 */

(function ($) {

  'use strict';

  // Add a js class to the html-tag when JavsScript is active.
  $('html').removeClass('nojs').addClass('js');

})(u);

$(document).ready(function() {
  var originalLabel = $( ".blockmenu #label" ).html();
  $( ".blockmenu #label" ).click(function() {
    var position = $(".blockmenu")[0].style.left;
    console.log(position);
    console.log(0.6 * $(window).width());
    if( position == "55vw" ) {
      $( ".blockmenu" ).transition(
        { left : "92vw" });
      $( ".blockmenu #label" ).html(originalLabel);
    } else {
      $( ".blockmenu" ).transition(
        { left : "55vw" });
      $( ".blockmenu #label" ).html("<svg width='50%' height='50%'\
      viewbox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>\
      <path d='M 25 25 L 75 75' stroke='white' stroke-width='7.5' stroke-linecap='round' />\
      <path d='M 25 75 L 75 25' stroke='white' stroke-width='7.5' stroke-linecap='round' />\
      </svg>\
      Close");
    }
  });
});
