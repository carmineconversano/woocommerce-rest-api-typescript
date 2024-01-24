import WooCommerceRestApi, {IWooCommerceRestApiOptions} from "@carmineconversano/woocommerce-rest-api-fork";
import {CustomerDeleteQueryParamsWooDto, CustomerQueryParamsWooDto, CustomerWooDto, NoParams} from "../../models";
import {WooCommerceService} from "../woo-commerce.service";

export class CustomerWooService extends WooCommerceService<CustomerWooDto, CustomerQueryParamsWooDto, NoParams, CustomerDeleteQueryParamsWooDto> {

    constructor(props: WooCommerceRestApi | IWooCommerceRestApiOptions) {
        super(props, 'customers');
    }
}