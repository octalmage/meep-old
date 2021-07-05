export interface MeepMsgCreatePostResponse {
    /** @format uint64 */
    id?: string;
}
export interface MeepMsgCreateThreadResponse {
    /** @format uint64 */
    id?: string;
}
export interface MeepMsgCreateTipResponse {
    /** @format uint64 */
    id?: string;
}
export interface MeepMsgCreateUsernameResponse {
    /** @format uint64 */
    id?: string;
}
export declare type MeepMsgDeletePostResponse = object;
export declare type MeepMsgDeleteThreadResponse = object;
export declare type MeepMsgDeleteTipResponse = object;
export declare type MeepMsgDeleteUsernameResponse = object;
export declare type MeepMsgSubmitBanUserProposalResponse = object;
export declare type MeepMsgUpdatePostResponse = object;
export declare type MeepMsgUpdateThreadResponse = object;
export declare type MeepMsgUpdateTipResponse = object;
export declare type MeepMsgUpdateUsernameResponse = object;
export interface MeepPost {
    creator?: string;
    /** @format int64 */
    createdAt?: string;
    /** @format uint64 */
    id?: string;
    /** @format uint64 */
    thread?: string;
    body?: string;
    image?: string;
}
export interface MeepQueryAllPostResponse {
    Post?: MeepPost[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface MeepQueryAllThreadResponse {
    Thread?: MeepThread[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
    /** @format uint64 */
    count?: string;
}
export interface MeepQueryAllTipResponse {
    Tip?: MeepTip[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface MeepQueryAllUsernameResponse {
    Username?: MeepUsername[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface MeepQueryGetPostResponse {
    Post?: MeepPost;
}
export interface MeepQueryGetThreadResponse {
    Thread?: MeepThread;
}
export interface MeepQueryGetTipResponse {
    Tip?: MeepTip;
}
export interface MeepQueryGetUsernameResponse {
    Username?: MeepUsername;
}
export interface MeepThread {
    creator?: string;
    /** @format uint64 */
    id?: string;
    /** @format int64 */
    createdAt?: string;
}
export interface MeepTip {
    creator?: string;
    /** @format uint64 */
    id?: string;
    /** @format uint64 */
    postId?: string;
    /** @format int32 */
    amount?: number;
}
export interface MeepUsername {
    creator?: string;
    /** @format uint64 */
    id?: string;
    name?: string;
}
export interface ProtobufAny {
    typeUrl?: string;
    /** @format byte */
    value?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title meep/genesis.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryPostAll
     * @request GET:/octalmage/meep/meep/post
     */
    queryPostAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MeepQueryAllPostResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryPost
     * @request GET:/octalmage/meep/meep/post/{id}
     */
    queryPost: (id: string, params?: RequestParams) => Promise<HttpResponse<MeepQueryGetPostResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryThreadAll
     * @request GET:/octalmage/meep/meep/thread
     */
    queryThreadAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MeepQueryAllThreadResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryThread
     * @request GET:/octalmage/meep/meep/thread/{id}
     */
    queryThread: (id: string, params?: RequestParams) => Promise<HttpResponse<MeepQueryGetThreadResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryTipAll
     * @request GET:/octalmage/meep/meep/tip
     */
    queryTipAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MeepQueryAllTipResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryTip
     * @summary this line is used by starport scaffolding # 2
     * @request GET:/octalmage/meep/meep/tip/{id}
     */
    queryTip: (id: string, params?: RequestParams) => Promise<HttpResponse<MeepQueryGetTipResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryUsernameAll
     * @request GET:/octalmage/meep/meep/username
     */
    queryUsernameAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<MeepQueryAllUsernameResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryUsername
     * @request GET:/octalmage/meep/meep/username/{id}
     */
    queryUsername: (id: string, params?: RequestParams) => Promise<HttpResponse<MeepQueryGetUsernameResponse, RpcStatus>>;
}
export {};
