document.getElementById('form');

    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        document.getElementById('result').innerHTML = 'Não há soluções reais.';
    } else if (delta === 0) {
        const x = -b / (2 * a);
        document.getElementById('result').innerHTML = `A solução é x = ${x}.`;
    } else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        document.getElementById('result').innerHTML = `As soluções são x1 = ${x1} e x2 = ${x2}.`;
    }
});
