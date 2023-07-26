let qntRodas, pesoBruto, qntPessoas, catHabilitação;
/*
A: Moto e triciclo - duas ou três rodas

B: Carros e vans pequenas - peso bruto total não exceda a 3.500 kg e cuja lotação **não exceda a 8 lugares**, incluindo o motorista, 

C: Caminhão, Caminhonete e vans grandes - ultrapassam os 3.5 mil kg, como **caminhão, caminhonete e vans de passageiros**, porém, não pode ultrapassar os 6 mil kg

D: Ônibus - **autorizado a fazer o transporte de passageiros**, cuja lotação **exceda a 8 lugares**, incluindo o do motorista.

E: Reboque, Trailer, etc. - se enquadre nas categorias B, C ou D e cuja unidade acoplada, reboque, semirreboque, trailer ou articulada tenha 6 mil kg ou mais de peso bruto total, ou cuja lotação **exceda a 8 lugares**
*/

qntRodas = Number(prompt('Informe a quantidade de rodas do seu veículo:'))
if (qntRodas >= 4) {
    pesoBruto = Number(prompt('Informe o peso bruto (em kg) do seu veículo: '))
    qntPessoas = Number(prompt('Informe a capacidade de pessoas do seu veículo: '))
    
    if (qntPessoas > 8) {
        catHabilitação = 'D'
    } else {
        if (pesoBruto <= 3500) {
            catHabilitação = 'B'   
        } else if (pesoBruto <= 6000) {
            cathabilitação = 'C'
        }
    }
	 if (pesoBruto > 6000 || qntPessoas > 8)  {
            catHabilitação = 'E'
        } 
} else {
	catHabilitação = 'A'
}
console.log('Categoria da Habilitação: ' + catHabilitação)