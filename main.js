const contents = $('#contents');
var contentsParent = contents.parent();
contents.remove();
// contentsParent.prepend(<img src="motiv.jpg" alt="quote" ></img>)
contentsParent.prepend('<img src="https://i.pinimg.com/originals/d8/9f/4e/d89f4e15078c17b1b4a09ca32647063c.jpg"/>');
// contentsParent.prepend('<p class = "beautText">Get back to work. You know what you need to do.</p>')
contentsParent.prepend('<div class = "beautText"> Get back to work. You know what you need to do. </div>')
