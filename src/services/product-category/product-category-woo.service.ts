import WooCommerceRestApi, {IWooCommerceRestApiOptions} from "@carmineconversano/woocommerce-rest-api-fork";
import {NoParams, ProductCategoryObjectWooDto} from "../../models";
import {WooCommerceService} from "../woo-commerce.service";
import {ProductCategoryDeleteParamsDto, ProductCategoryQueryParams,} from "../../models";

export class ProductCategoryWooService extends WooCommerceService<ProductCategoryObjectWooDto, ProductCategoryQueryParams, NoParams, ProductCategoryDeleteParamsDto> {

    constructor(props: WooCommerceRestApi | IWooCommerceRestApiOptions) {
        super(props, `products/categories`);
    }
}