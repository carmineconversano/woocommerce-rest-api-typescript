import WooCommerceRestApi from "@carmineconversano/woocommerce-rest-api-fork";
import {OrderQueryParams} from "../../models";
import {SuccessResponse} from "../../models";
import {addPaginationInfo} from "../../utils/addPaginationInfo";
import {Product} from "../../models";

export class ProductService extends WooCommerceRestApi {
    private PATH = 'products';

    public async retrieveList(query: OrderQueryParams): Promise<SuccessResponse<Product[]>> {
        const response: SuccessResponse<Product[]> = await this.get(this.PATH, query);
        return Promise.resolve(
            addPaginationInfo(response)
        )
    }

    public async retrieveOne(productId: number): Promise<SuccessResponse<Product>> {
        return await this.get(`${this.PATH}/${productId}`);
    }
}