//exercicio 3


/*  
    var numero1 = parseInt(window.prompt("Qual sua nota"));
    var numero2 = parseInt(window.prompt("Qual sua nota"));

    if(numero1 & numero2 >=0 <=10)  {
    
        document.write("A media é: " + (numero1 + numero2)/2)

    } else {
        window.alert("Erro(somente numeros de 0 a 10)")

    } */



//exercicio 4

do {

    var menu = parseInt(window.prompt("1 - Somar \n 2 - Subtrair \n 3 - Multiplicar \n 4 - Dividir \n 5 - Sair"))

    var numero1
    var numero2

    function pedirNumeros() {
        numero1 = parseInt(prompt("Digite um numero"))
        numero2 = parseInt(prompt("Digite um numero"))    
    }

    switch(menu){

        case 1 :
        pedirNumeros()
        window.alert(numero1 + numero2)
        break
    
        case 2 : 
        pedirNumeros()
        window.alert(numero1 - numero2)
        break
    
        case 3 :
        pedirNumeros()
        window.alert(numero1 * numero2)
        break
    
        case 4 :
        pedirNumeros()
        window.alert(numero1 / numero2)
        break
    
        case 5 : window.alert("Saindo")
        break
    
        default : window.alert("Numero Invalido")
    } 
}while( menu != 5 )


//exercicio 1


/*var nota;
var alunos = prompt("Numero de alunos")

for(var i=0; i < alunos; i++){
    nota = prompt("Nota dos alunos")
}

alert(nota)*/