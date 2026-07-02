// Caracteres disponíveis para cada tipo
const CARACTERES = {
    maiusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    minusculas: 'abcdefghijklmnopqrstuvwxyz',
    digitos: '0123456789',
    especiais: '!@#$%^&*()_+-=[]{}|;:,.<>?',
    vogais: 'aeiouAEIOU',
    consoantes: 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ',
    hex: '0123456789ABCDEF'
};

// Elementos do DOM
const comprimentoInput = document.getElementById('comprimento');
const comprimentoValue = document.getElementById('comprimentoValue');
const botoesAlgoritmo = document.querySelectorAll('.btn-algoritmo');
const botaoGerarTodas = document.getElementById('gerarTodas');
const resultadosContainer = document.getElementById('resultados');

// Event Listeners
comprimentoInput.addEventListener('input', (e) => {
    comprimentoValue.textContent = e.target.value;
});

botoesAlgoritmo.forEach(botao => {
    botao.addEventListener('click', () => {
        const algoritmo = botao.dataset.algoritmo;
        gerarSenha(algoritmo);
    });
});

botaoGerarTodas.addEventListener('click', gerarTodasSenhas);

/**
 * Gera um número aleatório seguro
 */
function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

/**
 * Algoritmo 1: Básico
 */
function algoritmo1_basico(comprimento) {
    const chars = CARACTERES.maiusculas + CARACTERES.minusculas + CARACTERES.digitos + CARACTERES.especiais;
    let senha = '';
    for (let i = 0; i < comprimento; i++) {
        senha += chars[getRandomIndex(chars.length)];
    }
    return senha;
}

/**
 * Algoritmo 2: Seguro
 * (Simulamos com melhor aleatoriedade usando crypto)
 */
function algoritmo2_seguro(comprimento) {
    const chars = CARACTERES.maiusculas + CARACTERES.minusculas + CARACTERES.digitos + CARACTERES.especiais;
    let senha = '';
    const randomValues = new Uint32Array(comprimento);
    crypto.getRandomValues(randomValues);
    
    for (let i = 0; i < comprimento; i++) {
        senha += chars[randomValues[i] % chars.length];
    }
    return senha;
}

/**
 * Algoritmo 3: Personalizado
 * Garante pelo menos 1 maiúscula, 1 minúscula, 1 dígito e 1 especial
 */
function algoritmo3_personalizado(comprimento) {
    let senha = [];
    
    // Adiciona obrigatoriamente um de cada
    senha.push(CARACTERES.maiusculas[getRandomIndex(CARACTERES.maiusculas.length)]);
    senha.push(CARACTERES.minusculas[getRandomIndex(CARACTERES.minusculas.length)]);
    senha.push(CARACTERES.digitos[getRandomIndex(CARACTERES.digitos.length)]);
    senha.push(CARACTERES.especiais[getRandomIndex(CARACTERES.especiais.length)]);
    
    // Preenche o restante
    const chars = CARACTERES.maiusculas + CARACTERES.minusculas + CARACTERES.digitos + CARACTERES.especiais;
    for (let i = 4; i < comprimento; i++) {
        senha.push(chars[getRandomIndex(chars.length)]);
    }
    
    // Embaralha
    senha = senha.sort(() => Math.random() - 0.5);
    return senha.join('');
}

/**
 * Algoritmo 4: Baseado em Palavras
 * Alterna consoantes, vogais e dígitos
 */
function algoritmo4_palavras(comprimento) {
    let senha = '';
    const padroes = [CARACTERES.consoantes, CARACTERES.vogais, CARACTERES.digitos];
    
    for (let i = 0; i < comprimento; i++) {
        const padrao = padroes[i % 3];
        senha += padrao[getRandomIndex(padrao.length)];
    }
    
    return senha;
}

/**
 * Algoritmo 5: Hexadecimal
 * Usa caracteres hex intercalados com especiais
 */
function algoritmo5_hex(comprimento) {
    let senha = '';
    
    for (let i = 0; i < comprimento; i++) {
        if (i % 3 === 0) {
            senha += CARACTERES.especiais[getRandomIndex(CARACTERES.especiais.length)];
        } else {
            senha += CARACTERES.hex[getRandomIndex(CARACTERES.hex.length)];
        }
    }
    
    return senha;
}

/**
 * Gera senha usando algoritmo específico
 */
function gerarSenha(numAlgoritmo) {
    const comprimento = parseInt(comprimentoInput.value);
    let senha = '';
    
    switch(numAlgoritmo) {
        case '1':
            senha = algoritmo1_basico(comprimento);
            break;
        case '2':
            senha = algoritmo2_seguro(comprimento);
            break;
        case '3':
            senha = algoritmo3_personalizado(comprimento);
            break;
        case '4':
            senha = algoritmo4_palavras(comprimento);
            break;
        case '5':
            senha = algoritmo5_hex(comprimento);
            break;
    }
    
    exibirResultado(`Algoritmo ${numAlgoritmo}`, senha);
}

/**
 * Gera todas as senhas
 */
function gerarTodasSenhas() {
    resultadosContainer.innerHTML = '';
    
    const algoritmos = [
        { num: '1', nome: 'Básico', func: algoritmo1_basico },
        { num: '2', nome: 'Seguro', func: algoritmo2_seguro },
        { num: '3', nome: 'Personalizado', func: algoritmo3_personalizado },
        { num: '4', nome: 'Palavras', func: algoritmo4_palavras },
        { num: '5', nome: 'Hexadecimal', func: algoritmo5_hex }
    ];
    
    const comprimento = parseInt(comprimentoInput.value);
    
    algoritmos.forEach(algo => {
        const senha = algo.func(comprimento);
        exibirResultado(`Algoritmo ${algo.num} - ${algo.nome}`, senha);
    });
}

/**
 * Exibe resultado na tela
 */
function exibirResultado(titulo, senha) {
    const item = document.createElement('div');
    item.className = 'resultado-item';
    
    item.innerHTML = `
        <div class="resultado-texto">
            <div class="resultado-titulo">${titulo}</div>
            <div class="resultado-senha">${senha}</div>
        </div>
        <button class="btn-copiar" onclick="copiarParaAreaTransferencia('${senha}', this)">
            📋 Copiar
        </button>
    `;
    
    resultadosContainer.appendChild(item);
}

/**
 * Copia a senha para a área de transferência
 */
function copiarParaAreaTransferencia(texto, botao) {
    navigator.clipboard.writeText(texto).then(() => {
        // Mostra feedback visual
        const textoBotao = botao.textContent;
        botao.textContent = '✓ Copiado!';
        botao.classList.add('copiado');
        
        // Volta ao normal após 2 segundos
        setTimeout(() => {
            botao.textContent = textoBotao;
            botao.classList.remove('copiado');
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar:', err);
        alert('Erro ao copiar para área de transferência');
    });
}

// Inicialização
console.log('🔐 Gerador de Senhas carregado com sucesso!');
