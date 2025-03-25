export function decodedResistorValue(params) {
    const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
    const [a, b, c] = params;
    const ia = colors.indexOf(a);
    const ib = colors.indexOf(b);
    const ic = colors.indexOf(c);
    const value = (ia * 10 + ib) * (10 ** ic);
    if (value >= 1000) {
        return `${value / 1000} kiloohms`;
    }
    return value + ' ohms';
}
