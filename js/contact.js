$(function() {
  var $form = $("#message-form");
  var $data = $(".data");
  var $firstName = $("#first-name");
  var $lastName = $("#last-name");
  var $email = $("#email");
  var $subject = $("#subject");
  var $message = $("#message");

  $data.each(function(index, ele) {
    $(ele).change(function(e) {
      $(ele).removeClass('error')
    })
  })

  $form.submit(function(e) {
    e.preventDefault();

    var email = $email.val();
    var subject = $subject.val();
    var message = $message.val();
    var lastName = $lastName.val();
    var firstName = $firstName.val();
    var values = [email, subject, message, lastName, firstName]

    if (values.every(v => v)) {
      $.post('https://ines-mailer.herokuapp.com/mail', {
        firstName,
        lastName,
        email,
        subject,
        message
      }).done(function() {
        $data.each(function(index, ele) {
          $(ele).val('')
        })
      }).fail(function() {

      });
    } else {
      $data.each(function(index, ele) {
        if ($(ele).val().length <= 0) {
          $(ele).addClass('error')
        } else {
          $(ele).removeClass('error')
        }
      })
    }

  });
})
