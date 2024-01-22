import WooCommerceRestApi from "@carmineconversano/woocommerce-rest-api-fork";
import {OrderQueryParams} from "../../models/Order/OrderQueryParams";
import {Order} from "../../models/Order/Order";
import {SuccessResponse} from "../../models/shared/SuccessResponse";
import {addPaginationInfo} from "../../utils/addPaginationInfo";

export class OrderService extends WooCommerceRestApi {
    private PATH = 'orders';

    public async retrieveList(query: OrderQueryParams): Promise<SuccessResponse<Order[]>> {
        const response: SuccessResponse<Order[]> = await this.get(this.PATH, query);
        return Promise.resolve(
            addPaginationInfo(response)
        )
    }

    public async retrieveOne(orderId: number): Promise<SuccessResponse<Order>> {
        return await this.get(`${this.PATH}/${orderId}`);
    }
}