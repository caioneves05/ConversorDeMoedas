var valorEmDolarTexto = prompt("Qual o valor em reais você quer convrter em dólar?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealFixado =('O valor de R$' ) + valorEmDolarTexto + (', se for convertido fica U$') + valorEmReal.toFixed(2)

alert(valorEmRealFixado) 
