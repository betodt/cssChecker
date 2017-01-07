// TODO: If a corresponding element is destroyed, delete the corrseponding highlight
(function () {
  "use strict";


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
    $('<div>hello</div>')
      .css({
        position: 'absolute',
        background: 'rgba(255,255,255,0.2)',
        'box-shadow': 'inset rgb(255, 235, 59) 0px 0px 5px 5px',
        overflow: 'visible',
        'pointer-events': 'none',
      })
      .width(width)
      .height(0)
      .offset(offset)
      .appendTo('body div#css-checkr-container');
  });
})();
