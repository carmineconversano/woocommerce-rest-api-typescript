/**
 * Class representing parameters for querying products.
 */
export class ProductVariationsQueryParamsWooDto {
    /**
     * Scope under which the request is made; determines fields present in response. Options: view and edit. Default is view.
     */
    public context: string = 'view';

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
    public search: string = '';

    /**
     * Limit response to resources published after a given ISO8601 compliant date.
     */
    public after: string = '';

    /**
     * Limit response to resources published before a given ISO8601 compliant date.
     */
    public before: string = '';

    /**
     * Ensure result set excludes specific IDs.
     */
    public exclude: number[] = [];

    /**
     * Limit result set to specific IDs.
     */
    public include: number[] = [];

    /**
     * Offset the result set by a specific number of items.
     */
    public offset: number = 0;

    /**
     * Order sort attribute ascending or descending. Options: asc and desc. Default is desc.
     */
    public order: string = 'desc';

    /**
     * Sort collection by object attribute. Options: date, id, include, title and slug. Default is date.
     */
    public orderby: string = 'date';

    /**
     * Limit result set to those of particular parent IDs.
     */
    public parent: number[] = [];

    /**
     * Limit result set to all items except those of a particular parent ID.
     */
    public parent_exclude: number[] = [];

    /**
     * Limit result set to products with a specific slug.
     */
    public slug: string = '';

    /**
     * Limit result set to products assigned a specific status. Options: any, draft, pending, private and publish. Default is any.
     */
    public status: string = 'any';

    /**
     * Limit result set to products with a specific SKU.
     */
    public sku: string = '';

    /**
     * Limit result set to products with a specific tax class. Default options: standard, reduced-rate and zero-rate.
     */
    public tax_class: string = '';

    /**
     * Limit result set to products on sale.
     */
    public on_sale: boolean = false;

    /**
     * Limit result set to products based on a minimum price.
     */
    public min_price: string = '';

    /**
     * Limit result set to products based on a maximum price.
     */
    public max_price: string = '';

    /**
     * Limit result set to products with specified stock status. Options: instock, outofstock and onbackorder.
     */
    public stock_status: string = '';
}
