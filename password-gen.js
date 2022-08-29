const simbolos = "!#$%&*+-/<>?@[]^~";
const letrasUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const letrasLow = "abcdefghijklmnopqrstuvwxyz"
const numbers = "1234567890";
const tamanhoSenha = 10;

let checkbox = document.querySelector();

if(checkbox.checked) {
    console.log("O cliente marcou o checkbox");
} else {
    console.log("O cliente não marcou o checkbox");
}

const caracteres = [simbolos, letrasUpper, letrasLow, numbers];

const formacaoUsuario = caracteres[1] + caracteres[3];

console.log(formacaoUsuario);



const formacaoSenha = [
    {
        conteudo: "!#$%&*+-/<>?@[]^~"
    },
    {
        conteudo: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    {
        conteudo: "abcdefghijklmnopqrstuvwxyz"
    },
    {
        conteudo: "0123456789"
    }
]

let senhaUsuario = "";

function gerarSenha() {
    for(let i=0; senhaUsuario.length < tamanhoSenha; i++) {
        let j = Math.floor(Math.random()*4)
        senhaUsuario += formacaoSenha[j].conteudo[Math.floor(Math.random()*formacaoSenha[j].conteudo.length)]
    }
}

gerarSenha();

console.log(senhaUsuario)