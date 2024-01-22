import {Model} from "../shared/Model";
import {Meta} from "../shared";

export class TaxLines extends Model{
    public readonly rate_code: string;

    public readonly rate_id: string;

    public readonly label: string;

    public readonly compound: boolean;

    public readonly tax_total: string;

    public readonly shipping_tax_total: string;

    public meta_data: Meta[];
}