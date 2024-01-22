import {Meta} from "../shared";
import {ProductDimensions} from "./ProductDimensions";
import {Downloads} from "./Downloads";
import {ProductCategory} from "./product-category";
import {ProductTag} from "./ProductTag";
import {ProductImage} from "./ProductImage";
import {ProductAttribute} from "./ProductAttribute";
import {ProductDefaultAttribute} from "./ProductDefaultAttribute";

export type ProductType = 'simple' | 'grouped' | 'external' | 'variable';
export type ProductStatus = 'draft' | 'pending' | 'private' | 'publish';
export type ProductVisbility = 'visible' | 'catalog' | 'search' | 'hidden';
export type ProductTaxStatus = 'taxable' | 'shipping' | 'none';
export type ProductStockStatus = 'instock' | 'outofstock' | 'onbackorder';
export type PorudctBackOrders = 'no' | 'notify' | 'yes';

/**
 * Represents a Product resource.
 * @class
 */
export class Product {
    /**
     * Unique identifier for the resource.
     * @type {number}
     */
    public readonly id: number = 0;

    /**
     * Product name.
     * @type {string}
     */
    public name: string = '';

    /**
     * Product slug.
     * @type {string}
     */
    public reslug: string = '';

    /**
     * Product URL.
     * @type {string}
     */
    public readonly permalink: string = '';

    /**
     * The date the product was created, in the site's timezone.
     * @type {string} - date-time
     */
    public readonly date_created: string = new Date().toISOString();

    /**
     * The date the product was created, as GMT.
     * @type {string} - date-time
     */
    public readonly date_created_gmt: string = new Date().toISOString();

    /**
     * The date the product was last modified, in the site's timezone.
     * @type {string} - date-time
     */
    public readonly date_modified: string = new Date().toISOString();

    /**
     * The date the product was last modified, as GMT.
     * @type {string} - date-time
     */
    public readonly date_modified_gmt: string = new Date().toISOString();

    /**
     * Product type. Options: simple, grouped, external, variable. Default is simple.
     * @type {string}
     */
    public type: ProductType = 'simple';

    /**
     * Product status (post status). Options: draft, pending, private, publish. Default is publish.
     * @type {string}
     */
    public status: ProductStatus = 'publish';

    /**
     * Featured product. Default is false.
     * @type {boolean}
     */
    public featured: boolean = false;

    /**
     * Catalog visibility. Options: visible, catalog, search, hidden. Default is visible.
     * @type {string}
     */
    public catalog_visibility: ProductVisbility = 'visible';

    /**
     * Product description.
     * @type {string}
     */
    public description: string = '';

    /**
     * Product short description.
     * @type {string}
     */
    public short_description: string = '';

    /**
     * Unique identifier.
     * @type {string}
     */
    public sku: string = '';

    /**
     * Current product price.
     * @type {string}
     */
    public readonly price: string = '';

    /**
     * Product regular price.
     * @type {string}
     */
    public regular_price: string = '';

    /**
     * Product sale price.
     * @type {string}
     */
    public sale_price: string = '';

    /**
     * Start date of sale price, in the site's timezone.
     * @type {string} - date-time
     */
    public date_on_sale_from: string = new Date().toDateString();

    /**
     * Start date of sale price, as GMT.
     * @type {string} - date-time
     */
    public date_on_sale_from_gmt: string = new Date().toISOString();

    /**
     * End date of sale price, in the site's timezone.
     * @type {string} - date-time
     */
    public date_on_sale_to: string = new Date().toDateString();

    /**
     * End date of sale price, as GMT.
     * @type {string} - date-time
     */
    public date_on_sale_to_gmt: string = new Date().toISOString();

    /**
     * Price formatted in HTML.
     * @type {string}
     */
    public readonly price_html: string = '';

    /**
     * Shows if the product is on sale.
     * @type {boolean}
     */
    public readonly on_sale: boolean = false;

    /**
     * Shows if the product can be bought.
     * @type {boolean}
     */
    public readonly purchasable: boolean = false;

    /**
     * Amount of sales.
     * @type {number}
     */
    public readonly total_sales: number = 0;

    /**
     * If the product is virtual. Default is false.
     * @type {boolean}
     */
    public virtual: boolean = false;

    /**
     * If the product is downloadable. Default is false.
     * @type {boolean}
     */
    public downloadable: boolean = false;

    /**
     * List of downloadable files. See Product - Downloads properties.
     * @type {any[]}
     */
    public downloads: Downloads[] = [];

    /**
     * Number of times downloadable files can be downloaded after purchase. Default is -1.
     * @type {number}
     */
    public download_limit: number = -1;

