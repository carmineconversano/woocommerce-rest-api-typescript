/**
 * Class representing variation image data.
 */
export class ProductVariationsImageWooDto {
    /**
     * Image ID.
     */
    public id: number;

    /**
     * The date the image was created, in the site's timezone. (Read-only)
     */
    public date_created: string;

    /**
     * The date the image was created, as GMT. (Read-only)
     */
    public date_created_gmt: string;

    /**
     * The date the image was last modified, in the site's timezone. (Read-only)
     */
    public date_modified: string;

    /**
     * The date the image was last modified, as GMT. (Read-only)
     */
    public date_modified_gmt: string;

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
}