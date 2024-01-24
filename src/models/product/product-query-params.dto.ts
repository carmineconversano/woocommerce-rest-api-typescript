export type ProductContextParams = 'view' | 'edit';
export type ProductOrderParams = 'asc' | 'desc';

export type ProductOrderBy = 'date' | 'id' | 'include' | 'title' | 'slug' | 'price' | 'popularity' | 'rating';

export type ProductTypeParams = 'simple' | 'grouped' | 'external' | 'variable';
export type ProductStatusParams = 'draft' | 'pending' | 'private' | 'publish' | 'any';
export type ProductStockStatusParams = 'instock' | 'outofstock' | 'onbackorder';
export type ProductTaxClassParams = 'standard' | 'reduced-rate' | 'zero-rate';
/**
 * Represents parameters for making requests related to products.
 */
export class ProductRequestParameters {
    /**
     * Scope under which the request is made; determines fields present in response. Options: view and edit. Default is view.
     */
    public context: ProductContextParams = "view";

    /**
     * Current page of the collection. Default is 1.
     */
    public page: number = 1;

    /**
     * Maximum number of items to be returned in the result set. Default is 10.
     */
    public per_page: number = 10;

    /**
     * Limit results to those matching a string.
     */
    public search?: string;

    /**
     * Limit response to resources published after a given ISO8601 compliant date.
     */
    public after?: string;

    /**
     * Limit response to resources published before a given ISO8601 compliant date.
     */
    public before?: string;

    /**
     * Limit response to resources modified after a given ISO8601 compliant date.
     */
    public modified_after?: string;

    /**
     * Limit response to resources modified before a given ISO8601 compliant date.
     */
    public modified_before?: string;

    /**
     * Whether to consider GMT post dates when limiting the response by published or modified date.
     */
    public dates_are_gmt?: boolean;

    /**
     * Ensure result set excludes specific IDs.
     */
    public exclude?: number[];

    /**
     * Limit result set to specific IDs.
     */
    public include?: number[];

    /**
     * Offset the result set by a specific number of items.
     */
    public offset?: number;

    /**
     * Order sort attribute ascending or descending. Options: asc and desc. Default is desc.
     */
    public order: ProductOrderParams = "desc";

    /**
     * Sort collection by object attribute. Options: date, id, include, title, slug, price, popularity, and rating. Default is date.
     */
    public orderby: ProductOrderBy = "date";

    /**
     * Limit result set to those of particular parent IDs.
     */
    public parent?: number[];

    /**
     * Limit result set to all items except those of a particular parent ID.
     */
    public parent_exclude?: number[];

    /**
     * Limit result set to products with a specific slug.
     */
    public slug?: string;

    /**
     * Limit result set to products assigned a specific status. Options: any, draft, pending, private, and publish. Default is any.
     */
    public status: ProductStatusParams = "any";

    /**
     * Limit result set to products assigned a specific type. Options: simple, grouped, external, and variable.
     */
    public type?: ProductTypeParams;

    /**
     * Limit result set to products with a specific SKU.
     */
    public sku?: string;

    /**
     * Limit result set to featured products.
     */
    public featured?: boolean;

    /**
     * Limit result set to products assigned a specific category ID.
     */
    public category?: string;

    /**
     * Limit result set to products assigned a specific tag ID.
     */
    public tag?: string;

    /**
     * Limit result set to products assigned a specific shipping class ID.
     */
    public shipping_class?: string;

    /**
     * Limit result set to products with a specific attribute.
     */
    public attribute?: string;

    /**
     * Limit result set to products with a specific attribute term ID (required an assigned attribute).
     */
    public attribute_term?: string;

    /**
     * Limit result set to products with a specific tax class. Default options: standard, reduced-rate, and zero-rate.
     */
    public tax_class: ProductTaxClassParams = "standard";

    /**
     * Limit result set to products on sale.
     */
    public on_sale?: boolean;

    /**
     * Limit result set to products based on a minimum price.
     */
    public min_price?: string;

    /**
     * Limit result set to products based on a maximum price.
     */
    public max_price?: string;

    /**
     * Limit result set to products with specified stock status. Options: instock, outofstock, and onbackorder.
     */
    public stock_status?: ProductStockStatusParams;
}

