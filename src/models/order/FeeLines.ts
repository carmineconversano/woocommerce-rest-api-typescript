import {Model} from "../shared/Model";
import {Taxes} from "./Taxes";
import {Meta} from "../shared";

export class FeeLines extends Model{
    public name: string;

    public tax_class: string;

    public tax_status: string;

    public total: string;

    public total_tax: string;

    public taxes: Taxes[];

    public meta_data: Meta[]
}