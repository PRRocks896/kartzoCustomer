export interface findstoreStateRequest {
    count: string,
    currentPage: string,
    items_per_page: string,
    upperPageBound: number,
    lowerPageBound: number,
    pageBound: number,
    onItemSelect: string,
    switchSort: boolean,
    isStatus: boolean,
    slugname:string,
    location:string,
    merchantdata:any,
    isLoading:boolean
}