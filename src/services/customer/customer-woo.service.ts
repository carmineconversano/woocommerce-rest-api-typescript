import WooCommerceRestApi, {IWooCommerceRestApiOptions} from "@carmineconversano/woocommerce-rest-api-fork";
import {CustomerWooDto, NoParams} from "../../models";
import {WooCommerceService} from "../woo-commerce.service";
import {CustomerQueryParamsWooDto} from "../../models/customer/customer-query-params-woo.dto";

export class CustomerWooService extends WooCommerceService<CustomerWooDto, CustomerQueryParamsWooDto, NoParams> {

    constructor(props: WooCommerceRestApi | IWooCommerceRestApiOptions) {
        super(props, 'customers');
    }
}