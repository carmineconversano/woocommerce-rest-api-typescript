import WooCommerceRestApi, { IWooCommerceRestApiOptions } from "@carmineconversano/woocommerce-rest-api-fork";
import {OrderQueryParamsWooDto} from "../../models";
import {OrderWooDto} from "../../models";
import {OrderQueryParamsOneWooDto} from "../../models/order/order-query-params-one-woo.dto";
import {WooCommerceService} from "../woo-commerce.service";

export class OrderWooService extends WooCommerceService<OrderWooDto, OrderQueryParamsWooDto, OrderQueryParamsOneWooDto> {

    constructor(props: WooCommerceRestApi | IWooCommerceRestApiOptions) {
        super(props, 'orders');
    }
}