/**
 * Represents a product image.
 */
export class ProductImageWooDto {
    /**
     * Image ID.
     * @readonly
     */
    public readonly id: number;

    /**
     * The date the image was created, in the site's timezone.
     * @readonly
     */
    public readonly date_created: string; // Assuming date-time is represented as a string

    /**
     * The date the image was created, as GMT.
     * @readonly
     */
    public readonly date_created_gmt: string; // Assuming date-time is represented as a string

    /**
     * The date the image was last modified, in the site's timezone.
     * @readonly
     */
    public readonly date_modified: string; // Assuming date-time is represented as a string

    /**
     * The date the image was last modified, as GMT.
     * @readonly
     */
    public readonly date_modified_gmt: string; // Assuming date-time is represented as a string

    /**
     * Image URL.
     */
    public src: string;

    /**
     * Image name.
     */
    public name: string;

    /**
     * Image alternative text.
     */
    public alt: string;

    /**
     * Creates an instance of ProductImageWooDto.
     * @param {number} id - The image ID.
     * @param {string} date_created - The date the image was created, in the site's timezone.
     * @param {string} date_created_gmt - The date the image was created, as GMT.
     * @param {string} date_modified - The date the image was last modified, in the site's timezone.
     * @param {string} date_modified_gmt - The date the image was last modified, as GMT.
     * @param {string} src - The image URL.
     * @param {string} name - The image name.
     * @param {string} alt - The image alternative text.
     */
    constructor(
        id: number,
        date_created: string,
        date_created_gmt: string,
        date_modified: string,
        date_modified_gmt: string,
        src: string,
        name: string,
        alt: string
    ) {
        this.id = id;
        this.date_created = date_created;
        this.date_created_gmt = date_created_gmt;
        this.date_modified = date_modified;
        this.date_modified_gmt = date_modified_gmt;
        this.src = src;
        this.name = name;
        this.alt = alt;
    }
}