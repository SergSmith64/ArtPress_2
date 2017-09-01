$(document).ready(function() {

	// Метод "TOGGLE" _ПЕРЕКЛЮЧЕНИЕ_ для кнопок
	$("#responsive-menu .btn").click(function(){
		$(this).button('toggle');
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
//	if(!Modernizr.svg) {
//		$("img[src*='svg']").attr("src", function() {
//			return $(this).attr("src").replace(".svg", ".png");
//		});
//	};


	$(".popup").magnificPopup();


	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо. Ваша заявка принята. В ближайшее время мы Вам перезвоним");
			setTimeout(function() {
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	$("#form2").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail2.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за сотрудничество. В ближайшее время мы Вам перезвоним");
			setTimeout(function() {
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
