var defaultSize = 'large';

$(function() {

	$('nav').prepend('<a class="menu-link">Categories</a>');
	$('nav ul').addClass('toggle');
	
	function toggleMenu(event) {
		event.preventDefault();
		$('nav ul').toggleClass('show');
	}
	$('nav').on('touchstart click', '.menu-link', toggleMenu);
	
	
	
	$(window).resize(function() {
	    var size = window.getComputedStyle ? window.getComputedStyle(document.body,':after').getPropertyValue('content') : defaultSize;
	    
	    var isSmall = size.indexOf('small') != -1,
	    	isLarge = size.indexOf('large') != -1;
		
		if (isLarge) {
			loadAlternativeImages('large');
		};
	}).resize();

});


function loadAsync(url, loadFn) {
    loadFn = loadFn || function() {}
    $(function() {
	    var script = document.createElement('script');
	    script.src = url;
	    script.async = true;
	    $(script).on('load', loadFn);
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s);
	});
}

if (navigator.userAgent.match(/OS [^6]+(_\d)+ like Mac OS X/i)) {
    loadAsync('Content/js/libs/ios-orientationchange-fix.min.js');
}