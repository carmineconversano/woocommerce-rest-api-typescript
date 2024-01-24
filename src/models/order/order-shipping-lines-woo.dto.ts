import {Model} from "../shared/Model";
import {OrderTaxesWooDto} from "./order-taxes-woo.dto";
import {Meta} from "../shared";

export class OrderShippingLinesWooDto extends Model {
    public method_title: string;

    public method_id: string;

    public total: string;

    public total_tax: string;

    public taxes: OrderTaxesWooDto[];

    public meta_data: Meta[]
}