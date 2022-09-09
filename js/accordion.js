$('.questions-list__accordion').each((index, element) => {
    $(element).on('click', function() {
      $(this).toggleClass('active')
      
      const panel = $(this).next()
      
      if ($(panel).css('display') === 'block') {
        $(panel).css('display', 'none')
      } else {
        $(panel).css('display', 'block')
      }
    })
  })