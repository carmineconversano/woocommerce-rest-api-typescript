import {OrderBillingWooDto} from "./order-billing-woo.dto";
import {OrderShippingWooDto} from "./order-shipping-woo.dto";
import {Meta} from "../shared";
import {OrderLineItemsWooDto} from "./order-line-items-woo.dto";
import {OrderTaxLinesWooDto} from "./order-tax-lines-woo.dto";
import {OrderShippingLinesWooDto} from "./order-shipping-lines-woo.dto";
import {FeeLines} from "./oder-fee-lines-woo.dto";
import {OrderCouponLinesWooDto} from "./order-coupon-lines-woo.dto";
import {OrderRefundsWooDto} from './order-refunds-woo.dto'

export enum OrderStatus {
    PENDING = 'pending',
    PROCESSING = 'processing',
    "ON-HOLD" = 'on-hold',
    COMPLETED = 'completed',
    REFUNDED = 'refunded',
    FAILED = 'failed',
    TRASH = 'trash'
}

/**
 * Represents an Order in WooCommerce.
 */
export class OrderWooDto {
    /**
     * Unique identifier for the resource.
     * @type {number}
     * @readonly
     */
    public readonly id: number;

    /**
     * Parent order ID.
     * @type {number}
     */
    public parent_id: number;

    /**
     * Order number.
     * @type {string}
     * @readonly
     */
    public readonly number: string;

    /**
     * Order key.
     * @type {string}
     * @readonly
     */
    public readonly order_key: string;

    /**
     * Shows where the order was created.
     * @type {string}
     * @readonly
     */
    public readonly created_via: string;

    /**
     * Version of WooCommerce which last updated the order.
     * @type {string}
     * @readonly
     */
    public readonly version: string = '';

    /**
     * Order status. Options: pending, processing, on-hold, completed, cancelled, refunded, failed, and trash.
     * Default is 'pending'.
     * @type {string}
     */
    public status: OrderStatus = OrderStatus.PENDING;

    /**
     * Currency the order was created with, in ISO format.
     * Options: AED, AFN, ALL, AMD, ANG, AOA, ARS, AUD, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BRL, BSD, BTC, BTN, BWP, BYR, BZD, CAD, CDF, CHF, CLP, CNY, COP, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, EUR, FJD, FKP, GBP, GEL, GGP, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, IMP, INR, IQD, IRR, IRT, ISK, JEP, JMD, JOD, JPY, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PRB, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, SSP, STD, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, USD, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XOF, XPF, YER, ZAR, and ZMW.
     * Default is 'USD'.
     * @type {string}
     */
    public currency: string = 'USD';

    /**
     * The date the order was created, in the site's timezone.
     * @type {string}
     * @readonly
     */
    public readonly date_created: string = new Date().toDateString();

    /**
     * The date the order was created, as GMT.
     * @type {string}
     * @readonly
     */
    public readonly date_created_gmt: string = new Date().toISOString();

    /**
     * The date the order was last modified, in the site's timezone.
     * @type {string}
     * @readonly
     */
    public readonly date_modified: string = new Date().toDateString();

    /**
     * The date the order was last modified, as GMT.
     * @type {string}
     * @readonly
     */
    public readonly date_modified_gmt: string = new Date().toISOString();

    /**
     * Total discount amount for the order.
     * @type {string}
     * @readonly
     */
    public readonly discount_total: string;

    /**
     * Total discount tax amount for the order.
     * @type {string}
     * @readonly
     */
    public readonly discount_tax: string;

    /**
     * Total shipping amount for the order.
     * @type {string}
     * @readonly
     */
    public readonly shipping_total: string;

    /**
     * Total shipping tax amount for the order.
     * @type {string}
     * @readonly
     */
    public readonly shipping_tax: string;

    /**
     * Sum of line item taxes only.
     * @type {string}
     * @readonly
     */
    public readonly cart_tax: string;

    /**
     * Grand total.
     * @type {string}
     * @readonly
     */
    public readonly total: string;

    /**
     * Sum of all taxes.
     * @type {string}
     * @readonly
     */
    public readonly total_tax: string;

    /**
     * True if prices included tax during checkout.
     * @type {boolean}
     * @readonly
     */
    public readonly prices_include_tax: boolean;

    /**
     * User ID who owns the order. 0 for guests. Default is 0.
     * @type {number}
     */
    public customer_id: number = 0;

    /**
     * Customer's IP address.
     * @type {string}
     * @readonly
     */
    public readonly customer_ip_address: string;

    /**
     * User agent of the customer.
     * @type {string}
     * @readonly
     */
    public readonly customer_user_agent: string;

    /**
     * Note left by the customer during checkout.
     * @type {string}
     * @readonly
     */
    public readonly customer_note: string = '';

    /**
     * Billing address. See Order - Billing properties.
     * @type {OrderBillingWooDto}
     */
    public billing: OrderBillingWooDto;

    /**
     * Shipping address. See Order - Shipping properties.
     * @type {OrderShippingWooDto}
     */
    public shipping: OrderShippingWooDto;

    /**
     * Payment method ID.
     * @type {string}
     */
    public payment_method: string;

    /**
     * Payment method title.
     * @type {string}
     */
    public payment_method_title: string;

    /**
     * Unique transaction ID.
     * @type {string}
     */
    public transaction_id: string;

    /**
     * The date the order was paid, in the site's timezone.
     * @type {string}
     * @readonly
     */
    public readonly date_paid: string = new Date().toDateString();

    /**
     * The date the order was paid, as GMT.
     * @type {string}
     * @readonly
     */
    public readonly date_paid_gmt: string = new Date().toISOString();

    /**
     * The date the order was completed, in the site's timezone.
     * @type {string}
     * @readonly
     */
    public readonly date_completed: string = new Date().toDateString();

    /**
     * The date the order was completed, as GMT.
     * @type {string}
     * @readonly
     */
    public readonly date_completed_gmt: string = new Date().toISOString();

    /**
     * MD5 hash of cart items to ensure orders are not modified.
     * @type {string}
     * @readonly
     */
    public readonly cart_hash: string;

    /**
     * Meta data. See Order - Meta data properties.
     * @type {array}
     */
    public meta_data: Meta[];

    /**
     * Line items data. See Order - Line items properties.
     * @type {array}
     */
    public line_items: OrderLineItemsWooDto[];

    /**
     * Tax lines data. See Order - Tax lines properties.
     * @type {array}
     * @readonly
     */
    public readonly tax_lines: OrderTaxLinesWooDto[];

    /**
     * Shipping lines data. See Order - Shipping lines properties.
     * @type {array}
     * @readonly
     */
    public shipping_lines: OrderShippingLinesWooDto[];

    /**
     * Fee lines data. See Order - Fee lines properties.
     * @type {array}
     * @readonly
     */
    public fee_lines: FeeLines[];

    /**
     * Coupons line data. See Order - Coupon lines properties.
     * @type {array}
     * @readonly
     */
    public coupon_lines: OrderCouponLinesWooDto[];

    /**
     * List of refunds. See Order - Refunds properties.
     * @type {array}
     * @readonly
     */
    public readonly refunds: OrderRefundsWooDto[];

    /**
     * Define if the order is paid. It will set the status to processing and reduce stock items. Default is false.
     * @type {boolean}
     */
    public set_paid: boolean = false;
}
