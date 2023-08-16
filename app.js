function diez(numero){
    
    for(let i=1; i<10 ;i++){
        console.log(numero+i);
    }
}

diez(1)


function deTresEnTres(){
    for(let i=3;i<=20;i+=3){
        console.log(i);
    }
}

deTresEnTres()


function suma100(){
    let resultado = 0;
    for(let i=0; i<100; i++){
        resultado+= 1;
        console.log(resultado)
    }   
}

suma100();

function factorial(numero){
    let fact = 1 ;
    for(let i =1 ; i<=numero; i++){
        fact*= i;
    }
    console.log(fact);
}

factorial(4);
factorial(10);


function fibonacci(num){
    console.log("Ejercicio 5");
    const fibonacciSerie = [1]
    for(let i = 0; i<= num; i++){
        fibonacciSerie[i] = fibonacciSerie[i-1] + fibonacciSerie[i-2] 
    }
    console.log(fibonacciSerie);
}

fibonacci(10);