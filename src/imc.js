function calcularIMC (peso, altura){
    if (altura === 0){
        return 'NaN'; //Retorna caso a altura seja 0, não preenchida
    }

    const alturaMetros = altura / 100;
    const imc = (peso/(alturaMetros * alturaMetros)).toFixed(2);

    let categoria;

    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc < 29.9) {
        categoria = 'Sobrepeso';
    } else if (imc < 34.9) {
        categoria = 'Obesidade Grau I';
    } else {
        categoria = 'Obesidade Grau II';
    }

    return {imc: imc, categoria};
}

module.exports = {calcularIMC}; // Módulo responsavel pela exportação da função para coleta do teste

