const emails = ["renato@mail.it" , "carlo@mail.com", "micuzzo@mail.com"];
const btn = document.getElementById("btn");
const mail = document.getElementById("control");
const accesso = document.getElementById ("login");
const prova = document.querySelector('.access_button');
for (let i = 0 ; i < emails.length; i++ ){
    if(mail.value == emails[0]){
        accesso.innerText == ("Bentornato Renè");
        prova.style.display = 'block';
    }else if(mail.value == emails[1]){
        accesso.innerText = ("Bentornato Carlo");
        prova.classList.remove('access_button')
    }else if(mail.value == emails[2]){
        accesso.innerText = ("Bentornato Michè");
        prova.classList.remove('access_button')
    }else{
        accesso.innerText = ("I dati inseriti non sono validi");

    }
}