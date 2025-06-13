class FormularioPontoView {
    static mostrarErros(msgs) {
        const ul = document.getElementById("validacao");
        ul.innerHTML = "";
        ul.classList.remove("off");
        msgs.forEach(msg => {
            const li = document.createElement("li");
            li.textContent = msg;
            ul.appendChild(li);
        });
    }

    static limparErros() {
        const ul = document.getElementById("validacao");
        ul.innerHTML = "";
        ul.classList.add("off");
    }
}