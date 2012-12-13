require(["jquery", "tree.jquery", "foundation/jquery.foundation.mediaQueryToggle"], function($) {
	//the jquery.alpha.js and jquery.beta.js plugins have been loaded.
	$(function() {
		$('body').tree.jquery().beta();
	});
});