import WooCommerceRestApi, {IWooCommerceRestApiOptions} from "@carmineconversano/woocommerce-rest-api-fork";
import {NoParams} from "../../models";
import {WooCommerceService} from "../woo-commerce.service";
import {
    ProductCategoryDeleteParamsDto,
    ProductCategoryQueryParams,
    ProductCategoryWooDto
} from "../../models/product-category";

export class ProductCategoryWooService extends WooCommerceService<ProductCategoryWooDto, ProductCategoryQueryParams, NoParams, ProductCategoryDeleteParamsDto> {

    constructor(props: WooCommerceRestApi | IWooCommerceRestApiOptions) {
        super(props, `products/categories`);
    }
}