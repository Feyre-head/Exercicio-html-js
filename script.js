document.getElementById('formulario').addEventListener('submit', function(event){ //pega o id do formulário e adiciona um evento ouvinte para quando a ação acontecer
   event.preventDefault() //impede o envio padrão do formulário

   //Captura os valores dos campos e converte de String para Number
   var campoA = Number (document.querySelector('#campoA').value)
   var campoB = Number (document.querySelector('#campoB').value)

   var mensagem = document.querySelector('#mensagem')

   //validação se B é maior que A
   if(campoB > campoA){
      mensagem.textContent = `O formulário é Valido! Campo B é maior que Campo A.`
   } else {
      mensagem.textContent = `O formulário não é Válido! Campo B deve ser maior que Campo A.`
   }
})