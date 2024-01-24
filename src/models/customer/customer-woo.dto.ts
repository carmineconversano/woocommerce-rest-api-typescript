/**
 * Represents a Customer in WooCommerce.
 */
export class CustomerWooDto {
    /**
     * Unique identifier for the resource.
     * @type {number}
     * @readonly
     */
    public readonly id: number;

    /**
     * The date the customer was created, in the site's timezone.
     * @type {string}
     * @readonly
     */
    public readonly date_created: string = new Date().toDateString();

    /**
     * The date the customer was created, as GMT.
     * @type {string}
     * @readonly
     */
    public readonly date_created_gmt: string = new Date().toISOString();

    /**
     * The date the customer was last modified, in the site's timezone.
     * @type {string}
     * @readonly
     */
    public readonly date_modified: string = new Date().toDateString();

    /**
     * The date the customer was last modified, as GMT.
     * @type {string}
     * @readonly
     */
    public date_modified_gmt: string = new Date().toISOString();

    /**
     * The email address for the customer.
     * @type {string}
     * @mandatory
     */
    public email: string;

    /**
     * Customer first name.
     * @type {string}
     */
    public first_name: string;

    /**
     * Customer last name.
     * @type {string}
     */
    public last_name: string;

    /**
     * Customer role.
     * @type {string}
     * @readonly
     */
    public readonly role: string;

    /**
     * Customer login name.
     * @type {string}
     * @readonly
     */
    public readonly username: string;

    /**
     * Customer password.
     * @type {string}
     * @write-only
     */
    public password: string;

    /**
     * List of billing address data. See Customer - Billing properties.
     * @type {CustomerBillingProperties}
     */
    public billing: CustomerBillingProperties;

    /**
     * List of shipping address data. See Customer - Shipping properties.
     * @type {CustomerShippingProperties}
     */
    public shipping: CustomerShippingProperties;

    /**
     * Is the customer a paying customer?
     * @type {boolean}
     * @readonly
     */
    public readonly is_paying_customer: boolean;

    /**
     * Avatar URL.
     * @type {string}
     * @readonly
     */
    public readonly avatar_url: string;

    /**
     * Meta data. See Customer - Meta data properties.
     * @type {CustomerMetaDataProperties[]}
     */
    public meta_data: CustomerMetaDataProperties[];
}

/**
 * Represents the billing properties of a Customer.
 */
export class CustomerBillingProperties {
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
     * ISO code of the country.
     * @type {string}
     */
    public country: string;

    /**
     * Email address.
     * @type {string}
     */
    public email: string;

    /**
     * Phone number.
     * @type {string}
     */
    public phone: string;
}

/**
 * Represents the shipping properties of a Customer.
 */
class CustomerShippingProperties {
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
     * ISO code of the country.
     * @type {string}
     */
    public country: string;
}

/**
 * Represents the meta data properties of a Customer.
 */
class CustomerMetaDataProperties {
    /**
     * Meta ID.
     * @type {number}
     * @readonly
     */
    public readonly id: number;

    /**
     * Meta key.
     * @type {string}
     */
    public key: string;

    /**
     * Meta value.
     * @type {string}
     */
    public value: string;
}
