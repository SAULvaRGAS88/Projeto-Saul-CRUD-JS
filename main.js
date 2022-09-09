let produtos = []
let newId = 0;

function geradorId(){
    return ++newId
}

function listarProdutos(){
    return produtos
}

function buscarPorId(id){
    for (let produto of produtos){
        if (produto.id == id){
            return produto
        }
    }
    console.log("Erro", "ID não enconado")
    
}
function atualizar(id, produtoAlterado) {
    for (let produto of produtos) {
        if (produto.id == id) {
            produto.nome = produtoAlterado.nome
            produto.preco = produtoAlterado
        }
    }
}

function deletar(id) {
    let i = 0
    for (i in produtos) {
        if (produtos[i].id == id) {
            break
        }
    }
    if (i < produtos.length) {
        produtos.splice(i, 1)
    }
}

// ---------------------------------------------------------------------
// main

// inserindo produtos

inserirProduto = (id, nome, valor)=>{
    produtos.push({'id':id,'produto':nome,'valor':valor})
}
inserirProduto(geradorId(), 'Sandalha', 65);
inserirProduto(geradorId(), 'Sapato', 79);
inserirProduto(geradorId(), 'Chinelo', 65);
console.log("--------------------------- PRODUTOS INSERIDOS")

// listando produtos
console.log(listarProdutos())
console.log("--------------------------- LISTANDO PRODUTOS")

//localizar item por ID
console.log(buscarPorId(1))
console.log("--------------------------- LOCALIZANDO POR ID ESPECIFICO")

//atualizar item por ID
atualizar(1, {valor: 95 })
console.log(listarProdutos())
console.log("--------------------------- ATUALIZANDO POR ID")

//deletar item por ID
deletar(2)
console.log(listarProdutos())
console.log("--------------------------- DELETANDO POR ID")