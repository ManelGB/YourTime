class HistoricoView {
    static render(apontamentos) {
        const container = document.querySelector('.cards-container');
        container.innerHTML = '';
        apontamentos.forEach((apontamento, index) => {
            const cardObj = new TimeCard(apontamento);
            const saldo = cardObj.getSaldoFormatado();
            const saldoClass = cardObj.isPositivo() ? "positive" : "negative";
            const card = document.createElement('div');
            card.className = 'time-card';
            card.innerHTML = `
                <div class="card-header">
                    <span class="card-date">${cardObj.data}</span>
                    <span class="card-balance ${saldoClass}">${saldo}</span>
                </div>
                <div class="card-info">
                    <span>Início: ${cardObj.horaInicio}</span> |
                    <span>Fim: ${cardObj.horaFim}</span> |
                    <span>Intervalo: ${cardObj.intervalo}</span>
                </div>
                <div class="card-actions">
                    <button class="action-button edit" data-index="${index}">Editar</button>
                    <button class="action-button delete" data-index="${index}">Excluir</button>
                </div>
            `;
            container.appendChild(card);
        });
    }
}