// const { sum } = require('./app.js');

// test('adds 7+5 to equal 12', () => {
//     let total = sum(7,5);
//     expect(total).toBe(12);
// });

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.262 japan yens", function() {
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(20)).toBe(2925.23);
});


test("Five yen should be 0.02 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(5)).toBe(0.03);
});