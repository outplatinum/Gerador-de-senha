# 🔐 Gerador de Senhas - 5 Algoritmos

Um gerador de senhas aleatórias com interface web moderna, oferecendo 5 algoritmos diferentes para criar senhas seguras.

## 📋 Estrutura do Projeto

```
Gerador-de-senha/
├── index.html          # Estrutura HTML
├── style.css           # Estilos CSS
├── script.js           # Lógica JavaScript
├── gerador_senhas.py   # Versão em Python
└── README.md           # Este arquivo
```

## 🚀 Funcionalidades

### 5 Algoritmos de Geração

1. **Algoritmo 1 - Básico**: Usa random com letras, dígitos e caracteres especiais
2. **Algoritmo 2 - Seguro**: Usa crypto (criptograficamente seguro) para melhor segurança
3. **Algoritmo 3 - Personalizado**: Garante 1 maiúscula, 1 minúscula, 1 dígito e 1 especial
4. **Algoritmo 4 - Palavras**: Alterna consoantes, vogais e dígitos
5. **Algoritmo 5 - Hexadecimal**: Usa hex (0-9, A-F) com caracteres especiais

### Recursos

- ✨ Interface moderna e responsiva
- 🎨 Design com gradientes e animações
- 📱 Funciona em desktop e mobile
- 🔒 Cópia para área de transferência com feedback
- 🎛️ Controle de comprimento (8-32 caracteres)
- ⚡ Gerar todas as senhas de uma vez
- 📚 Descrição de cada algoritmo

## 🎯 Como Usar

### Via Web

1. Abra `index.html` em seu navegador
2. Ajuste o comprimento da senha usando o slider
3. Clique em um dos botões de algoritmo para gerar
4. Ou clique em "Gerar Todas as Senhas"
5. Copie a senha com o botão "Copiar"

### Via Python

```bash
python gerador_senhas.py
```

Siga as instruções no terminal para gerar senhas.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos com gradientes e animações
- **JavaScript**: Lógica de geração e interatividade
- **Crypto API**: Para geração segura de números aleatórios

## 📦 Instalação

Não há dependências! Basta abrir o arquivo `index.html` no navegador.

```bash
# Clone o repositório
git clone https://github.com/outplatinum/Gerador-de-senha.git

# Entre no diretório
cd Gerador-de-senha

# Abra index.html em seu navegador (ou use um servidor local)
python -m http.server 8000
# Acesse http://localhost:8000
```

## 🎨 Personalização

### Modificar Caracteres

Edite o objeto `CARACTERES` em `script.js`:

```javascript
const CARACTERES = {
    maiusculas: 'ABC...', // Adicione seus caracteres
    // ...
};
```

### Modificar Cores

Edite as variáveis CSS em `style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... */
}
```

## 📝 Exemplos de Senhas

| Algoritmo | Exemplo (12 caracteres) |
|-----------|------------------------|
| Básico | `K7@mPq#9Rz2L` |
| Seguro | `B5$tX!w4Yv8N` |
| Personalizado | `9Ax@kL3mP#sT` |
| Palavras | `BeD5NuF7SaP9` |
| Hexadecimal | `A#E3F@7C9D%2` |

## ⚠️ Aviso de Segurança

- Use o **Algoritmo 2 (Seguro)** para senhas críticas
- Nunca reutilize senhas
- Use um gerenciador de senhas
- Altere senhas regularmente

## 📄 Licença

Este projeto está disponível sob a licença MIT.

## 👨‍💻 Autor

**outplatinum** - [GitHub](https://github.com/outplatinum)

## 🤝 Contribuições

Contribuições são bem-vindas! Faça um fork do projeto e abra uma pull request.

---

**Desenvolvido com ❤️ para segurança digital**
