export class CustomerDeleteQueryParamsWooDto {
    /**
     * Required to be true, as resource does not support trashing.
     * @type {boolean}
     */
    public static readonly  force: boolean = true;

    /**
     * User ID to reassign posts to.
     * @type {number}
     */
    public reassign?: number;
}