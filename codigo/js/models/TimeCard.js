class TimeCard {
    constructor({ data, horaInicio, horaFim, intervalo, anotacoes }) {
        this.data = data;
        this.horaInicio = horaInicio;
        this.horaFim = horaFim;
        this.intervalo = intervalo || "00:00";
        this.anotacoes = anotacoes || "";
    }

    // Converte "HH:MM" para minutos
    static toMinutes(hora) {
        if (!hora) return 0;
        const [h, m] = hora.split(":").map(Number);
        return h * 60 + m;
    }

    // Calcula saldo em minutos
    getSaldoMinutos() {
        const inicio = TimeCard.toMinutes(this.horaInicio);
        const fim = TimeCard.toMinutes(this.horaFim);
        const intervalo = TimeCard.toMinutes(this.intervalo);
        return fim - inicio - intervalo;
    }

    // Retorna saldo formatado (+/-HH:MM)
    getSaldoFormatado() {
        const saldoMin = this.getSaldoMinutos() - 480; // 480 min = 8h
        const sinal = saldoMin >= 0 ? "+" : "-";
        const absMin = Math.abs(saldoMin);
        const horas = String(Math.floor(absMin / 60)).padStart(2, "0");
        const minutos = String(absMin % 60).padStart(2, "0");
        return `${sinal}${horas}:${minutos}`;
    }

    // Retorna se o saldo é positivo
    isPositivo() {
        return this.getSaldoMinutos() >= 480;
    }
}