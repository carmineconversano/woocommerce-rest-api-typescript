/**
 * Represents the available parameters for a request.
 */
export class CustomerQueryParamsWooDto {
    /**
     * Scope under which the request is made; determines fields present in response.
     * Options: view and edit. Default is view.
     * @type {string}
     */
    public context: string = 'view';

    /**
     * Current page of the collection.
     * Default is 1.
     * @type {number}
     */
    public page: number = 1;

    /**
     * Maximum number of items to be returned in result set.
     * Default is 10.
     * @type {number}
     */
    public per_page: number = 10;

    /**
     * Limit results to those matching a string.
     * @type {string}
     */
    public search?: string;

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
     * Options: asc and desc. Default is asc.
     * @type {string}
     */
    public order: string = 'asc';

    /**
     * Sort collection by object attribute.
     * Options: id, include, name and registered_date. Default is name.
     * @type {string}
     */
    public orderby: string = 'name';

    /**
     * Limit result set to resources with a specific email.
     * @type {string}
     */
    public email?: string;

    /**
     * Limit result set to resources with a specific role.
     * Options: all, administrator, editor, author, contributor, subscriber, customer, and shop_manager.
     * Default is customer.
     * @type {string}
     */
    public role: string = 'customer';

}