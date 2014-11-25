// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Mobile Nav
var state = 'none';
	
	function showhide(layer_ref) {
	
	if (state == 'block') {
	state = 'none';
	$(".menuToggle").html("Show Menu / Navigation <i class='fa fa-navicon'></i>");
	}
	else {
	state = 'block';
	// Make the content div fade in
	$("#show_menu").hide();
	$('#show_menu').fadeIn(200);
	$('#show_menu').slideDown(200);
	
	$(".menuToggle").html("Close Menu / Navigation <i class='fa fa-navicon'></i>");
	}
	if (document.all) { //IS IE 4 or 5 (or 6 beta)
	eval( "document.all." + layer_ref + ".style.display = state");
	}
	if (document.layers) { //IS NETSCAPE 4 or below
	document.layers[layer_ref].display = state;
	}
	if (document.getElementById &&!document.all) {
	hza = document.getElementById(layer_ref);
	hza.style.display = state;
	}
	}  