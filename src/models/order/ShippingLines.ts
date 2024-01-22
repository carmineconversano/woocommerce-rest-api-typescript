import {Model} from "../shared/Model";
import {Taxes} from "./Taxes";
import {Meta} from "../shared";

export class ShippingLines extends Model {
    public method_title: string;

    public method_id: string;

    public total: string;

    public total_tax: string;

    public taxes: Taxes[];

    public meta_data: Meta[]
}