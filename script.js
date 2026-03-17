function ColocarDadosNaTela(dados) {
    console.log(dados);

    if (!dados || !dados.current) {
        document.querySelector(".cidade").innerHTML = "Cidade não encontrada";
        return;
    }

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.location.name;
    document.querySelector(".temp").innerHTML = dados.current.temp_c + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.current.condition.text;
    document.querySelector(".Umidade").innerHTML = "Umidade: " + dados.current.humidity + "%";
    document.querySelector(".Vento").innerHTML = "Vento: " + dados.current.wind_kph + " km/h";
    document.querySelector(".img-previsao").src = "https:" + dados.current.condition.icon;
}

async function BuscarCidade(cidade) {
    const dados = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${cidade}&lang=pt&aqi=no`
    ).then(resposta => resposta.json());

    ColocarDadosNaTela(dados);
}

function CliqueinoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    BuscarCidade(cidade);
}