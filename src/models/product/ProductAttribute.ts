/**
 * Represents a product attribute.
 */
export class ProductAttribute {
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
     * Attribute position.
     */
    public position: number;

    /**
     * Define if the attribute is visible on the "Additional information" tab in the product's page. Default is false.
     */
    public visible: boolean;

    /**
     * Define if the attribute can be used as variation. Default is false.
     */
    public variation: boolean;

    /**
     * List of available term names of the attribute.
     */
    public options: string[];

    /**
     * Creates an instance of ProductAttribute.
     * @param {number} id - The attribute ID.
     * @param {string} name - The attribute name.
     * @param {number} position - The attribute position.
     * @param {boolean} visible - Define if the attribute is visible on the "Additional information" tab. Default is false.
     * @param {boolean} variation - Define if the attribute can be used as a variation. Default is false.
     * @param {string[]} options - List of available term names of the attribute.
     */
    constructor(id: number, name: string, position: number, visible: boolean, variation: boolean, options: string[]) {
        this.id = id;
        this.name = name;
        this.position = position;
        this.visible = visible;
        this.variation = variation;
        this.options = options;
    }
}
