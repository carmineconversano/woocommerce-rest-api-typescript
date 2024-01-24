/**
 * Represents the shipping properties of an Order.
 */
export class OrderShippingWooDto {
    /**
     * First name.
     * @type {string}
     */
    public first_name: string;

    /**
     * Last name.
     * @type {string}
     */
    public last_name: string;

    /**
     * Company name.
     * @type {string}
     */
    public company: string;

    /**
     * Address line 1.
     * @type {string}
     */
    public address_1: string;

    /**
     * Address line 2.
     * @type {string}
     */
    public address_2: string;

    /**
     * City name.
     * @type {string}
     */
    public city: string;

    /**
     * ISO code or name of the state, province, or district.
     * @type {string}
     */
    public state: string;

    /**
     * Postal code.
     * @type {string}
     */
    public postcode: string;

    /**
     * Country code in ISO 3166-1 alpha-2 format.
     * @type {string}
     */
    public country: string;
}
