import {Model} from "../shared/Model";
import {Meta} from "../shared";

export class OrderTaxLinesWooDto extends Model{
    public readonly rate_code: string;

    public readonly rate_id: string;

    public readonly label: string;

    public readonly compound: boolean;

    public readonly tax_total: string;

    public readonly shipping_tax_total: string;

    public readonly rate_percent?: number;

    public meta_data: Meta[];
}