let usuario = document.getElementById("username");
class livro {
    constructor(titulo, numero) {
        this.titulo = titulo;
        this.numero = numero;
    }
}
class biblioteca {
    constructor() {
        this.livros = [];
    }
}
arrayLivros = [
    { titulo: "Dom Casmurro", numero: 0 },
    { titulo: "1984", numero: 1 },
    { titulo: "O Pequeno Príncipe", numero: 2 },
    { titulo: "O Senhor dos Anéis", numero: 3 },
    { titulo: "Harry Potter", numero: 4 },
    { titulo: "O Alquimista", numero: 5 },
    { titulo: "A Menina que Roubava Livros", numero: 6 },
    { titulo: "O Código Da Vinci", numero: 7 },
    { titulo: "O Hobbit", numero: 8 },
    { titulo: "O Morro dos Ventos Uivantes", numero: 9 }
];
    
    function pegarEmprestado() {
    // 1. Pegamos o índice (número da posição)
    let seletor = document.getElementById("livroSelect");
    let indice = seletor.selectedIndex; 
    
    // 2. Pegamos o nome do usuário
    let usuario = document.getElementById("username").value;

    // 3. Pegamos o título do livro usando o índice no nosso array
    let tituloLivro = arrayLivros[indice].titulo;

    // 4. Exibimos o alerta
    alert(`O usuário ${usuario} pegou emprestado o livro: ${tituloLivro}`);

    // 5. Removemos a opção do HTML usando o índice que salvamos
    seletor.options[indice].remove();
    
    // Limpa o nome do usuário
    document.getElementById("username").value = "";
    
    // Volta o menu pro primeiro item
    document.getElementById("livroSelect").selectedIndex = 0;
}
