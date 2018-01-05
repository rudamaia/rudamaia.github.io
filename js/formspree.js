var $contactForm = $('#contact-form');
$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/rudamaia@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
		dataType: 'json',
		beforeSend: function() {
			$contactForm.append('<div class="alert alert-info">Enviando…</div>');
		},
		success: function(data) {
			$contactForm.find('.alert-info').hide();
			$contactForm.children('.submit').prop("disabled",true);
			$contactForm.append('<div class="alert alert-success">Mensagem enviada!</div>');
		},
		error: function(err) {
			$contactForm.find('.alert-info').hide();
			$contactForm.append('<div class="alert alert-danger">Ops, não foi!</div>');
		}
	});
});