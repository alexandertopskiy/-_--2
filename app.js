var main = function (toDoObjects) {
	"use strict";
	// как main имеет доступ к списку задач!
	var toDos = toDoObjects.map(function (toDo) {
		// просто возвращаем описание этой задачи
		return toDo.description;
	});
	// сейчас весь старый код должен работать как раньше!
	$("document").ready( function(){

	$(".tabs a span").toArray().forEach(function (element) { 
		// создаем обработчик щелчков для этого элемента 
		$(element).on("click", function () {
			// поскольку мы используем версию элемента jQuery,
			// нужно создать временную переменную,
			// чтобы избежать постоянного обновления
			var $element = $(element);
			$(".tabs a span").removeClass("active"); 
			$(element).addClass("active");
			$("main .content").empty();

			if ($element.parent().is(":nth-child(1)")) { 
				for (var i = toDos.length-1; i > -1; i--) { 
					$(".content").append($("<li>").text(toDos[i]));
				}
			} 
			else if ($element.parent().is(":nth-child(2)")) { 
				toDos.forEach(function (todo) { 
					$(".content").append($("<li>").text(todo));
				});
			} 
			else if ($element.parent().is(":nth-child(3)")) { 
				// ЭТО КОД ДЛЯ ВКЛАДКИ ТЕГИ 
				console.log("Щелчок на вкладке Теги");
			} else if ($element.parent().is(":nth-child(4)")) { 
				var $input = $("<input>"),
				$button = $("<button>").text("+"); 
				$button.on("click", function () { 
					toDos.push($input.val()); $input.val("");
				});
				$("main .content").append($input).append($button); 
			}
			return false;
		})
	})


$(".tabs a:first-child span").trigger("click");

})
};	

$(document).ready(function () {
	$.getJSON("todos.json", function (toDoObjects) {
	// вызов функции main с аргументом в виде объекта toDoObjects 
		main(toDoObjects);
	});
});