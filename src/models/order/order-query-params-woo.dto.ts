import {OrderStatus} from "./order-woo.dto";

export class OrderQueryParamsWooDto {
    public context?: 'view' | 'edit' = "view";
    public page: number = 1;
    public per_page: number = 10;
    public search?: string;
    public after?: string;
    public before?: string;
    public modified_after?: string;
    public modified_before?: string;
    public dates_are_gmt?: boolean;
    public exclude?: number[];
    public include?: number[];
    public offset: number;
    public order: 'asc' | 'desc' = 'desc';
    public orderby: 'date' | 'id' | 'include' | 'title' | 'slug' = 'date';
    public parent?: number[];
    public parent_exclude?: number[];
    public status: OrderStatus | 'any' = 'any';
    public customer?: number;
    public product?: number;
    public dp: number = 2;

}