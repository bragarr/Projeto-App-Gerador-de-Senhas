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
let apoioSinal = 1;

grupoCaracteres.forEach(grupo => {
    grupo.addEventListener("click", () => {
        
    })
})

function atualizaQuantidadeCaracteresSenha() {
    let quantidade = document.getElementById("qty");
    let valor = document.getElementById("quantidade__caracteres").value;
    quantidade.innerHTML = valor;
}

function verificacaoSelecaoUsuario() {
    grupoCaracteres.forEach(grupo => {
        if(grupo.checked) {
            grupoCaracteresGerarSenha.push((grupo.value)*1);
        }
    });
}

function gerarSenha() {
    verificacaoSelecaoUsuario();
    if(grupoCaracteresGerarSenha != "") {
        let quantidade = document.getElementById("qty").innerHTML;
        for(let i=0; senhaUsuario.length < quantidade; i++) {
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


executaAplicativo();
atualizaQuantidadeCaracteresSenha();
document.addEventListener("change", atualizaQuantidadeCaracteresSenha);