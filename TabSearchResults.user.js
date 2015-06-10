// ==UserScript==
// @name Google Tab Cycle
// @description Cycle through search results with tab
// @match https://www.google.co.uk/*
// ==/UserScript==
(function($){
	'use strict';
	var elems = $.querySelectorAll('.g a');
	Object.keys(elems).forEach(function(idx){
		var elem = elems[idx];
		if (elem.setAttribute)
			elem.setAttribute('tabindex','1');
	});
})(document);
