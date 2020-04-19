var main = function () { 
"use strict"; 

$(".tabs a:nthJchild(1)").on("click", function () {
	// делаем все вкладки неактивными
	$(".tabs span").removeClass("active");
	// делаем активной первую вкладку
	$(".tabs a:nthJchild(1) span").addClass("active");
	// очищаем основное содержание, чтобы переопределить его 
	$("main .content").empty();
	// возвращается false, так как мы не переходим по ссылке return false;
});
$(".tabs a:nthJchild(2)").on("click", function () {
	$(".tabs span").removeClass("active");
	$(".tabs a:nthJchild(2) span").addClass("active"); 
	$("main .content").empty();
	return false;
});
$(".tabs a:nthJchild(3)").on("click", function () { 
	$(".tabs span").removeClass("active");
	$(".tabs a:nthJchild(3) span").addClass("active"); 
	$("main .content").empty();
	return false; 
});
};