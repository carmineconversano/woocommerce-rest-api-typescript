// ProductCategoryWooDto.ts

import {ProductCategoryImageWooDto} from "./product-category-image-woo.dto";

export type ProductCategoryDisplayType = 'default' | 'products' | 'subcategories' | 'both';

/**
 * Class representing a product category for WooCommerce.
 */
export class ProductCategoryWooDto {
    /**
     * Unique identifier for the resource. (Read-only)
     */
    public readonly id: number;

    /**
     * Category name. (Mandatory)
     */
    public name: string = '';

    /**
     * An alphanumeric identifier for the resource unique to its type. (Mandatory)
     */
    public slug: string = '';

    /**
     * The ID for the parent of the resource.
     */
    public parent: number | null = null;

    /**
     * HTML description of the resource.
     */
    public description: string = '';

    /**
     * Category archive display type. Options: default, products, subcategories, and both. Default is default.
     */
    public display: ProductCategoryDisplayType = 'default';

    /**
     * Image data. See Product category - Image properties.
     */
    public image: ProductCategoryImageWooDto;

    /**
     * Menu order, used to custom sort the resource.
     */
    public menu_order?: number;

    /**
     * Number of published products for the resource. (Read-only)
     */
    public readonly count: number = 0;
}

