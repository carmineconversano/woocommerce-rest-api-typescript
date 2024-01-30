/**
 * Represents the available parameters for a WooCommerce order query.
 */
export class OrderQueryParamsWooDto {
    /**
     * Scope under which the request is made; determines fields present in response.
     * Options: view and edit. Default is view.
     * @type {OrderQueryParamsContext}
     */
    public context?: OrderQueryParamsContext = 'view';

    /**
     * Current page of the collection.
     * Default is 1.
     * @type {number}
     */
    public page?: number = 1;

    /**
     * Maximum number of items to be returned in result set.
     * Default is 10.
     * @type {number}
     */
    public per_page?: number = 10;

    /**
     * Limit results to those matching a string.
     * @type {string}
     */
    public search?: string;

    /**
     * Limit response to resources published after a given ISO8601 compliant date.
     * @type {string}
     */
    public after?: string;

    /**
     * Limit response to resources published before a given ISO8601 compliant date.
     * @type {string}
     */
    public before?: string;

    /**
     * Limit response to resources modified after a given ISO8601 compliant date.
     * @type {string}
     */
    public modified_after?: string;

    /**
     * Limit response to resources modified before a given ISO8601 compliant date.
     * @type {string}
     */
    public modified_before?: string;

    /**
     * Whether to consider GMT post dates when limiting response by published or modified date.
     * @type {boolean}
     */
    public dates_are_gmt?: boolean;

    /**
     * Ensure result set excludes specific IDs.
     * @type {number[]}
     */
    public exclude?: number[];

    /**
     * Limit result set to specific IDs.
     * @type {number[]}
     */
    public include?: number[];

    /**
     * Offset the result set by a specific number of items.
     * @type {number}
     */
    public offset?: number;

    /**
     * Order sort attribute ascending or descending.
     * Options: asc and desc. Default is desc.
     * @type {OrderQueryParamsOrder}
     */
    public order?: OrderQueryParamsOrder = 'desc';

    /**
     * Sort collection by object attribute.
     * Options: date, id, include, title, and slug. Default is date.
     * @type {OrderQueryParamsOrderBy}
     */
    public orderby?: OrderQueryParamsOrderBy = 'date';

    /**
     * Limit result set to those of particular parent IDs.
     * @type {number[]}
     */
    public parent?: number[];

    /**
     * Limit result set to all items except those of a particular parent ID.
     * @type {number[]}
     */
    public parent_exclude?: number[];

    /**
     * Limit result set to orders assigned a specific status.
     * Options: any, pending, processing, on-hold, completed, cancelled, refunded, failed, and trash.
     * Default is any.
     * @type {OrderQueryParamsStatus}
     */
    public status?: OrderQueryParamsStatus = 'any';

    /**
     * Limit result set to orders assigned a specific customer.
     * @type {number}
     */
    public customer?: number;

    /**
     * Limit result set to orders assigned a specific product.
     * @type {number}
     */
    public product?: number;

    /**
     * Number of decimal points to use in each resource.
     * Default is 2.
     * @type {number}
     */
    public dp?: number = 2;
}

/**
 * Type for order query parameters context.
 * @type {'view' | 'edit'}
 */
export type OrderQueryParamsContext = 'view' | 'edit';

/**
 * Type for order query parameters order.
 * @type {'asc' | 'desc'}
 */
export type OrderQueryParamsOrder = 'asc' | 'desc';

/**
 * Type for order query parameters orderby.
 * @type {'date' | 'id' | 'include' | 'title' | 'slug'}
 */
export type OrderQueryParamsOrderBy = 'date' | 'id' | 'include' | 'title' | 'slug';

/**
 * Type for order query parameters status.
 * @type {'any' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'trash'}
 */
export type OrderQueryParamsStatus = 'any' | 'pending' | 'processing' | 'on-hold' | 'completed' | 'cancelled' | 'refunded' | 'failed' | 'trash';
