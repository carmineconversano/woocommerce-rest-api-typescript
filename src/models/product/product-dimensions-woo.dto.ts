/**
 * Represents the dimensions of a product.
 * @class
 */
export class ProductDimensionsWooDto {
    /**
     * ProductWooDto length.
     * @type {string}
     */
    public length?: string;

    /**
     * ProductWooDto width.
     * @type {string}
     */
    public width?: string;

    /**
     * ProductWooDto height.
     * @type {string}
     */
    public height?: string;

    /**
     * @constructor
     * @param {Object} data - The initial data for the dimensions.
     */
    constructor(data: { length: string; width: string; height: string }) {
        this.length = data.length;
        this.width = data.width;
        this.height = data.height;
    }
}
