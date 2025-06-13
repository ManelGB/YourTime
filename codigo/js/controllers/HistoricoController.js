document.addEventListener('DOMContentLoaded', () => {
    function atualizarHistorico() {
        const apontamentos = ApontamentoModel.getAll();
        HistoricoView.render(apontamentos);
    }

    document.querySelector('.cards-container').addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            const index = e.target.dataset.index;
            ApontamentoModel.delete(index);
            atualizarHistorico();
        }
        // Adicione lógica para editar se desejar
    });

    atualizarHistorico();
});document.addEventListener('DOMContentLoaded', () => {
    function atualizarHistorico() {
        const apontamentos = ApontamentoModel.getAll();
        HistoricoView.render(apontamentos);
    }

    document.querySelector('.cards-container').addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            const index = e.target.dataset.index;
            ApontamentoModel.delete(index);
            atualizarHistorico();
        }
        // Adicione lógica para editar se desejar
    });

    atualizarHistorico();
});