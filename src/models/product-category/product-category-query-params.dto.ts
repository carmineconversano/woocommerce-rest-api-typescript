/**
 * Type representing the valid values for the 'context' property.
 */
export type ContextType = 'view' | 'edit';

/**
 * Type representing the valid values for the 'order' property.
 */
export type OrderType = 'asc' | 'desc';

/**
 * Type representing the valid values for the 'orderby' property.
 */
export type OrderByType =
    | 'id'
    | 'include'
    | 'name'
    | 'slug'
    | 'term_group'
    | 'description'
    | 'count';

/**
 * Represents the parameters for making a request related to product categories.
 */
export class ProductCategoryQueryParams {
    /**
     * Scope under which the request is made; determines fields present in response.
     * Options: 'view' and 'edit'. Default is 'view'.
     */
    public context?: ContextType = 'view';

    /**
     * Current page of the collection. Default is 1.
     */
    public page?: number = 1;

    /**
     * Maximum number of items to be returned in the result set. Default is 10.
     */
    public per_page?: number = 10;

    /**
     * Limit results to those matching a string.
     */
    public search?: string;

    /**
     * Ensure result set excludes specific ids.
     */
    public exclude?: number[];

    /**
     * Limit result set to specific ids.
     */
    public include?: number[];

    /**
     * Order sort attribute ascending or descending. Options: 'asc' and 'desc'. Default is 'asc'.
     */
    public order?: OrderType = 'asc';

    /**
     * Sort collection by resource attribute. Options: 'id', 'include', 'name', 'slug', 'term_group', 'description', and 'count'. Default is 'name'.
     */
    public orderby?: OrderByType = 'name';

    /**
     * Whether to hide resources not assigned to any products. Default is false.
     */
    public hide_empty?: boolean = false;

    /**
     * Limit result set to resources assigned to a specific parent.
     */
    public parent?: number;

    /**
     * Limit result set to resources assigned to a specific product.
     */
    public product?: number;

    /**
     * Limit result set to resources with a specific slug.
     */
    public slug?: string;

    constructor(page: number, per_page: number) {
        this.page = page;
        this.per_page = per_page;
    }
}
