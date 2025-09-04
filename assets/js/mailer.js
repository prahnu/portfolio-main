(function () {
	document.getElementById('contact-form').addEventListener('submit', function (e) {
		e.preventDefault();

		// Show loading message
		document.querySelector('.loading').style.display = 'block';
		document.querySelector('.error-message').style.display = 'none';
		document.querySelector('.sent-message').style.display = 'none';

		// Get form data
		const name = document.getElementById('name-field').value;
		const email = document.getElementById('email-field').value;
		const subject = document.getElementById('subject-field').value;
		const message = document.getElementById('message-field').value;

		// Parameters for main notification email
		const notificationParams = {
			to_name: 'Prahnu',
			from_name: name,
			from_email: email,
			subject: subject,
			message: message,
		};

		// Parameters for auto-reply email
		const autoReplyParams = {
			to_name: name,
			to_email: email,
			subject: `Re: ${subject}`,
			message: `Dear ${name},

                        Thank you for reaching out! I have received your message and will get back to you as soon as possible.

                        Best regards,
                        Prahnu Bordoloi`,
		};

		// Send both emails
		Promise.all([
			emailjs.send('service_3841hqo', 'template_mqg5nd4', notificationParams),
			emailjs.send('service_3841hqo', 'template_fhe2919', autoReplyParams), // Create this new template in EmailJS
		]).then(
			function (responses) {
				console.log('SUCCESS!', responses);
				document.querySelector('.loading').style.display = 'none';
				document.querySelector('.sent-message').style.display = 'block';
				document.getElementById('contact-form').reset();
			},
			function (error) {
				console.log('FAILED...', error);
				document.querySelector('.loading').style.display = 'none';
				document.querySelector('.error-message').textContent = 'Message could not be sent. Please try again later.';
				document.querySelector('.error-message').style.display = 'block';
			}
		);
	});
})();
