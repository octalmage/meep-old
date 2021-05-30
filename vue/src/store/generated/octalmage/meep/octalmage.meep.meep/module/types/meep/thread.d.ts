import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "octalmage.meep.meep";
export interface Thread {
    creator: string;
    id: number;
    createdAt: number;
}
export declare const Thread: {
    encode(message: Thread, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Thread;
    fromJSON(object: any): Thread;
    toJSON(message: Thread): unknown;
    fromPartial(object: DeepPartial<Thread>): Thread;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
