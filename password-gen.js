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
const botaoCopia = document.getElementById("icone__copiar");

const letraMaiscula = document.getElementById("maiusculas");
const letraMinuscula = document.getElementById("minusculas");
const numeros = document.getElementById("numeros");
const simbolos = document.getElementById("simbolos");

function atualizaQuantidadeCaracteresSenha() {
    let quantidade = document.getElementById("qty");
    let valor = document.getElementById("quantidade__caracteres").value;
    quantidade.innerHTML = valor;
}

function verificacaoSelecaoUsuario() {
    grupoCaracteres.forEach(grupo => {
        if(grupo.checked && grupoCaracteresGerarSenha.includes(grupo.value*1)===false) {
            grupoCaracteresGerarSenha.push((grupo.value)*1);
        } else if(grupo.checked === false) {
            for(let i = 0; i < grupoCaracteresGerarSenha.length; i++) {
                if(grupo.value*1 === grupoCaracteresGerarSenha[i]) {
                    grupoCaracteresGerarSenha.splice(i,1)
                }
            }
        }
    });
}

function gerarSenha() {
    verificacaoSelecaoUsuario();
    if(letraMaiscula.checked || letraMinuscula.checked || numeros.checked || simbolos.checked) {
        let quantidade = document.getElementById("qty").innerHTML;
        for(let i=0; senhaUsuario.length < quantidade; i++) {
            let j = Math.floor(Math.random()*formacaoSenha.length);
            if(grupoCaracteresGerarSenha.includes(j)) {
                let caracterAleatorio = formacaoSenha[j].caracteres[Math.floor(Math.random()*formacaoSenha[j].caracteres.length)];
                if(caracterAleatorio===senhaUsuario[senhaUsuario.length-1] || caracterAleatorio===senhaUsuario[senhaUsuario.length-2] || caracterAleatorio===senhaUsuario[senhaUsuario.length-3]) {
                    senhaUsuario = senhaUsuario;
                } else {
                    senhaUsuario += caracterAleatorio;
                }
            } else {
                continue;
            } 
        }
    } else {
        alert("Por favor selecione ao menos um grupo de caracteres!");
    }
}

function executaAplicativo() {
    botaoGeraSenha.addEventListener("click", function() {
        limpaTela();
        gerarSenha();
        telaAplicativo.value = senhaUsuario;
        forcaSenha();
    })
}

function limpaTela() {
    telaAplicativo.value = "";
    senhaUsuario = "";
}

function forcaSenha() {
    let intensidadeSenha = document.getElementById("intensidade__senha");
    if(grupoCaracteresGerarSenha.length === 1) {
        intensidadeSenha.innerHTML = "MUITO FRACA";
    } else if(telaAplicativo.value.length < 8 && grupoCaracteresGerarSenha.length === 2) {
        intensidadeSenha.innerHTML = "MUITO FRACA";
    } else if(telaAplicativo.value.length >= 8 && grupoCaracteresGerarSenha.length === 2) {
        intensidadeSenha.innerHTML = "FRACA";
    } else if(telaAplicativo.value.length < 8 && grupoCaracteresGerarSenha.length === 3) {
        intensidadeSenha.innerHTML = "MODERADA";
    } else if(telaAplicativo.value.length >= 8 && telaAplicativo.value.length <= 10 && grupoCaracteresGerarSenha.length === 3) {
        intensidadeSenha.innerHTML = "MODERADA";
    } else if(telaAplicativo.value.length > 10 && grupoCaracteresGerarSenha.length === 3) {
        intensidadeSenha.innerHTML = "FORTE";
    } else if(telaAplicativo.value.length < 6 && grupoCaracteresGerarSenha.length === 4) {
        intensidadeSenha.innerHTML = "MODERADA";
    } else if(telaAplicativo.value.length >= 6 && grupoCaracteresGerarSenha.length === 4) {
        intensidadeSenha.innerHTML = "FORTE";
    }  
}   

function copiaTexto() {
    if(telaAplicativo.value != "") {
        telaAplicativo.select();
        telaAplicativo.setSelectionRange(0, 999999);
        navigator.clipboard.writeText(telaAplicativo.value);
        alert("Senha Copiada");
    } else {
        console.log("Usuario Não realizou Operacao!");
    }
}

executaAplicativo();
atualizaQuantidadeCaracteresSenha();
document.addEventListener("change", atualizaQuantidadeCaracteresSenha);

botaoCopia.addEventListener("click", function() {
    copiaTexto();
})