/**
 * Represents default attributes for a product.
 */
export class ProductDefaultAttribute {
    /**
     * Attribute ID.
     * @readonly
     */
    public readonly id: number;

    /**
     * Attribute name.
     */
    public name: string;

    /**
     * Selected attribute term name.
     */
    public option: string;

    /**
     * Creates an instance of ProductDefaultAttribute.
     * @param {number} id - The attribute ID.
     * @param {string} name - The attribute name.
     * @param {string} option - Selected attribute term name.
     */
    constructor(id: number, name: string, option: string) {
        this.id = id;
        this.name = name;
        this.option = option;
    }
}