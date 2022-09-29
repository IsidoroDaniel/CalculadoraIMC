const formulario = document.getElementById('form')

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso) {
        resultado('Peso Invalido!', false);
        return;
    }

    if(!altura){
        resultado('Altura Invalida!', false)
        return;
    }
    
    const imc = calcImc(peso, altura);
    const nivelImc = indexImc(imc);

    const msg = `Seu IMC é: ${imc} (${nivelImc}).`

    resultado(msg, true);

});

function calcImc (peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function indexImc (imc){
   const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
   'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

   if(imc >= 40) return nivel[4];
   if(imc >= 34.9) return nivel[3];
   if(imc >= 29.9) return nivel[2]; 
   if(imc >= 24.9) return nivel[1]; 
   if(imc >= 18.5) return nivel[0];  

}

function createP (){
    const p = document.createElement('p');
    return p    
}

function resultado(msg, isValid){
   const resultado = document.getElementById('resultado');
   resultado.innerHTML = '';

   const p = createP()

   if(isValid) {
    p.classList.add('valido');
   }else {
    p.classList.add('invalido');
   }

   p.innerHTML = msg;
   resultado.appendChild(p);
}

