let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = (dollar) => {
    let oneDollarToEur = 1/oneEuroIs.USD
    let eur = dollar * oneDollarToEur
    return Number((eur * oneEuroIs.JPY).toFixed(2)) 
}

const fromYenToPound = (yen) => {
    let oneYenToEuro = 1/oneEuroIs.JPY
    let eur = yen * oneYenToEuro
    return Number((eur * oneEuroIs.GBP).toFixed(2))
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };