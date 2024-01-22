/**
 * Represents the properties of a product category.
 * @class
 */
export class ProductCategory {
    /**
     * Category ID.
     * @type {number}
     */
    public id: number;

    /**
     * Category name.
     * @type {string}
     */
    public readonly name: string;

    /**
     * Category slug. (Read-only)
     * @type {string}
     */
    public readonly slug: string;

    /**
     * @constructor
     * @param {number} id - Category ID.
     * @param {string} name - Category name.
     * @param {string} slug - Category slug. (Read-only)
     */
    constructor(id: number, name: string, slug: string) {
        this.id = id;
        this.name = name;
        this.slug = slug;
    }
}
