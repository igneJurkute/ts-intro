export class Dealer {
    name: string;
    currency: string;

    constructor(name: string, currency?: string) {
        this.name = name;
        this.currency = currency ?? 'USD';
        console.log(`Hi, my name is ${name}!`);
    }

    formatPrice(price: number) {
        const tukstanciai = price >= 1000 ? Math.trunc(price / 1000) : 0;
         const simtai = Math.trunc(price % 1000);
         const centai = Math.round((price * 100) % 100);

         let priceString = '' + simtai;
         if (centai < 10 && centai > 0) {
             priceString += ',0' + centai;
         }
         if (centai >= 10) {
             priceString += ',' + centai;
        }

        if (tukstanciai > 0) {
            if (simtai < 10) {
                priceString = '0' + priceString;
            }
            if (simtai < 100) {
                priceString = '0' + priceString;
            }
            priceString = tukstanciai + '.' + priceString;
        }
        return `${priceString} ${this.currency}`;
    }

    formatPrice2(price: number) {
        const cents = price % 1 !== 0 ? 2 : 0;
        let priceStr = price.toFixed(cents).replace('.', ',');

        if (cents && priceStr.length > 6) {
            priceStr = priceStr.slice(0, -6) + '.' + priceStr.slice(-6);
        }

        if (!cents && priceStr.length > 3) {
            priceStr = priceStr.slice(0, -3) + '.' + priceStr.slice(-3);
        }

        return `${priceStr} ${this.currency}`;
    }

    getCar(carName: string, carPrice: number) {
        // return `New car everyone! ${carName} for only ${this.formatPrice(carPrice)}!`;
        return `New car everyone! ${carName} for only ${this.formatPrice(carPrice)}!`;
    }
}