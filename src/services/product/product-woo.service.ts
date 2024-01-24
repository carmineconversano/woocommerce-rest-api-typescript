import WooCommerceRestApi, {IWooCommerceRestApiOptions} from "@carmineconversano/woocommerce-rest-api-fork";
import {NoParams, ProductDeleteQueryParamsWooDto, ProductQueryParamsWoo, ProductWooDto} from "../../models";
import {WooCommerceService} from "../woo-commerce.service";

export class ProductWooService extends WooCommerceService<ProductWooDto, ProductQueryParamsWoo, NoParams, ProductDeleteQueryParamsWooDto> {

    constructor(props: WooCommerceRestApi | IWooCommerceRestApiOptions) {
        super(props, 'products');
    }
}