import {OrderTaxesWooDto} from "./order-taxes-woo.dto";
import {Meta} from "../shared";

/**
 * Represents the fee lines properties of an Order.
 */
export class OrderFeeLinesProperties {
    /**
     * Item ID.
     * @type {number}
     * @readonly
     */
    public readonly id: number;

    /**
     * Fee name.
     * @type {string}
     */
    public name: string;

    /**
     * Tax class of fee.
     * @type {string}
     */
    public tax_class: string;

    /**
     * Tax status of fee. Options: taxable and none.
     * @type {string}
     */
    public tax_status: string;

    /**
     * Line total (after discounts).
     * @type {string}
     */
    public total: string;

    /**
     * Line total tax (after discounts).
     * @type {string}
     */
    public total_tax: string;

    /**
     * Line taxes. See Order - Taxes properties.
     * @type {any[]}
     * @readonly
     */
    public readonly taxes: OrderTaxesWooDto[];

    /**
     * Meta data. See Order - Meta data properties.
     * @type {any[]}
     * @readonly
     */
    public readonly meta_data: Meta[];
}
