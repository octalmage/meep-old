/* eslint-disable */
import { Tip } from "../meep/tip";
import { Username } from "../meep/username";
import { Thread } from "../meep/thread";
import { Post } from "../meep/post";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "octalmage.meep.meep";

/** GenesisState defines the capability module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  tipList: Tip[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  usernameList: Username[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  threadList: Thread[];
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  postList: Post[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.tipList) {
      Tip.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.usernameList) {
      Username.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.threadList) {
      Thread.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.postList) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.tipList = [];
    message.usernameList = [];
    message.threadList = [];
    message.postList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 4:
          message.tipList.push(Tip.decode(reader, reader.uint32()));
          break;
        case 3:
          message.usernameList.push(Username.decode(reader, reader.uint32()));
          break;
        case 2:
          message.threadList.push(Thread.decode(reader, reader.uint32()));
          break;
        case 1:
          message.postList.push(Post.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tipList = [];
    message.usernameList = [];
    message.threadList = [];
    message.postList = [];
    if (object.tipList !== undefined && object.tipList !== null) {
      for (const e of object.tipList) {
        message.tipList.push(Tip.fromJSON(e));
      }
    }
    if (object.usernameList !== undefined && object.usernameList !== null) {
      for (const e of object.usernameList) {
        message.usernameList.push(Username.fromJSON(e));
      }
    }
    if (object.threadList !== undefined && object.threadList !== null) {
      for (const e of object.threadList) {
        message.threadList.push(Thread.fromJSON(e));
      }
    }
    if (object.postList !== undefined && object.postList !== null) {
      for (const e of object.postList) {
        message.postList.push(Post.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.tipList) {
      obj.tipList = message.tipList.map((e) => (e ? Tip.toJSON(e) : undefined));
    } else {
      obj.tipList = [];
    }
    if (message.usernameList) {
      obj.usernameList = message.usernameList.map((e) =>
        e ? Username.toJSON(e) : undefined
      );
    } else {
      obj.usernameList = [];
    }
    if (message.threadList) {
      obj.threadList = message.threadList.map((e) =>
        e ? Thread.toJSON(e) : undefined
      );
    } else {
      obj.threadList = [];
    }
    if (message.postList) {
      obj.postList = message.postList.map((e) =>
        e ? Post.toJSON(e) : undefined
      );
    } else {
      obj.postList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.tipList = [];
    message.usernameList = [];
    message.threadList = [];
    message.postList = [];
    if (object.tipList !== undefined && object.tipList !== null) {
      for (const e of object.tipList) {
        message.tipList.push(Tip.fromPartial(e));
      }
    }
    if (object.usernameList !== undefined && object.usernameList !== null) {
      for (const e of object.usernameList) {
        message.usernameList.push(Username.fromPartial(e));
      }
    }
    if (object.threadList !== undefined && object.threadList !== null) {
      for (const e of object.threadList) {
        message.threadList.push(Thread.fromPartial(e));
      }
    }
    if (object.postList !== undefined && object.postList !== null) {
      for (const e of object.postList) {
        message.postList.push(Post.fromPartial(e));
      }
    }
    return message;
  },
};

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
