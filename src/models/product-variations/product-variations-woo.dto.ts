import {ProductVariationsDownloadWooDto} from "./product-variations-download-woo.dto";
import {ProductVariationsDimensionsWooDto} from "./product-variations-dimensions-woo.dto";
import {ProductVariationsImageWooDto} from "./product-variations-image-woo.dto";
import {ProductVariationsAttributeWooDto} from "./product-variations-attribute-woo.dto";
import {ProductVariationsMetaWooDto} from "./product-variations-meta-woo.dto";

/**
 * Class representing a product variation.
 */
export class ProductVariationsWooDto {
    /**
     * Unique identifier for the resource. (Read-only)
     */
    public readonly id: number;

    /**
     * The date the variation was created, in the site's timezone. (Read-only)
     */
    public readonly date_created: string;

    /**
     * The date the variation was created, as GMT. (Read-only)
     */
    public readonly date_created_gmt: string;

    /**
     * The date the variation was last modified, in the site's timezone. (Read-only)
     */
    public readonly date_modified: string;

    /**
     * The date the variation was last modified, as GMT. (Read-only)
     */
    public readonly date_modified_gmt: string;

    /**
     * Variation description.
     */
    public description: string;

    /**
     * Variation URL. (Read-only)
     */
    public readonly permalink: string;

    /**
     * Unique identifier.
     */
    public sku: string;

    /**
     * Current variation price.
     */
    public price: string;

    /**
     * Variation regular price. (Read-only)
     */
    public readonly regular_price: string;

    /**
     * Variation sale price.
     */
    public sale_price: string;

    /**
     * Start date of sale price, in the site's timezone.
     */
    public date_on_sale_from: string;

    /**
     * Start date of sale price, as GMT.
     */
    public date_on_sale_from_gmt: string;

    /**
     * End date of sale price, in the site's timezone.
     */
    public date_on_sale_to: string;

    /**
     * End date of sale price, as GMT.
     */
    public date_on_sale_to_gmt: string;

    /**
     * Shows if the variation is on sale. (Read-only)
     */
    public readonly on_sale: boolean;

    /**
     * Variation status. Options: draft, pending, private and publish. Default is publish.
     */
    public status: string;

    /**
     * Shows if the variation can be bought. (Read-only)
     */
    public readonly purchasable: boolean;

    /**
     * If the variation is virtual. Default is false.
     */
    public virtual: boolean = false;

    /**
     * If the variation is downloadable. Default is false.
     */
    public downloadable: boolean = false;

    /**
     * List of downloadable files. See Product variation - Downloads properties.
     */
    public downloads: ProductVariationsDownloadWooDto[] = [];

    /**
     * Variation dimensions. See Product variation - Dimensions properties.
     */
    public dimensions: ProductVariationsDimensionsWooDto = {
        length: "",
        width: "",
        height: "",
    };

    /**
     * Variation image data. See Product variation - Image properties.
     */
    public image: ProductVariationsImageWooDto;

    /**
     * List of attributes. See Product variation - Attributes properties.
     */
    public attributes: ProductVariationsAttributeWooDto[] = [];

    /**
     * Menu order, used to custom sort products.
     */
    public menu_order: number;

    /**
     * Meta data. See Product variation - Meta data properties.
     */
    public meta_data: ProductVariationsMetaWooDto[] = [];
}