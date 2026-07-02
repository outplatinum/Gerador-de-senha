import random
import string
import secrets
from itertools import cycle

class GeradorSenha:
    """Classe para gerar senhas aleatórias usando diferentes algoritmos."""
    
    def __init__(self, comprimento=12):
        """
        Inicializa o gerador de senha.
        
        Args:
            comprimento: Comprimento da senha (padrão: 12)
        """
        self.comprimento = comprimento
    
    def algoritmo_1_basico(self):
        """
        Algoritmo 1: Básico
        Gera senha usando random.choice com caracteres alfanuméricos e especiais.
        """
        caracteres = string.ascii_letters + string.digits + string.punctuation
        senha = ''.join(random.choice(caracteres) for _ in range(self.comprimento))
        return senha
    
    def algoritmo_2_seguro(self):
        """
        Algoritmo 2: Seguro
        Gera senha usando secrets (criptograficamente seguro).
        """
        caracteres = string.ascii_letters + string.digits + string.punctuation
        senha = ''.join(secrets.choice(caracteres) for _ in range(self.comprimento))
        return senha
    
    def algoritmo_3_personalizado(self):
        """
        Algoritmo 3: Personalizado
        Gera senha garantindo pelo menos 1 maiúscula, 1 minúscula, 1 dígito e 1 caractere especial.
        """
        maius = string.ascii_uppercase
        minusc = string.ascii_lowercase
        digitos = string.digits
        especiais = string.punctuation
        
        senha = [
            secrets.choice(maius),
            secrets.choice(minusc),
            secrets.choice(digitos),
            secrets.choice(especiais)
        ]
        
        # Preenche o resto aleatoriamente
        todos_chars = maius + minusc + digitos + especiais
        senha += [secrets.choice(todos_chars) for _ in range(self.comprimento - 4)]
        
        # Embaralha a senha
        random.shuffle(senha)
        return ''.join(senha)
    
    def algoritmo_4_palavras(self):
        """
        Algoritmo 4: Baseado em Palavras
        Gera senha combinando números e caracteres especiais com padrão.
        """
        vogais = 'aeiouAEIOU'
        consoantes = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'
        digitos = string.digits
        
        senha = []
        padroes = cycle([consoantes, vogais, digitos])
        
        for _ in range(self.comprimento):
            chars_padroes = next(padroes)
            senha.append(secrets.choice(chars_padroes))
        
        return ''.join(senha)
    
    def algoritmo_5_hex(self):
        """
        Algoritmo 5: Hexadecimal
        Gera senha usando caracteres hexadecimais (0-9, A-F) com caracteres especiais.
        """
        hex_chars = string.hexdigits[:-6]  # Remove 'x' e 'X'
        especiais = string.punctuation
        
        senha = []
        for i in range(self.comprimento):
            if i % 3 == 0:
                senha.append(secrets.choice(especiais))
            else:
                senha.append(secrets.choice(hex_chars))
        
        return ''.join(senha)
    
    def gerar_todas(self):
        """
        Gera senhas usando todos os 5 algoritmos e retorna em um dicionário.
        
        Returns:
            Dict com as senhas geradas por cada algoritmo
        """
        return {
            'Algoritmo 1 (Básico)': self.algoritmo_1_basico(),
            'Algoritmo 2 (Seguro)': self.algoritmo_2_seguro(),
            'Algoritmo 3 (Personalizado)': self.algoritmo_3_personalizado(),
            'Algoritmo 4 (Palavras)': self.algoritmo_4_palavras(),
            'Algoritmo 5 (Hexadecimal)': self.algoritmo_5_hex()
        }


def main():
    """Função principal para demonstração."""
    print("=" * 60)
    print("GERADOR DE SENHAS - 5 ALGORITMOS DIFERENTES")
    print("=" * 60)
    
    comprimento = int(input("\nDigite o comprimento desejado para a senha (padrão: 12): ") or 12)
    
    gerador = GeradorSenha(comprimento)
    senhas = gerador.gerar_todas()
    
    print(f"\nSenhas geradas com {comprimento} caracteres:\n")
    
    for algoritmo, senha in senhas.items():
        print(f"{algoritmo}: {senha}")
    
    print("\n" + "=" * 60)
    
    # Opção de gerar mais senhas
    while True:
        opcao = input("\nDeseja gerar mais senhas? (s/n): ").lower()
        if opcao == 's':
            print("\n")
            senhas = gerador.gerar_todas()
            for algoritmo, senha in senhas.items():
                print(f"{algoritmo}: {senha}")
        elif opcao == 'n':
            print("Até logo!")
            break
        else:
            print("Opção inválida. Digite 's' ou 'n'.")


if __name__ == "__main__":
    main()
