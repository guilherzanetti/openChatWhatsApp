//var for itens 
const numeroDeWhatsapp = document.querySelector('.caixa-texto');
const messageBox = document.querySelector('.caixa-message');
const botaoChat = document.querySelector('.btn-chat');
const aBtn = document.querySelector('.a-chat');
const seletorPais = document.getElementById('seletor-de-pais');

aBtn.addEventListener("click", () => {
 let numero = numeroDeWhatsapp.value;
 let pais = seletorPais.value;
 let message = messageBox.value;
 console.log("O número é ", pais + numero);
 console.log("A mensagem é: ", message);
 numero = numero.replace(/\D/g, '');

    if(!numero) return;
    aBtn.href = `https://wa.me/${pais}${numero}?text=${encodeURIComponent(message)}`;
});

// Function to key "Enter"

numeroDeWhatsapp.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      aBtn.click(); 
    }
  });

//if you liked this project, send a feedback on my social medias like Linkedin, GitHub.
//By Guilherme Zanetti
