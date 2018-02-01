$(function () {

	  $('select').niceSelect();

	//________________________________________________________________

	  $('.custom-jq-checkbox-box').each(function() {

	  	var checkbox = $(this).find('input[type=checkbox]');
	  	var span = checkbox.next().children();

	  	if(checkbox.prop('checked')) {   //изначальная проверка чекбоксов
	  		span.addClass('checked')
	  	} 

	  	checkbox.on('click', function() {// меняем картинку на клик

	  	  	if(checkbox.prop('checked')) {
	  			span.addClass('checked')
	  		} else {
	  			span.removeClass('checked')
	  		};

	  	})
	  })



	//_______________________________________________________________




	function showMenu(e) {
		e.preventDefault();
		$(this).toggleClass('pasive');
		$(this).next().slideToggle('200');
		return this;
	};

	$('.active').on('click', showMenu);


})