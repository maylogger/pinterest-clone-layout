function initLayout(){
  var window_width = $(window).width();
  wrapper_width = Math.floor( window_width / 236 ) * 236;
  if ( window_width > 960 ) {
    $('.wrapper').css("width", wrapper_width + "px" );
  } else {
    $('.wrapper').css("width", "944px" );
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