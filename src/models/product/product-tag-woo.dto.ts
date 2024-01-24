/**
 * Represents a product tag.
 */
export class ProductTagWooDto {
    /**
     * Tag ID.
     * @readonly
     */
    public readonly id: number;

    /**
     * Tag name.
     */
    public name: string;

    /**
     * Tag slug.
     * @readonly
     */
    public readonly slug: string;

    /**
     * Creates an instance of ProductTagWooDto.
     * @param {number} id - The tag ID.
     * @param {string} name - The tag name.
     * @param {string} slug - The tag slug.
     */
    constructor(id: number, name: string, slug: string) {
        this.id = id;
        this.name = name;
        this.slug = slug;
    }
}
