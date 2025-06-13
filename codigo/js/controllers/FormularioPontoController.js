document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById("formularioPonto");

    form.addEventListener("submit", function(event){
        event.preventDefault();
        FormularioPontoView.limparErros();

        const dados = new FormData(form);
        const apontamento = {
            data: dados.get("data"),
            horaInicio: dados.get("horaInicio"),
            horaFim: dados.get("horaFim"),
            intervalo: dados.get("intervalo"),
            anotacoes: dados.get("anotacoes")
        };

        const msgs = ApontamentoModel.validar(apontamento);

        if (msgs.length > 0) {
            FormularioPontoView.mostrarErros(msgs);
        } else {
            ApontamentoModel.save(apontamento);
            form.reset();
            window.location.href = "HistoricoApontamento.html";
        }
    });
});