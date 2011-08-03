/*
	Usage:
	
	$('div').vit({
		'parent': this.parent().height(),
		'offset': 0
	})
	
	parent = The height of the container that you are vertically aligning your element inside of.
	offset = Amount to offset from vertical center.
*/
(function( $ ){
	$.fn.vit = function( options ) {
  	
		var settings = {
			'parent' : this.parent().height(),
			'offset' : 0
		};
	
		if ( options ) { 
			$.extend( settings, options );
		}
	
		return this.each(function(){
			var myHeight = $(this).height();
			$(this).css('margin-top', ((settings.parent - myHeight) / 2) + settings.offset);
		});
	
	};
})( jQuery );