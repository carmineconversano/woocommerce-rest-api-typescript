import {SuccessResponse} from "../models/shared/SuccessResponse";

export function addPaginationInfo(response: SuccessResponse<any>) {
    response.pages = Number(response.headers["x-wp-total-pages"]);
    response.total = Number(response.headers["x-wp-total"]);
    return response;
}