    /**
     * Number of days until access to downloadable files expires. Default is -1.
     * @type {number}
     */
    public download_expiry: number = -1;

    /**
     * Product external URL. Only for external products.
     * @type {string}
     */
    public external_url: string = '';

    /**
     * Product external button text. Only for external products.
     * @type {string}
     */
    public button_text: string = '';

    /**
     * Tax status. Options: taxable, shipping, none. Default is taxable.
     * @type {string}
     */
    public tax_status: ProductTaxStatus = 'taxable';

    /**
     * Tax class.
     * @type {string}
     */
    public tax_class: string = '';

    /**
     * Stock management at product level. Default is false.
     * @type {boolean}
     */
    public manage_stock: boolean = false;

    /**
     * Stock quantity.
     * @type {number}
     */
    public stock_quantity: number = 0;

    /**
     * Controls the stock status of the product. Options: instock, outofstock, onbackorder. Default is instock.
     * @type {string}
     */
    public stock_status: ProductStockStatus = 'instock';

    /**
     * If managing stock, this controls if backorders are allowed. Options: no, notify, yes. Default is no.
     * @type {string}
     */
    public backorders: PorudctBackOrders = 'no';

    /**
     * Shows if backorders are allowed.
     * @type {boolean}
     */
    public readonly backorders_allowed: boolean = false;

    /**
     * Shows if the product is on backordered.
     * @type {boolean}
     */
    public readonly backordered: boolean = false;

    /**
     * Allow one item to be bought in a single order. Default is false.
     * @type {boolean}
     */
    public sold_individually: boolean = false;

    /**
     * Product weight.
     * @type {string}
     */
    public weight: string = '';

    /**
     * Product dimensions. See Product - Dimensions properties.
     * @type {any}
     */
    public dimensions: ProductDimensions | null;

    /**
     * Shows if the product needs to be shipped.
     * @type {boolean}
     */
    public readonly shipping_required: boolean = false;

    /**
     * Shows whether the product shipping is taxable.
     * @type {boolean}
     */
    public readonly shipping_taxable: boolean = false;

    /**
     * Shipping class slug.
     * @type {string}
     */
    public shipping_class: string = '';

    /**
     * Shipping class ID.
     * @type {number}
     */
    public readonly shipping_class_id: number = 0;

    /**
     * Allow reviews. Default is true.
     * @type {boolean}
     */
    public reviews_allowed: boolean = true;

    /**
     * Reviews average rating.
     * @type {string}
     */
    public readonly average_rating: string = '';

    /**
     * Amount of reviews that the product has.
     * @type {number}
     */
    public readonly rating_count: number = 0;

    /**
     * List of related products IDs.
     * @type {number[]}
     */
    public readonly related_ids: number[] = [];

    /**
     * List of up-sell products IDs.
     * @type {number[]}
     */
    public upsell_ids: number[] = [];

    /**
     * List of cross-sell products IDs.
     * @type {number[]}
     */
    public cross_sell_ids: number[] = [];

    /**
     * Product parent ID.
     * @type {number}
     */
    public parent_id: number = 0;

    /**
     * Optional note to send the customer after purchase.
     * @type {string}
     */
    public purchase_note: string = '';

    /**
     * List of categories. See Product - Categories properties.
     * @type {any[]}
     */
    public categories: ProductCategory[] = [];

    /**
     * List of tags. See Product - Tags properties.
     * @type {any[]}
     */
    public tags: ProductTag[] = [];

    /**
     * List of images. See Product - Images properties.
     * @type {any[]}
     */
    public images: ProductImage[] = [];

    /**
     * List of attributes. See Product - Attributes properties.
     * @type {any[]}
     */
    public attributes: ProductAttribute[] = [];

    /**
     * Defaults variation attributes. See Product - Default attributes properties.
     * @type {any[]}
     */
    public default_attributes: ProductDefaultAttribute[] = [];

    /**
     * List of variations IDs.
     * @type {number[]}
     */
    public readonly variations: number[] = [];

    /**
     * List of grouped products ID.
     * @type {number[]}
     */
    public grouped_products: number[] = [];

    /**
     * Menu order, used to custom sort products.
     * @type {number}
     */
    public menu_order: number = 0;

    /**
     * Meta data. See Product - Meta data properties.
     * @type {any[]}
     */
    public meta_data: Meta[] = [];

    // /**
    //  * @constructor
    //  * @param {Object} data - The initial data for the product.
    //  */
    // constructor(data: Object) {
    //     // Initialize the product with the provided data.
    //     // You may need to add specific initialization logic based on your requirements.
    // }
}
