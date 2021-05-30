import { Reader, Writer } from "protobufjs/minimal";
import { Thread } from "../meep/thread";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Post } from "../meep/post";
export declare const protobufPackage = "octalmage.meep.meep";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetThreadRequest {
    id: number;
}
export interface QueryGetThreadResponse {
    Thread: Thread | undefined;
}
export interface QueryAllThreadRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllThreadResponse {
    Thread: Thread[];
    pagination: PageResponse | undefined;
}
export interface QueryGetPostRequest {
    id: number;
}
export interface QueryGetPostResponse {
    Post: Post | undefined;
}
export interface QueryAllPostRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllPostResponse {
    Post: Post[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetThreadRequest: {
    encode(message: QueryGetThreadRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetThreadRequest;
    fromJSON(object: any): QueryGetThreadRequest;
    toJSON(message: QueryGetThreadRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetThreadRequest>): QueryGetThreadRequest;
};
export declare const QueryGetThreadResponse: {
    encode(message: QueryGetThreadResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetThreadResponse;
    fromJSON(object: any): QueryGetThreadResponse;
    toJSON(message: QueryGetThreadResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetThreadResponse>): QueryGetThreadResponse;
};
export declare const QueryAllThreadRequest: {
    encode(message: QueryAllThreadRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllThreadRequest;
    fromJSON(object: any): QueryAllThreadRequest;
    toJSON(message: QueryAllThreadRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllThreadRequest>): QueryAllThreadRequest;
};
export declare const QueryAllThreadResponse: {
    encode(message: QueryAllThreadResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllThreadResponse;
    fromJSON(object: any): QueryAllThreadResponse;
    toJSON(message: QueryAllThreadResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllThreadResponse>): QueryAllThreadResponse;
};
export declare const QueryGetPostRequest: {
    encode(message: QueryGetPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPostRequest;
    fromJSON(object: any): QueryGetPostRequest;
    toJSON(message: QueryGetPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetPostRequest>): QueryGetPostRequest;
};
export declare const QueryGetPostResponse: {
    encode(message: QueryGetPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetPostResponse;
    fromJSON(object: any): QueryGetPostResponse;
    toJSON(message: QueryGetPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetPostResponse>): QueryGetPostResponse;
};
export declare const QueryAllPostRequest: {
    encode(message: QueryAllPostRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPostRequest;
    fromJSON(object: any): QueryAllPostRequest;
    toJSON(message: QueryAllPostRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllPostRequest>): QueryAllPostRequest;
};
export declare const QueryAllPostResponse: {
    encode(message: QueryAllPostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllPostResponse;
    fromJSON(object: any): QueryAllPostResponse;
    toJSON(message: QueryAllPostResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllPostResponse>): QueryAllPostResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** this line is used by starport scaffolding # 2 */
    Thread(request: QueryGetThreadRequest): Promise<QueryGetThreadResponse>;
    ThreadAll(request: QueryAllThreadRequest): Promise<QueryAllThreadResponse>;
    Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
    PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Thread(request: QueryGetThreadRequest): Promise<QueryGetThreadResponse>;
    ThreadAll(request: QueryAllThreadRequest): Promise<QueryAllThreadResponse>;
    Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
    PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
