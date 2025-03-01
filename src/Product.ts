class Product {
    private id: number;
    private name: string;
    private acquisitionPrice: number;
    private sellingPrice: number;
    private amount: number;
    private secret: string;

    constructor(id: number, name: string, buyPrice: number, sellPrice: number, amount: number) {
        /** @type {number} id */
        this.id = id;
        /** @type {string} name */
        this.name = name;
        /** @type {number} acquisitionPrice */
        this.acquisitionPrice = buyPrice;
        /** @type {number} sellingPrice */
        this.sellingPrice = sellPrice;
        /** @type {number} amount */
        this.amount = amount;

        this.secret = 'SECRET!!!!';
    }
}

export { Product };