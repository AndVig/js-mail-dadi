const emails = ["renato@mail.it" , "carlo@mail.com", "micuzzo@mail.com"];
const btn = document.getElementById("btn");
const mail = document.getElementById("control");
const accesso = document.getElementById ("login");
const prova = document.querySelector('.access_button')
btn.addEventListener('click', function () {
    for (let i = 0 ; i < emails.length; i++ ){
        if(mail.value == emails[i]){
    
            accesso.innerText = ("Bentornato");
            prova.style.display = 'block';
        }else{
            accesso.innerText = ("I dati inseriti non sono validi");
    
        }
    }
})
