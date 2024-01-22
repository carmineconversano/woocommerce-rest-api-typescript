import {Model} from "../shared/Model";
import {Meta} from "../shared/Meta";

export class CouponLines extends Model {
    public code: string;

    public readonly discount: string;

    public readonly discount_tax: string;

    public meta_data: Meta[];
}