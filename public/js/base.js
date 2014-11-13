(function(window, $, undefined){
	//nav
	$('.navbar-nav').on('click','li',function() {
		var _this = $(this);//这里的this，如果上面不加‘li’，指向的ul
		$('.navbar-nav li').each(function() {
			$(this).removeClass('active');
		});
		_this.addClass('active');
	});

})(window, jQuery);