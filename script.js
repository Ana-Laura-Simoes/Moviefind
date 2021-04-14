buscardados();

function buscardados(){
    const promessa=axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");
    promessa.then(pegardados);
}

function pegardados (resposta){
    const dados = resposta.data;
    console.log(dados)
    for (let i=0;i<dados.length;i++ ){
        colocarfilme(dados, i)
    }
}


function colocarfilme(dados,posicao){
    elemento=document.querySelector(".movies");
    console.log(elemento);
    elemento.innerHTML +=`<div class="movie" onclick="comprar()">
    <img src=${dados[posicao].imagem}>
    <div class="title">${dados[posicao].titulo}</div>
    <button>
      Comprar
      <ion-icon name="cart-outline"></ion-icon>
    </button>
  </div>`
}

function comprar(){
    const nome=prompt("Informe seu nome:");
    const assentos=prompt("Quantos assentos você deseja comprar?");
    const dados={
        nome: nome,
        quantidade: assentos
    }
    const requisicao = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${dados}/ingresso`, dados)
    requisicao.then(sucesso);
    requisicao.catch(falha); 
}

function sucesso(){
    alert("Ingresos comprados com sucesso!");
}
function falha(){
    alert("Os ingressos para este filme estão esgotados!");
}