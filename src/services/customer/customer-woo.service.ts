import WooCommerceRestApi from "@carmineconversano/woocommerce-rest-api-fork";
import {CustomerWooDto} from "../../models";
import {SuccessResponse} from "../../models";
import {addPaginationInfo} from "../../utils/addPaginationInfo";
import {CustomerQueryParamsWooDto} from "../../models/customer/customer-query-params-woo.dto";

export class CustomerWooService extends WooCommerceRestApi {
    private PATH = 'customers';

    public async retrieveList(query: CustomerQueryParamsWooDto): Promise<SuccessResponse<CustomerWooDto[]>> {
        const response: SuccessResponse<CustomerWooDto[]> = await this.get(this.PATH, query);
        return Promise.resolve(
            addPaginationInfo(response)
        )
    }

    public async retrieveOne(customerId: number): Promise<SuccessResponse<CustomerWooDto>> {
        return await this.get(`${this.PATH}/${customerId}`);
    }
}