export class ProductCategoryDeleteParamsDto {
    /**
     * Required to be true, as resource does not support trashing.
     * @type {boolean}
     */
    public static readonly force?: boolean = true;
}