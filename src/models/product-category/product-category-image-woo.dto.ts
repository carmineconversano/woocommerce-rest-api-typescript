
/**
 * Class representing image properties for a product category in WooCommerce.
 */
export class ProductCategoryImageWooDto {
    /**
     * Image ID.
     */
    public id: number;

    /**
     * The date the image was created, in the site's timezone. (Read-only)
     */
    public readonly date_created: string;

    /**
     * The date the image was created, as GMT. (Read-only)
     */
    public readonly date_created_gmt: string;

    /**
     * The date the image was last modified, in the site's timezone. (Read-only)
     */
    public readonly date_modified: string;

    /**
     * The date the image was last modified, as GMT. (Read-only)
     */
    public readonly date_modified_gmt: string;

    /**
     * Image URL.
     */
    public src: string;

    /**
     * Image name.
     */
    public name: string = '';

    /**
     * Image alternative text.
     */
    public alt: string = '';
}