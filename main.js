const display = document.querySelector("#display"); //O querySelector retorna o primeiro elemento dentro do documento.
const buttons = document.querySelectorAll("button"); //Retorna uma lista de elementos presentes no documento.

//const é uma constante. Começamos geralmente um programa com uma variável ou uma constante. Após isso vem o nome da constante. Que poderia ter qualquer nome. 
// que valor essa constante irá guardar? Guarda uma informação para usar posteriormente. Quando eu vou puxar um documento sempre inicío com document.
// o que irá ser selecionado nesse caso? a ID. display. 

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id;
        }
    })
})
