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
  $( ".blockmenu" ).click(function() {
    var position = $(".blockmenu").css( "left" );
    if( position == "0px" ) {
      $( ".blockmenu" ).transition(
        { left : "-71vw" });
      $( ".blockmenu #label" ).html(originalLabel);
    } else {
      $( ".blockmenu" ).transition(
        { left : "0px" });
      $( ".blockmenu #label" ).html("<svg width='50%' height='50%'\
      viewbox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>\
      <path d='M 25 25 L 75 75' stroke='white' stroke-width='7.5' stroke-linecap='round' />\
      <path d='M 25 75 L 75 25' stroke='white' stroke-width='7.5' stroke-linecap='round' />\
      </svg>\
      Close");
    }
  });
});
