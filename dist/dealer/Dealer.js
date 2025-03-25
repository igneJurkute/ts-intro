export class Dealer {
    name;
    currency;
    constructor(name, currency) {
        this.name = name;
        this.currency = currency ?? 'USD';
        console.log(`Hi, my name is ${name}!`);
    }
    formatPrice(price) {
        if (price % 1 === 0) {
            return `${(price / 1000).toFixed(3)} ${this.currency}`;
        }
        if (price < 1000) {
        }
        // 0.99 -> 0,99
        // 999.99 -> 999,99
        // 5100.99 -> 5.100,99
        // tukstanciai + . + simtai + , + centai
        return `${price} ${this.currency}`;
    }
    getCar(carName, carPrice) {
        return `New car everyone! ${carName} for only ${this.formatPrice(carPrice)}!`;
    }
}
