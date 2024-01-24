import {Meta} from "../shared";

/**
 * Represents the coupon lines properties of an Order.
 */
export class OrderCouponLinesWooDto {
    /**
     * Item ID.
     * @type {number}
     * @readonly
     */
    public readonly id: number;

    /**
     * Coupon code.
     * @type {string}
     */
    public code: string;

    /**
     * Discount total.
     * @type {string}
     */
    public discount: string;

    /**
     * Discount total tax.
     * @type {string}
     * @readonly
     */
    public readonly discount_tax: string;

    /**
     * Meta data. See Order - Meta data properties.
     * @type {Meta[]}
     */
    public meta_data: Meta[];
}
