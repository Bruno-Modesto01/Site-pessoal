document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("toggle-theme");
    const body = document.body;
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        botao.textContent = "Modo Escuro";
    } else {
        botao.textContent = "Modo Claro";
    }
    botao.addEventListener("click", function() {
        body.classList.toggle("light-mode");
        if (body.classList.contains("light-mode")){
            localStorage.setItem("theme", "light");
            botao.textContent = "Modo Claro";
        } else {
            localStorage.setItem("theme", "light");
            botao.textContent = "Modo Escuro"
        }
    });
});

document.addEventListener("DOMContentLoaded", function(){
    const texto = "Bruno Modesto";
    let index = 0;
    function digitar() {
        if (index < texto.length) {
            document.getElementById("titulo").innerHTML += texto.charAt(index);
            index++;
            setTimeout(digitar, 180);
        }
    }
    digitar();
});