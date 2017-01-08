// TODO: If a corresponding element is destroyed, delete the corrseponding highlight
(function () {
  "use strict";

  window.addEventListener('message', function(e) {
    console.log(e.data);
  });


  // clear previous elements
  $("#css-checkr-container").remove();

  // add new container
  $("<div id='css-checkr-container'></div>")
    .css({
      position: 'none'
    })
    .appendTo('body');

  elms.each(function(index) {
    var elm = $(this);
    var offset = elm.offset();
    var width = elm.width();
    var height = elm.height();

    // add element for this matched element
    $('<div></div>')
      .css({
        position: 'absolute',
        background: 'rgba(255,255,255,0.2)',
        'box-shadow': 'inset rgb(255, 235, 59) 0px 0px 5px 5px',
      })
      .width(width)
      .height(height)
      .offset({
        top: offset.top + parseInt(elm.css("margin-top"), 10) + parseInt(elm.css("border-top"), 10) + parseInt(elm.css("padding-top"), 10),
        left: offset.left + parseInt(elm.css("margin-left"), 10) + parseInt(elm.css("border-left"), 10) + parseInt(elm.css("padding-left"),10)
      })
      .appendTo('body div#css-checkr-container');

  });
})();
