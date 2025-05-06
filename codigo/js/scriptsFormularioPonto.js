var form = document.getElementById("formularioPonto");

form.addEventListener("submit", function(event){
    event.preventDefault();
    var dados = new FormData(form);
    var ul = document.getElementById("validacao")
    ul.innerHTML = ""

    var msgs = []

    var dataAtual = new Date(),
     diaAgora = dataAtual.toLocaleDateString("pt-BR", {timeZone: "America/Sao_Paulo"}).split("/").reverse().join("-"),
     horaAgora = dataAtual.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

    var horaInicio = dados.get("horaInicio"),
        horaFim = dados.get("horaFim"),
        dataApont = dados.get("data");

        console.log("diaAgora: "+diaAgora)
        console.log("horaAgora: "+horaAgora)
        console.log("horaInicio: "+horaInicio)
        console.log("horaFim: "+horaFim)    
        console.log("dataApont: "+dataApont)

        if(diaAgora < dataApont){
            document.getElementById("data").classList.add("error")
            msgs.push("Não é possível registrar um ponto futuro.")
        }
        if(horaAgora < horaInicio){
            document.getElementById("horaInicio").classList.add("error")
            msgs.push("Não é possível cadastrar uma hora inicial posterior do que a hora atual.")
        }
        if(horaAgora < horaFim){
            document.getElementById("horaFim").classList.add("error")
            msgs.push("Não é possível cadastrar uma hora final posterior do que a hora atual.")
        }
    
    if(msgs.length > 0){
        ul.classList.remove("off")
        msgs.forEach(function(msg){
            var li = document.createElement("li")
            li.textContent = msg
            ul.appendChild(li)
        })
    }else{
        ul.classList.add("off")
        form.submit()
    }
})