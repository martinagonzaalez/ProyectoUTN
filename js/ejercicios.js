// Ejercicio de medio de transporte recomendado

function medioTransporte(distancia) {
    if(distancia <= 1000){
        return('Debes ir a pie')
    }
    else if(distancia <= 10000){
        return('Podes ir en bicicleta')
    }
    else if(distancia <= 30000){
        return('Podes ir en colectivo')
    }
    else if(distancia <= 100000){
        return('Podes ir en auto')
    }
    else {
        return('Anda en avion')
    }
}

console.log(medioTransporte(1000));

//Ejercicio de array de numeros con mathmax

function encontrarMayor(numeros) {
    return Math.max(...numeros);
}

console.log(encontrarMayor([3, 8, 14, 20, 15]));
