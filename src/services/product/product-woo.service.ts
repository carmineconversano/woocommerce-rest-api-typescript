import WooCommerceRestApi from "@carmineconversano/woocommerce-rest-api-fork";
import {ProductQueryParamsWoo} from "../../models";
import {SuccessResponse} from "../../models";
import {addPaginationInfo} from "../../utils/addPaginationInfo";
import {ProductWooDto} from "../../models";

export class ProductWooService extends WooCommerceRestApi {
    private PATH = 'products';

    public async retrieveList(query: ProductQueryParamsWoo): Promise<SuccessResponse<ProductWooDto[]>> {
        const response: SuccessResponse<ProductWooDto[]> = await this.get(this.PATH, query);
        return Promise.resolve(
            addPaginationInfo(response)
        )
    }

    public async retrieveOne(productId: number): Promise<SuccessResponse<ProductWooDto>> {
        return await this.get(`${this.PATH}/${productId}`);
    }
}