console.group("Cuadrados")

// Calculo de perimetro  y area de un cuadrado

function perimetroCuadrado(ladoCuadrado){
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
 
}

function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    let area = areaCuadrado(value); 

    alert(area);
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    let perimetro = perimetroCuadrado(value); 
    
    alert(perimetro);
}

console.groupEnd();

//*******  Aqui vamos a trabajar con Triangulo ********//

console.group("Trianngulos")
    // Calculamos el perimetro
function perimetroTriangulo(lado1, lado2, lado3){
    return parseInt(lado1) * parseInt(lado2) * parseInt(lado3); // Usamos parseInt para asegurarnos que JS los interprete como intero y no como strings
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById('inputTriangulo1');
    const input2 = document.getElementById('inputTriangulo2');
    const input3 = document.getElementById('inputTriangulo3');
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const perimetroDelTriangulo = perimetroTriangulo(value1, value2, value3); 
    console.log(perimetroDelTriangulo);
    
    alert(perimetroDelTriangulo);
}

function areaTriangulo(base, altura){
    return (base*altura)/2
}

function calcularAreaTriangulo(){
    const inputBase= document.getElementById('inputBase');
    const inputAltura= document.getElementById('inputAltura');

    const baseValue = inputBase.value;
    const alturaValue = inputAltura.value;
    
    const areaDelTriangulo = areaTriangulo(baseValue, alturaValue);
    alert(areaDelTriangulo);
}

console.groupEnd();


//*******  Aqui vamos a trabajar con Circulo ********//

console.group("Circulo");

// Calculamos circunferencia.

function circunferencia(radio){
    const PI = Math.PI;
    return (radio * 2) * PI;
}

function calcularCircunferencia(){
    const inputCirculo = document.getElementById("inputCirculo");
    const valueInputCirculo = inputCirculo.value;
    const PI = Math.PI;
    
    const circunferenciaDelCirculo = (valueInputCirculo * 2) * PI;
    const redondeo = (circunferenciaDelCirculo).toFixed(2);
   
    alert(redondeo)
}

// Calculamos àrea del circulo
function areaCirculo(radio){
    const PI = Math.PI;
    return (radio * radio) * PI;
}

function calcularAreaCirculo(){
    const PI = Math.PI;
    const inputCirculo = document.getElementById("inputCirculo");
    const valueInputCirculo = inputCirculo.value;
    
    const diametro = valueInputCirculo * 2;
    const areaDelCirculo = diametro * diametro * PI;
    const redondeo = (areaDelCirculo).toFixed(2);

    alert(redondeo)
}

console.groupEnd();