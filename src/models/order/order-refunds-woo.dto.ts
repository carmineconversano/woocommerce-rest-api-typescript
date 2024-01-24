/**
 * Represents the refunds properties of an Order.
 */
export class OrderRefundsWooDto {
    /**
     * Refund ID.
     * @type {number}
     * @readonly
     */
    public readonly id: number;

    /**
     * Refund reason.
     * @type {string}
     * @readonly
     */
    public readonly reason: string;

    /**
     * Refund total.
     * @type {string}
     * @readonly
     */
    public readonly total: string;
}
