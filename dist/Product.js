class Product {
    id;
    name;
    acquisitionPrice;
    sellingPrice;
    amount;
    secret;
    constructor(id, name, buyPrice, sellPrice, amount) {
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
