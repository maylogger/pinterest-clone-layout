function initLayout(){
  var window_width = $(window).width();
  if ( window_width > 960 ) {
    wrapper_width = Math.floor( window_width / 240 ) * 240;
    $('.wrapper').css("width", wrapper_width + "px" );
  }
}

function resort(){
  $('#masonry').masonry({
    itemSelector : '.item',
    isResizable: false
  });
}

$(function(){
  initLayout();
  resort();
});

$(window).resize(function(){
  initLayout();
  resort();
});