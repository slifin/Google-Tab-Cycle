// ==UserScript==
// @name Google Tab Cycle
// @description Cycle through search results with tab
// @match https://www.google.co.uk/*
// ==/UserScript==
(function($){
	var elems = $.querySelectorAll('.g a');
	Object.keys(elems).forEach(function(val){
		var elem = elems[val];
		if (elem.setAttribute)
			elem.setAttribute('tabindex','1');
	});
})(document);
