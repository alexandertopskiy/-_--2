var main = function (toDoObjects) {
	"use strict";
	// как main имеет доступ к списку задач!
};	

$(document).ready(function () {
	$.getJSON("todos.json", function (toDoObjects) {
	// вызов функции main с аргументом в виде объекта toDoObjects 
		main(toDoObjects);
	});
});