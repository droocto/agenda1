var $j = jQuery.noConflict();

// Autosuggest options
// 
// Allows to have several autocomplete at the same window, even if the data
// is given via Ajax
var formItemCounter = 0;
var asOptions = [];
var asAuto = [];
var asFunctions = [];
useBSNns = true;