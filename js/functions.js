$(function () {
  // Theme switch
  $('#switch').on('click', function () {
    var switchValue = $('#switch').attr('class')

    switch (switchValue) {
      case '1':
        $('#switch').removeClass('1')
        $('#switch').addClass('2')
        $('body').removeClass('theme1')
        $('body').addClass('theme2')
        break
      case '2':
        $('#switch').removeClass('2')
        $('#switch').addClass('3')
        $('body').removeClass('theme2')
        $('body').addClass('theme3')
        break
      case '3':
        $('#switch').removeClass('3')
        $('#switch').addClass('1')
        $('body').removeClass('theme3')
        $('body').addClass('theme1')
        break
    }
  })

  $('#controls .point').on('click', function () {
    if ($('#display').html() == 0) {
      $('#display').html('0.')
    } else {
      $('#display').html($('#display').html() + $(this).html())
    }
  })

  $('#controls .number').on('click', function () {
    if ($('#display').html() == 0) {
      $('#display').html($(this).html())
    } else {
      $('#display').html($('#display').html() + $(this).html())
    }
  })

  $('#controls .operation').on('click', function () {
    $('#display').html($('#display').html() + $(this).html())
  })

  $('#controls .delete').on('click', function () {
    if ($('#display').html() != 0 && $('#display').html() != 'infinity') {
      let value = $('#display').html().slice(0, -1)
      $('#display').html(value)
      if (value == '') $('#display').html(0)
    } else {
      $('#display').html(0)
    }
  })

  $('#controls .equal').on('click', function () {
    let value = $('#display').html().replace(/\×/g, '*')
    value = eval(value)
    if (value == Infinity || isNaN(value)) {
      $('#display').html('Division by zero. Restarting')

      var interval = setInterval(function () {
        $('#display').append('.')
      }, 300)

      setTimeout(function () {
        clearInterval(interval)
        $('#reset').trigger('click')
      }, 1200)
    } else $('#display').html(value)
  })

  $('#controls #reset').on('click', function () {
    $('#display').html(0)
  })
})
