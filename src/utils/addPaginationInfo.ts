import {SuccessResponse} from "../models";

export function addPaginationInfo(response: SuccessResponse<any>) {
    response.pages = Number(response.headers["x-wp-total-pages"] || '0');
    response.total = Number(response.headers["x-wp-total"] || '0');
    return response;
}