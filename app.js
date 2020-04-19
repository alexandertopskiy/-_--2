var main = function () { 
"use strict"; 

var makeTabActive = function (tabNumber) {
	// сконструируем селектор из tabNubmer
	var tabSelector = ".tabs a:nthJchild(" + tabNumber + ") span"; 
	$(".tabs span").removeClass("active"); 
	$(tabSelector).addClass("active");
};
$(".tabs a:nthJchild(1)").on("click", function () {
	makeTabActive(1);
	return false;
});
$(".tabs a:nthJchild(2)").on("click", function () { 
	makeTabActive(2);
	return false;
});
$(".tabs a:nthJchild(3)").on("click", function () { 
	makeTabActive(3);
	return false;
});
};