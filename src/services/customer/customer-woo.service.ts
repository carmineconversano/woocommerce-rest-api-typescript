import WooCommerceRestApi, {IWooCommerceRestApiOptions} from "@carmineconversano/woocommerce-rest-api-fork";
import {OrderQueryParamsWooDto, OrderWooDto} from "../../models";
import {WooCommerceService} from "../woo-commerce.service";
import {OrderQueryParamsOneWooDto} from "../../models/order/order-query-params-one-woo.dto";

export class CustomerWooService extends WooCommerceService<OrderWooDto, OrderQueryParamsWooDto, OrderQueryParamsOneWooDto> {

    constructor(props: WooCommerceRestApi | IWooCommerceRestApiOptions) {
        super(props, 'customers');
    }
}