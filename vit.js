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
			$(this).css('margin-top', (settings.parent - myHeight + settings.offset) / 2);
		});
	
	};
})( jQuery );