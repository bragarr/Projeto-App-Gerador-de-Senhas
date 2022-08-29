const tamanhoSenha = (document.getElementById('qty').innerHTML)*1;
const botaoGeraSenha = document.querySelector('button');
const telaAplicativo = document.getElementById('tela');
const grupoCaracteres = document.querySelectorAll(".grupo__caracteres");
const grupoCaracteresGerarSenha = [];
let senhaUsuario = "";
const formacaoSenha = [
    {
        caracteres: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    },
    {
        caracteres: "abcdefghijklmnopqrstuvwxyz"
    },
    {
        caracteres: "0123456789"
    },
    {
        caracteres: "!#$%&*+-/<>?@[]^~"
    }
]
const checkMaiusculas = document.getElementById("maiusculas");
const checkMinusculas = document.getElementById("minusculas");
const checkNumeros = document.getElementById("numeros");
const checkSimbolos = document.getElementById("simbolos");


function opcaoSelecionadaPeloUsuario() {
    
}


function verificacaoSelecaoUsuario() {
    grupoCaracteres.forEach(grupo => {
        if(grupo.checked) {
            grupoCaracteresGerarSenha.push((grupo.value)*1);
        }
    });
}

function gerarSenha() {
    if(grupoCaracteresGerarSenha != "") {
        for(let i=0; senhaUsuario.length < tamanhoSenha; i++) {
            let j = Math.floor(Math.random()*formacaoSenha.length);
            if(grupoCaracteresGerarSenha.includes(j)) {
                let caracterAleatorio = formacaoSenha[j].caracteres[Math.floor(Math.random()*formacaoSenha[j].caracteres.length)];
                if(senhaUsuario.includes(caracterAleatorio)) {
                    senhaUsuario = senhaUsuario;
                } else {
                    senhaUsuario += caracterAleatorio;
                }
            } else {
                continue;
            } 
        }
    } else {
        alert("Operação Inválida! Por favor selecione ao menos um grupo de caracteres!");
    }
}

function executaAplicativo() {
    botaoGeraSenha.addEventListener("click", function() {
        limpaTela();
        gerarSenha();
        telaAplicativo.value = senhaUsuario;
    })
}

function limpaTela() {
    telaAplicativo.value = "";
    senhaUsuario = "";
}

verificacaoSelecaoUsuario();
executaAplicativo();
