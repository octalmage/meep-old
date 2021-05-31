import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "octalmage.meep.meep";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateUsername {
    creator: string;
    name: string;
}
export interface MsgCreateUsernameResponse {
    id: number;
}
export interface MsgUpdateUsername {
    creator: string;
    id: number;
    name: string;
}
export interface MsgUpdateUsernameResponse {
}
export interface MsgDeleteUsername {
    creator: string;
    id: number;
}
export interface MsgDeleteUsernameResponse {
}
export interface MsgCreateThread {
    creator: string;
}
export interface MsgCreateThreadResponse {
    id: number;
}
export interface MsgUpdateThread {
    creator: string;
    id: number;
}
export interface MsgUpdateThreadResponse {
}
export interface MsgDeleteThread {
    creator: string;
    id: number;
}
export interface MsgDeleteThreadResponse {
}
export interface MsgCreatePost {
    creator: string;
    thread: number;
    body: string;
    image: string;
}
export interface MsgCreatePostResponse {
    id: number;
}
export interface MsgUpdatePost {
    creator: string;
    id: number;
    body: string;
}
export interface MsgUpdatePostResponse {
}
export interface MsgDeletePost {
    creator: string;
    id: number;
}
export interface MsgDeletePostResponse {
}
export declare const MsgCreateUsername: {
    encode(message: MsgCreateUsername, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateUsername;
    fromJSON(object: any): MsgCreateUsername;
    toJSON(message: MsgCreateUsername): unknown;
    fromPartial(object: DeepPartial<MsgCreateUsername>): MsgCreateUsername;
};
export declare const MsgCreateUsernameResponse: {
    encode(message: MsgCreateUsernameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateUsernameResponse;
    fromJSON(object: any): MsgCreateUsernameResponse;
    toJSON(message: MsgCreateUsernameResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateUsernameResponse>): MsgCreateUsernameResponse;
};
export declare const MsgUpdateUsername: {
    encode(message: MsgUpdateUsername, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateUsername;
    fromJSON(object: any): MsgUpdateUsername;
    toJSON(message: MsgUpdateUsername): unknown;
    fromPartial(object: DeepPartial<MsgUpdateUsername>): MsgUpdateUsername;
};
export declare const MsgUpdateUsernameResponse: {
    encode(_: MsgUpdateUsernameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateUsernameResponse;
    fromJSON(_: any): MsgUpdateUsernameResponse;
    toJSON(_: MsgUpdateUsernameResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateUsernameResponse>): MsgUpdateUsernameResponse;
};
export declare const MsgDeleteUsername: {
    encode(message: MsgDeleteUsername, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteUsername;
    fromJSON(object: any): MsgDeleteUsername;
    toJSON(message: MsgDeleteUsername): unknown;
    fromPartial(object: DeepPartial<MsgDeleteUsername>): MsgDeleteUsername;
};
export declare const MsgDeleteUsernameResponse: {
    encode(_: MsgDeleteUsernameResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteUsernameResponse;
    fromJSON(_: any): MsgDeleteUsernameResponse;
    toJSON(_: MsgDeleteUsernameResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteUsernameResponse>): MsgDeleteUsernameResponse;
};
export declare const MsgCreateThread: {
    encode(message: MsgCreateThread, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateThread;
    fromJSON(object: any): MsgCreateThread;
    toJSON(message: MsgCreateThread): unknown;
    fromPartial(object: DeepPartial<MsgCreateThread>): MsgCreateThread;
};
export declare const MsgCreateThreadResponse: {
    encode(message: MsgCreateThreadResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateThreadResponse;
    fromJSON(object: any): MsgCreateThreadResponse;
    toJSON(message: MsgCreateThreadResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateThreadResponse>): MsgCreateThreadResponse;
};
export declare const MsgUpdateThread: {
    encode(message: MsgUpdateThread, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateThread;
    fromJSON(object: any): MsgUpdateThread;
    toJSON(message: MsgUpdateThread): unknown;
    fromPartial(object: DeepPartial<MsgUpdateThread>): MsgUpdateThread;
};
export declare const MsgUpdateThreadResponse: {
    encode(_: MsgUpdateThreadResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateThreadResponse;
    fromJSON(_: any): MsgUpdateThreadResponse;
    toJSON(_: MsgUpdateThreadResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateThreadResponse>): MsgUpdateThreadResponse;
};
export declare const MsgDeleteThread: {
    encode(message: MsgDeleteThread, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteThread;
    fromJSON(object: any): MsgDeleteThread;
    toJSON(message: MsgDeleteThread): unknown;
    fromPartial(object: DeepPartial<MsgDeleteThread>): MsgDeleteThread;
};
export declare const MsgDeleteThreadResponse: {
    encode(_: MsgDeleteThreadResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteThreadResponse;
    fromJSON(_: any): MsgDeleteThreadResponse;
    toJSON(_: MsgDeleteThreadResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteThreadResponse>): MsgDeleteThreadResponse;
};
export declare const MsgCreatePost: {
    encode(message: MsgCreatePost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePost;
    fromJSON(object: any): MsgCreatePost;
    toJSON(message: MsgCreatePost): unknown;
    fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost;
};
export declare const MsgCreatePostResponse: {
    encode(message: MsgCreatePostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreatePostResponse;
    fromJSON(object: any): MsgCreatePostResponse;
    toJSON(message: MsgCreatePostResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreatePostResponse>): MsgCreatePostResponse;
};
export declare const MsgUpdatePost: {
    encode(message: MsgUpdatePost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePost;
    fromJSON(object: any): MsgUpdatePost;
    toJSON(message: MsgUpdatePost): unknown;
    fromPartial(object: DeepPartial<MsgUpdatePost>): MsgUpdatePost;
};
export declare const MsgUpdatePostResponse: {
    encode(_: MsgUpdatePostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdatePostResponse;
    fromJSON(_: any): MsgUpdatePostResponse;
    toJSON(_: MsgUpdatePostResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdatePostResponse>): MsgUpdatePostResponse;
};
export declare const MsgDeletePost: {
    encode(message: MsgDeletePost, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePost;
    fromJSON(object: any): MsgDeletePost;
    toJSON(message: MsgDeletePost): unknown;
    fromPartial(object: DeepPartial<MsgDeletePost>): MsgDeletePost;
};
export declare const MsgDeletePostResponse: {
    encode(_: MsgDeletePostResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeletePostResponse;
    fromJSON(_: any): MsgDeletePostResponse;
    toJSON(_: MsgDeletePostResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeletePostResponse>): MsgDeletePostResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateUsername(request: MsgCreateUsername): Promise<MsgCreateUsernameResponse>;
    UpdateUsername(request: MsgUpdateUsername): Promise<MsgUpdateUsernameResponse>;
    DeleteUsername(request: MsgDeleteUsername): Promise<MsgDeleteUsernameResponse>;
    CreateThread(request: MsgCreateThread): Promise<MsgCreateThreadResponse>;
    UpdateThread(request: MsgUpdateThread): Promise<MsgUpdateThreadResponse>;
    DeleteThread(request: MsgDeleteThread): Promise<MsgDeleteThreadResponse>;
    CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
    UpdatePost(request: MsgUpdatePost): Promise<MsgUpdatePostResponse>;
    DeletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateUsername(request: MsgCreateUsername): Promise<MsgCreateUsernameResponse>;
    UpdateUsername(request: MsgUpdateUsername): Promise<MsgUpdateUsernameResponse>;
    DeleteUsername(request: MsgDeleteUsername): Promise<MsgDeleteUsernameResponse>;
    CreateThread(request: MsgCreateThread): Promise<MsgCreateThreadResponse>;
    UpdateThread(request: MsgUpdateThread): Promise<MsgUpdateThreadResponse>;
    DeleteThread(request: MsgDeleteThread): Promise<MsgDeleteThreadResponse>;
    CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
    UpdatePost(request: MsgUpdatePost): Promise<MsgUpdatePostResponse>;
    DeletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
