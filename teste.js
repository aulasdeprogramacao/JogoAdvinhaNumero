let numeroSecreto=parseInt(Math.random()*100);
let tentativas = 0;

function geranumero()
{
 numeroSecreto=parseInt(Math.random()*100);
 document.getElementById('x').value="";
 document.getElementById('x').focus();
 tentativas = 0;
}

function testejogo()
{
 let chute = document.getElementById('x').value;
 tentativas ++;
 document.getElementById('p').innerHTML="Você tentou "+tentativas+" vezes";
 if (numeroSecreto < chute)
 {
    alert('Você digitou um número maior!');
 }
 else if (numeroSecreto > chute)
 {
    alert('Você digitou um número menor!');
 }
 else if (numeroSecreto == chute)
 {
    alert('Você acertou!\nJogue denovo\nUm novo número secreto foi gerado');
    numeroSecreto=parseInt(Math.random()*100);
    document.getElementById('x').value="";
    document.getElementById('p').innerHTML="Você acertou em "+tentativas+" tentativas";
 }
 document.getElementById('x').focus();
}