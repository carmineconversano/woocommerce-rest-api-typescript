import {Entity} from "../shared";
import {Meta} from "../shared";
import {Billing} from "./Billing";
import {Shipping} from "./Shipping";
import {LineItems} from "./LineItems";
import {TaxLines} from "./TaxLines";
import {ShippingLines} from "./ShippingLines";
import {FeeLines} from "./FeeLines";
import {CouponLines} from "./CouponLines";
import {Refunds} from "./Refunds";


export enum OrderStatus {
    PENDING = 'pending',
    PROCESSING = 'processing',
    "ON-HOLD" = 'on-hold',
    COMPLETED = 'completed',
    REFUNDED = 'refunded',
    FAILED = 'failed',
    TRASH = 'trash'
}

export enum Currency {
    AED,
    AFN,
    ALL,
    AMD,
    ANG,
    AOA,
    ARS,
    AUD,
    AWG,
    AZN,
    BAM,
    BBD,
    BDT,
    BGN,
    BHD,
    BIF,
    BMD,
    BND,
    BOB,
    BRL,
    BSD,
    BTC,
    BTN,
    BWP,
    BYR,
    BZD,
    CAD,
    CDF,
    CHF,
    CLP,
    CNY,
    COP,
    CRC,
    CUC,
    CUP,
    CVE,
    CZK,
    DJF,
    DKK,
    DOP,
    DZD,
    EGP,
    ERN,
    ETB,
    EUR,
    FJD,
    FKP,
    GBP,
    GEL,
    GGP,
    GHS,
    GIP,
    GMD,
    GNF,
    GTQ,
    GYD,
    HKD,
    HNL,
    HRK,
    HTG,
    HUF,
    IDR,
    ILS,
    IMP,
    INR,
    IQD,
    IRR,
    IRT,
    ISK,
    JEP,
    JMD,
    JOD,
    JPY,
    KES,
    KGS,
    KHR,
    KMF,
    KPW,
    KRW,
    KWD,
    KYD,
    KZT,
    LAK,
    LBP,
    LKR,
    LRD,
    LSL,
    LYD,
    MAD,
    MDL,
    MGA,
    MKD,
    MMK,
    MNT,
    MOP,
    MRO,
    MUR,
    MVR,
    MWK,
    MXN,
    MYR,
    MZN,
    NAD,
    NGN,
    NIO,
    NOK,
    NPR,
    NZD,
    OMR,
    PAB,
    PEN,
    PGK,
    PHP,
    PKR,
    PLN,
    PRB,
    PYG,
    QAR,
    RON,
    RSD,
    RUB,
    RWF,
    SAR,
    SBD,
    SCR,
    SDG,
    SEK,
    SGD,
    SHP,
    SLL,
    SOS,
    SRD,
    SSP,
    STD,
    SYP,
    SZL,
    THB,
    TJS,
    TMT,
    TND,
    TOP,
    TRY,
    TTD,
    TWD,
    TZS,
    UAH,
    UGX,
    USD,
    UYU,
    UZS,
    VEF,
    VND,
    VUV,
    WST,
    XAF,
    XCD,
    XOF,
    XPF,
    YER,
    ZAR,
    ZMW
}

export class Order extends Entity {

    public readonly id: number;

    public parent_id: number = 0;

    public readonly number: string;

    public readonly order_key: string;

    public readonly created_via: string;

    public readonly version: string = '';

    public status: OrderStatus;

    public currency: Currency;

    public readonly discount_total: string;

    public readonly shipping_total: string;

    public readonly shipping_tax: string;

    public readonly cart_tax: string;

    public readonly total: string;

    public readonly total_tax: string;

    public readonly prices_include_tax: boolean;

    public customer_id: number = 0;

    public readonly customer_ip_address: string;

    public readonly customer_user_agent: string;

    public customer_note: string;

    public billing: Billing;

    public shipping: Shipping;

    public payment_method: string;

    public payment_method_title: string;

    public transaction_id: string;

    public readonly date_paid: Date;

    public readonly date_paid_gmt: Date;

    public readonly date_completed: Date;

    public readonly date_completed_gmt: Date;

    public readonly cart_hash: string;

    public meta_data: Meta[];

    public line_items: LineItems[];

    public readonly tax_lines: TaxLines[];

    public shipping_lines: ShippingLines[];

    public fee_lines: FeeLines[];

    public coupon_lines: CouponLines[];

    public readonly refunds: Refunds[];

    public readonly set_paid: boolean = false;
}