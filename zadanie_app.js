var main = function () {
	var url = "http://api.flickr.com/services/feeds/photos_public.gne?" + 
		"tags=meme&format=json&jsoncallback=?";
	$.getJSON(url, function (flickrResponse) {
		//пока мы просто выво3им ответ в консоль 
		flickrResponse.items.forEach(function (photo) {
			// соз3аем новый элемент jQuery 3ля помещения 
			//в него изображения 
			var $img = $("<img>").hide();
			// помещаем в атрибут URL,
			// хранящийся в ответе Flickr
			$img.attr("src", photo.media.m);
			// прикрепляем тег img к элементу
			// main.photos
			$("main .photos").append($img);
			$img.fadeIn();
			// console.log(photo.media.m);
		});
	});

	var messages = ["первое сообщение", "второе сообщение", "третье", "четвертое"];

	var displayMessage = function (photo) {
		// создаем и скрываем элемент DOM
		
		var $img = $("<img>").hide();
		$img.attr("src", photo.media.m);
		$("main .photos").append($img);
		$img.fadeIn();
		// console.log(photo.media.m);
		
		setTimeout(function () {
			// через 3 секунды вызываем displayMessage снова со следующим индексом 
			messageIndex = messageIndex + 1;
			displayMessage(messageIndex);
		}, 3000);
	};
	displayMessage(0);
}
$(document).ready(main);