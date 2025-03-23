emailjs.init('hZO_EceGWsadHKCh7');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.getElementById('button');
    btn.value = 'Sending...';

    const serviceID = 'default_service'; // Replace with your service ID
    const templateID = 'template_id'; // Replace with your template ID

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Message sent successfully!');
            this.reset();
        })
        .catch((err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});
