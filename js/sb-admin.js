$(function() {
    $('.navbar .angle').click(function() {
        var direction = $('i', this).hasClass('fa-angle-left') ? 'left' : 'right';

        if (direction === 'left') {
            $('.side-bar').hide()

            $('#wrapper, .navbar-inverse').css({'padding-left': '0'})

            $('i', this).removeClass('fa-angle-left').addClass('fa-angle-right')
        } else {
            $('.side-bar').show()

            $('#wrapper, .navbar-inverse').css({'padding-left': '250px'})

            $('i', this).removeClass('fa-angle-right').addClass('fa-angle-left')
        }
    });

    // We can attach the `fileselect` event to all file inputs on the page
    $(document).on('change', ':file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/');
            // label = input.val().replace(/\\/g, '/').replace(/.*\//, '');

        input.trigger('fileselect', [numFiles, label]);
    });

    // We can watch for our custom `fileselect` event like this
    $(document).ready(function() {
      $(':file').on('fileselect', function(event, numFiles, label) {
          var input = $(this).parents('.input-group').find(':text'),
              log = numFiles > 1 ? numFiles + ' files selected' : label;

          if( input.length ) {
              input.val(log);
          } else {
              if ( log ) {
              	alert(log);
              }
          }

      });
    });
});