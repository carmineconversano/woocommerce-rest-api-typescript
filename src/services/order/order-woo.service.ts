import WooCommerceRestApi, {IWooCommerceRestApiOptions} from "@carmineconversano/woocommerce-rest-api-fork";
import {OrderQueryParamsWooDto, OrderWooDto} from "../../models";
import {OrderQueryParamsOneWooDto} from "../../models";
import {WooCommerceService} from "../woo-commerce.service";
import {OrderDeleteQueryParamsWooDto} from "../../models";

export class OrderWooService extends WooCommerceService<OrderWooDto, OrderQueryParamsWooDto, OrderQueryParamsOneWooDto, OrderDeleteQueryParamsWooDto> {

    constructor(props: WooCommerceRestApi | IWooCommerceRestApiOptions) {
        super(props, 'orders');
    }
}