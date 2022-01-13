var numero_atual_wrapper = document.getElementById('numero_atual') //armazenando o valor na váriavel
var numero_atual = 0; //inicia o contador

//Alteração do HTML do número qe aparece na tela, passa a adicionar uma unidade ao numero anterior
function increment() {
    numero_atual = numero_atual + 1;
    numero_atual_wrapper.innerHTML = numero_atual;
}

//Alteração do HTML do número que aparece na tela, passa a subtrair uma unidade ao numero anterior
function decrement() {
    numero_atual = numero_atual - 1;
    numero_atual_wrapper.innerHTML = numero_atual;
}
