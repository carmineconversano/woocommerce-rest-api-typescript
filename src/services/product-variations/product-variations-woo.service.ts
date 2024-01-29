import WooCommerceRestApi, {IWooCommerceRestApiOptions} from "@carmineconversano/woocommerce-rest-api-fork";
import {NoParams, ProductVariationsWooDto} from "../../models";
import {WooCommerceService} from "../woo-commerce.service";
import {
    ProductVariationsQueryParamsWooDto
} from "../../models";
import {
    ProductVariationsDeleteQueryParamsDto
} from "../../models";

export class ProductVariationsWooService extends WooCommerceService<ProductVariationsWooDto, ProductVariationsQueryParamsWooDto, NoParams, ProductVariationsDeleteQueryParamsDto> {

    constructor(props: WooCommerceRestApi | IWooCommerceRestApiOptions, productId: number) {
        super(props, `products/${productId}/variations`);
    }
}