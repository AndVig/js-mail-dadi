const emails = ["renato@mail.it" , "carlo@mail.com", "micuzzo@mail.com"];
const btnLog = document.getElementById("btnLog");
const btnAdd = document.getElementById("btnAdd");
const mail = document.getElementById("control");
const accesso = document.getElementById ("login");
const prova = document.querySelector('.access_button')
btnLog.addEventListener('click', function () {
    for (let i = 0 ; i < emails.length; i++ ){
        if(mail.value == emails[i]){
    
            accesso.innerText = ("Bentornato");
            prova.style.display = 'inline';
        }else{
            accesso.innerText = ("I dati inseriti non sono validi");
    
        }
    }
})
btnAdd.addEventListener('click',function(){
    emails.push(mail.value);
    accesso.innerText=(mail.value +" correttamente aggiunto alla lista");
})
