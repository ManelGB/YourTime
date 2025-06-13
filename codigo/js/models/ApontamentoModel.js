class ApontamentoModel {
    static getAll() {
        return JSON.parse(localStorage.getItem('apontamentos') || '[]');
    }

    static save(apontamento) {
        const apontamentos = ApontamentoModel.getAll();
        apontamentos.push(apontamento);
        localStorage.setItem('apontamentos', JSON.stringify(apontamentos));
    }

    static update(index, novoApontamento) {
        const apontamentos = ApontamentoModel.getAll();
        apontamentos[index] = novoApontamento;
        localStorage.setItem('apontamentos', JSON.stringify(apontamentos));
    }

    static delete(index) {
        const apontamentos = ApontamentoModel.getAll();
        apontamentos.splice(index, 1);
        localStorage.setItem('apontamentos', JSON.stringify(apontamentos));
    }

    static validar(apontamento) {
        const msgs = [];
        const dataAtual = new Date();
        const diaAgora = dataAtual.toISOString().split('T')[0];
        const horaAgora = dataAtual.toTimeString().slice(0,5);

        if (diaAgora < apontamento.data) {
            msgs.push("Não é possível registrar um ponto futuro.");
        }
        if (horaAgora < apontamento.horaInicio) {
            msgs.push("Não é possível cadastrar uma hora inicial posterior do que a hora atual.");
        }
        if (horaAgora < apontamento.horaFim) {
            msgs.push("Não é possível cadastrar uma hora final posterior do que a hora atual.");
        }
        return msgs;
    }
}