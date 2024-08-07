function procuraSobremesa(sobremesas, valorDoInput) {
  /* Desenvolva sua lógica a partir aqui */
  let x = sobremesas.filter(element =>{
    return element.nome.toLowerCase().includes(valorDoInput.toLowerCase())
  })
  /* É necessário retornar uma lista de produtos */
  return x; 

}
