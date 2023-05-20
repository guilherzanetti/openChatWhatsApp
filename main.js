//variáveis dos itens de valor
const numeroDeWhatsapp = document.querySelector('.caixa-texto');
const botaoChat = document.querySelector('.btn-chat');
const aBtn = document.querySelector('.a-chat');
const seletorPais = document.getElementById('seletor-de-pais');

aBtn.addEventListener("click", () => {
 let numero = numeroDeWhatsapp.value;
 let pais = seletorPais.value;
 console.log("O número é ", pais + numero);
 numero = numero.replace(/\D/g, '');

    if(!numero) return;
    aBtn.href = `https://wa.me/${pais}${numero}`;
});


//if you liked this project, send a feedback on my social medias like Linkedin, GitHub.
//By Guilherme Zanetti
