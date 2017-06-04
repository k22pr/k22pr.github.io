$(function () {
	$(document).on("click", ".tab-box", function () {
		$(".tab-box").removeClass("hover");
		$(this).addClass("hover");
	})
});