import WooCommerceRestApi, { IWooCommerceRestApiOptions } from "@carmineconversano/woocommerce-rest-api-fork";
import {OrderWooDto, SuccessResponse} from "../models";
import {addPaginationInfo} from "../utils/addPaginationInfo";
import {BatchWooDto} from "../models/shared/batch-woo.dto";
/**
 * Description of the class WooCommerceService.
 *
 * @template T Type of resource to use (order, product, customer...).
 * @template Q Type of query params to use for retrieveList
 * @template O Type of query params to use for retrieveOne
 * @template D Type of query params to use for delete
 */
export class WooCommerceService<T, Q, O, D> extends WooCommerceRestApi {

    private readonly PATH: string;

    constructor(props: WooCommerceRestApi | IWooCommerceRestApiOptions, path: string) {
        super(props);
        this.PATH = path;
    }

    public async retrieveList(query: Q): Promise<SuccessResponse<T[]>> {
        const response: SuccessResponse<T[]> = await this.get(this.PATH, query);
        return Promise.resolve(
            addPaginationInfo(response)
        )
    }

    public async retrieveOne(id: number, query: O): Promise<SuccessResponse<T>> {
        return await this.get(`${this.PATH}/${id}`, query);
    }

    public async create(toCreate: Partial<T>): Promise<SuccessResponse<T>> {
        return await this.post(this.PATH, toCreate);
    }

    public async update(toUpdate: Partial<T>): Promise<SuccessResponse<T>> {
        return await this.post(this.PATH, toUpdate);
    }

    public async deleteOne(id: number, query: D): Promise<SuccessResponse<T>>  {
        return await this.delete(`${this.PATH}/${id}`, query);
    }

    public async batchUpdate(batch: BatchWooDto<OrderWooDto>) {
        return await this.post(`${this.PATH}/batch`, batch);
    }
}

