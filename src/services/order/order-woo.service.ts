import WooCommerceRestApi from "@carmineconversano/woocommerce-rest-api-fork";
import {OrderQueryParamsWooDto} from "../../models";
import {OrderWooDto} from "../../models";
import {SuccessResponse} from "../../models";
import {addPaginationInfo} from "../../utils/addPaginationInfo";
import {OrderQueryParamsOneWooDto} from "../../models/order/order-query-params-one-woo.dto";

export class OrderWooService extends WooCommerceRestApi {
    private PATH = 'orders';

    public async retrieveList(query: OrderQueryParamsWooDto): Promise<SuccessResponse<OrderWooDto[]>> {
        const response: SuccessResponse<OrderWooDto[]> = await this.get(this.PATH, query);
        return Promise.resolve(
            addPaginationInfo(response)
        )
    }

    public async retrieveOne(orderId: number, query: OrderQueryParamsOneWooDto): Promise<SuccessResponse<OrderWooDto>> {
        return await this.get(`${this.PATH}/${orderId}`, query);
    }
}