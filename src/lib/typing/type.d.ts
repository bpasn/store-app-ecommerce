interface ApiResponse<D extends object> {
    payload: D;
    status:number;
}