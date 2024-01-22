import {Model} from "../shared/Model";

export class Refunds extends Model {
    public readonly reason: string;

    public readonly total: string;
}