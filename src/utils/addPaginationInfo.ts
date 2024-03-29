import {SuccessResponse} from "../models";

export function addPaginationInfo(response: SuccessResponse<any>) {
    if(response.headers) {
        response.pages = Number(response.headers["x-wp-total-pages"] || response.headers["x-wp-totalpages"] || '0');
        response.total = Number(response.headers["x-wp-total"] || '0');
    }
    return response;
}