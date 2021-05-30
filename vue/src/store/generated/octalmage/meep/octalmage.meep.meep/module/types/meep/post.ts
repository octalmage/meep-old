/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "octalmage.meep.meep";

export interface Post {
  creator: string;
  createdAt: number;
  id: number;
  thread: number;
  body: string;
  image: string;
}

const basePost: object = {
  creator: "",
  createdAt: 0,
  id: 0,
  thread: 0,
  body: "",
  image: "",
};

export const Post = {
  encode(message: Post, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.createdAt !== 0) {
      writer.uint32(16).int64(message.createdAt);
    }
    if (message.id !== 0) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.thread !== 0) {
      writer.uint32(32).uint64(message.thread);
    }
    if (message.body !== "") {
      writer.uint32(42).string(message.body);
    }
    if (message.image !== "") {
      writer.uint32(50).string(message.image);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Post {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePost } as Post;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.thread = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.body = reader.string();
          break;
        case 6:
          message.image = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Post {
    const message = { ...basePost } as Post;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.thread !== undefined && object.thread !== null) {
      message.thread = Number(object.thread);
    } else {
      message.thread = 0;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = String(object.image);
    } else {
      message.image = "";
    }
    return message;
  },

  toJSON(message: Post): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    message.id !== undefined && (obj.id = message.id);
    message.thread !== undefined && (obj.thread = message.thread);
    message.body !== undefined && (obj.body = message.body);
    message.image !== undefined && (obj.image = message.image);
    return obj;
  },

  fromPartial(object: DeepPartial<Post>): Post {
    const message = { ...basePost } as Post;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.thread !== undefined && object.thread !== null) {
      message.thread = object.thread;
    } else {
      message.thread = 0;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    } else {
      message.image = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
