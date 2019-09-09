/*
*********************************************

let date= new Date().getDay();
console.log(date);

switch(date){
    case 0:
        console.log('Today is Sunday');
            break;
    
    case 6:
        console.log('Today is Saturday');
            break;

    default:
        console.log('Work Hard');
            break;
}

********************************************

let code=['PHP', 'JAVASCRIPT', 'PYTHON', 'C#'];
for(i = 0; i < code.length; i++){
    //if(i==2) break;
    console.log(code[i]);
}

*********************************************

let num= 5;

try{
    if (num < 10) throw 'O número precisa ser maior que 10';

} catch (erro){
    alert('Erro: ' + erro);
}
*/
//*******************************************
function verifica(){
    let num = document.getElementById('numero').value;
    try{
        if (num == '') throw 'Informe um valor';
        if (isNaN(num)) throw 'Digine apenas números';
        if (num < 10 || num > 20 ) throw 'Digite números entre 10 e 20!';

        document.getElementById('msg').innerHTML = 'Perfeito você digitou o número: '+ num;
    }
    catch(erro){
        document.getElementById('msg').innerHTML = 'Erro: '+ erro;
    }
}
