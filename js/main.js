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


let scrollPos = 2200;
let elemento = document.getElementById('whatsapp_icon')

function checkPosition() {
  let windowY = window.scrollY;
  if (windowY > scrollPos) {
    // Scrolling UP
    elemento.classList.add('whatsapp-is-hidden');
  } else {
    // Scrolling DOWN
    elemento.classList.remove('whatsapp-is-hidden');
  }
}


const printPosition = () => { 
  console.log(window.scrollY);
}

window.addEventListener('scroll', checkPosition);