import WooCommerceRestApi, { IWooCommerceRestApiOptions } from "@carmineconversano/woocommerce-rest-api-fork";
import {SuccessResponse} from "../models";
import {addPaginationInfo} from "../utils/addPaginationInfo";
/**
 * Description of the class MyClass.
 *
 * @template T Type of resource to use (order, product, customer...).
 * @template Q Type of query params to use for retrieveList
 * @template O Type of query params to use for retrieveOne
 */
export class WooCommerceService<T, Q, O> extends WooCommerceRestApi {

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
}