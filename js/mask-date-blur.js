
$.datepicker.regional['ru'] = {
	closeText: 'Закрыть',
	prevText: 'Предыдущий',
	nextText: 'Следующий',
	currentText: 'Сегодня',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
	dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
	dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
	dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
	weekHeader: 'Не',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''
};
$(function(){
	$("#datepicker").datepicker();
});
$(function() {
    $('input[class=date]').mask('99.99.9999');
});
$('.footer-content__image').on('click', (e) => {
    $('.footer-content__image img').css('filter', 'blur(0)')
    $('.footer-content__image-text').css('display', 'none')
    $('.footer-content__image img').off()
  })
  $('.section__fixed').addClass('original').clone().insertAfter('.section__fixed').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

  scrollIntervalID = setInterval(stickIt, 10);
  
  
  function stickIt() {
  
	var orgElementPos = $('.original').offset();
	orgElementTop = orgElementPos.top;               
  
	if ($(window).scrollTop() >= (orgElementTop)) {
	  // scrolled past the original position; now only show the cloned, sticky element.
  
	  // Cloned element should always have same left position and width as original element.     
	  orgElement = $('.original');
	  coordsOrgElement = orgElement.offset();
	  leftOrgElement = coordsOrgElement.left;  
	  widthOrgElement = orgElement.css('width');
	  $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
	  $('.original').css('visibility','hidden');
	} else {
	  // not scrolled past the menu; only show the original menu.
	  $('.cloned').hide();
	  $('.original').css('visibility','visible');
	}
  }