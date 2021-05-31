import { Reader, Writer } from "protobufjs/minimal";
import { Tip } from "../meep/tip";
import { PageRequest, PageResponse } from "../cosmos/base/query/v1beta1/pagination";
import { Username } from "../meep/username";
import { Thread } from "../meep/thread";
import { Post } from "../meep/post";
export declare const protobufPackage = "octalmage.meep.meep";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetTipRequest {
    id: number;
}
export interface QueryGetTipResponse {
    Tip: Tip | undefined;
}
export interface QueryAllTipRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllTipResponse {
    Tip: Tip[];
    pagination: PageResponse | undefined;
}
export interface QueryGetUsernameRequest {
    id: number;
}
export interface QueryGetUsernameResponse {
    Username: Username | undefined;
}
export interface QueryAllUsernameRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllUsernameResponse {
    Username: Username[];
    pagination: PageResponse | undefined;
}
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
    count: number;
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
export declare const QueryGetTipRequest: {
    encode(message: QueryGetTipRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTipRequest;
    fromJSON(object: any): QueryGetTipRequest;
    toJSON(message: QueryGetTipRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetTipRequest>): QueryGetTipRequest;
};
export declare const QueryGetTipResponse: {
    encode(message: QueryGetTipResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetTipResponse;
    fromJSON(object: any): QueryGetTipResponse;
    toJSON(message: QueryGetTipResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetTipResponse>): QueryGetTipResponse;
};
export declare const QueryAllTipRequest: {
    encode(message: QueryAllTipRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTipRequest;
    fromJSON(object: any): QueryAllTipRequest;
    toJSON(message: QueryAllTipRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllTipRequest>): QueryAllTipRequest;
};
export declare const QueryAllTipResponse: {
    encode(message: QueryAllTipResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllTipResponse;
    fromJSON(object: any): QueryAllTipResponse;
    toJSON(message: QueryAllTipResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllTipResponse>): QueryAllTipResponse;
};
export declare const QueryGetUsernameRequest: {
    encode(message: QueryGetUsernameRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetUsernameRequest;
    fromJSON(object: any): QueryGetUsernameRequest;
    toJSON(message: QueryGetUsernameRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetUsernameRequest>): QueryGetUsernameRequest;
};
export declare const QueryGetUsernameResponse: {
    encode(message: QueryGetUsernameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetUsernameResponse;
    fromJSON(object: any): QueryGetUsernameResponse;
    toJSON(message: QueryGetUsernameResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetUsernameResponse>): QueryGetUsernameResponse;
};
export declare const QueryAllUsernameRequest: {
    encode(message: QueryAllUsernameRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllUsernameRequest;
    fromJSON(object: any): QueryAllUsernameRequest;
    toJSON(message: QueryAllUsernameRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllUsernameRequest>): QueryAllUsernameRequest;
};
export declare const QueryAllUsernameResponse: {
    encode(message: QueryAllUsernameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllUsernameResponse;
    fromJSON(object: any): QueryAllUsernameResponse;
    toJSON(message: QueryAllUsernameResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllUsernameResponse>): QueryAllUsernameResponse;
};
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
    Tip(request: QueryGetTipRequest): Promise<QueryGetTipResponse>;
    TipAll(request: QueryAllTipRequest): Promise<QueryAllTipResponse>;
    Username(request: QueryGetUsernameRequest): Promise<QueryGetUsernameResponse>;
    UsernameAll(request: QueryAllUsernameRequest): Promise<QueryAllUsernameResponse>;
    Thread(request: QueryGetThreadRequest): Promise<QueryGetThreadResponse>;
    ThreadAll(request: QueryAllThreadRequest): Promise<QueryAllThreadResponse>;
    Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
    PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Tip(request: QueryGetTipRequest): Promise<QueryGetTipResponse>;
    TipAll(request: QueryAllTipRequest): Promise<QueryAllTipResponse>;
    Username(request: QueryGetUsernameRequest): Promise<QueryGetUsernameResponse>;
    UsernameAll(request: QueryAllUsernameRequest): Promise<QueryAllUsernameResponse>;
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
