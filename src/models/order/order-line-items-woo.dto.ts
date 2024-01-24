import {Model} from "../shared/Model";
import {Meta} from "../shared";

export class OrderLineItemsWooDto extends Model{
    public name: string;

    public product_id: number;

    public variation_id: number;

    public quantity: number;

    public tax_class: string;

    public subtotal: string;

    public readonly subtotal_tax: string;

    public total: string;

    public readonly total_tax: string;

    public taxes: any[];

    public meta_data: Meta[];

    public readonly sku: string;

    public readonly price: string;
}