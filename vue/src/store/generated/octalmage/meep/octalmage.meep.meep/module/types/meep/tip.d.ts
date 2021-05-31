import { Writer, Reader } from "protobufjs/minimal";
export declare const protobufPackage = "octalmage.meep.meep";
export interface Tip {
    creator: string;
    id: number;
    postId: number;
    amount: number;
}
export declare const Tip: {
    encode(message: Tip, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Tip;
    fromJSON(object: any): Tip;
    toJSON(message: Tip): unknown;
    fromPartial(object: DeepPartial<Tip>): Tip;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
