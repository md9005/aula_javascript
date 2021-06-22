

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por cliclar!</b>";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    window.open("https://www.google.com/"); // abre em outra aba
    //window.locarion.href = "https://www.google.com/"; // abre na mesma aba
}

function trocar(elemento){
    elemento.innerHTML  = "Obrigado por passar o mouse!";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!";
   // alert("trocar texto");

}

function voltarelemento(){
    elemento.innerHTML  = "Obrigado por passar o mouse!";
    //document.getElementById("mousemove").innerHTML = "Passar o mouse aqui!";
}

function load(){
    alert("Pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1,n2){
    return n1+n2;
}

var validar = 0;
function validaidade(idade){
    if (idade >= 18){
        validar = true

    }else{
        validar = false
    }    
    return validar;
}

var idade = prompt ("Qual a sua idade?");
validaridade(idade)
console.log(validar);
*/

//function setReplace(frase, nome, novo_nome){
//    frase.replace(nome, novo_nome)
//}


/*
alert(soma(5, 10));
alert (setReplace("vai Japão", "Japão", "Brasil"));
*/

/*
var d = new Date();
alert(d);
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getDay());
alert(d.getHours());
*/


/*
var count;
for (count = 0; count <=5; count++){
    alert(count);
}:
*/

/*
var count = 5;
while (count < 5){
    console.log(count)
    //count = conut +1;
    count++;
};
*/


/*
var idade = prompt("Qual sua idade?");
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/


/*
var frutas =[{nome:"Maçã", cor: "vermelha"}, {nome: "Uva", cor:"Roxa"}]
console.log(frutas);
alert(fruta[1].nome);
*/

/*
var fruta ={nome:"Maçã", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/


//var lista = ["mação"."pera","laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista[1]);

//console.log(lista.length);
//console.log(lista.reverse());
//console.log(lista.toString());
//console.log(lista.join("-"));



//var nome = "Murilo Dauro";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão","Brasil"));




