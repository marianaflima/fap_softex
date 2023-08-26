let pedidos = [
    {id:420, 'nome':'Dener', 'alimento':'Sandubão de Bacon', 'bebida':'Suco de Limão'},
    {id:152, 'nome':'Naiady', 'alimento':'Sandubão Vegano', 'bebida':'Suco de Laranja'},
    {id:29, 'nome':'Márcio', 'alimento':'Coxinha', 'bebida':'Suco de Uva'},
    {id:33, 'nome':'Isabel', 'alimento':'Sandubão de Picanha', 'bebida':'Refrigerante'},
    {id:55, 'nome':'José', 'alimento':'Pizza', 'bebida':'Refrigerante'}
]

findPedido = pedidos.find(pedido => pedido.id === 33)

console.log(findPedido)