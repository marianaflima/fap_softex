const filmesTarantino = [
    {nome: 'Bastardos Inglórios', lançamento: 2009},
    {nome: 'Pulp Fiction', lançamento: 1994},
    {nome: 'Kill Bill', lançamento: 2004},
    {nome: 'Quatro Quartos', lançamento: 1995},
    {nome: 'Sin City', lançamento: 2005},
    {nome: 'Era uma vez em... Hollywood', lançamento: 2019},
    {nome: 'Django Livre', lançamento: 2012},
    {nome: 'Cães de Aluguel', lançamento: 1992},
    {nome: 'Á prova de morte', lançamento: 2007},
    {nome: 'Kill Bill: Volume 1', lançamento: 2003}
    ]

const filmesAntes2000 = filmesTarantino.filter(filme => filme.lançamento < 2000);
console.log(filmesAntes2000);


