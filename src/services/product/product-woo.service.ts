import WooCommerceRestApi, {IWooCommerceRestApiOptions} from "@carmineconversano/woocommerce-rest-api-fork";
import {ProductQueryParamsWoo, ProductWooDto} from "../../models";
import {WooCommerceService} from "../woo-commerce.service";
import {NoParams} from "../../models";

export class ProductWooService extends WooCommerceService<ProductWooDto, ProductQueryParamsWoo, NoParams> {

    constructor(props: WooCommerceRestApi | IWooCommerceRestApiOptions) {
        super(props, 'products');
    }
}