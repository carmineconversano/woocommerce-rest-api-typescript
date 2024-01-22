interface paginationHeaders {
    "x-wp-total"?: string;
    "x-wp-total-pages"?: string;
}

export class SuccessResponse<T> {
    status: number;
    statusText: string;
    headers?: paginationHeaders;
    data: T;
    public total?: number;

    public pages?: number;
}