const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_hidgkbm';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      Swal.fire({
        icon: 'success',
        title: 'Mensaje Enviado'
      });
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
    });
});