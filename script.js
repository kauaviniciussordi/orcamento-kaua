    let produtos = [];
    let nome=document.getElementById("nome");
    let preco=document.getElementById("preco")
    let quantidade=document.getElementById("quantidade")
    let botao=document.getElementById("botao")
    let resultado=document.getElementById("resultado")

    function adicionar (){
        const produto={
            nome:nome.value , 
            preco:Number(preco.value),
            quantidade: Number(quantidade.value)
        }
        produtos.push(produto);

        resultado.innerHTML=''
        let soma=0
        produtos.forEach(p=>{
            const total= p.preco*p.quantidade
            soma+=total
            resultado.innerHTML+=`<p>${p.nome} ${p.preco}${p.quantidade}${p.total}`
       
        })

    }