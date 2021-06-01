/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "octalmage.meep.meep";

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateTip {
  creator: string;
  postId: number;
  amount: number;
}

export interface MsgCreateTipResponse {
  id: number;
}

export interface MsgUpdateTip {
  creator: string;
  id: number;
  postId: number;
  amount: number;
}

export interface MsgUpdateTipResponse {}

export interface MsgDeleteTip {
  creator: string;
  id: number;
}

export interface MsgDeleteTipResponse {}

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

export interface MsgUpdateUsernameResponse {}

export interface MsgDeleteUsername {
  creator: string;
  id: number;
}

export interface MsgDeleteUsernameResponse {}

export interface MsgCreateThread {
  creator: string;
  body: string;
  image: string;
}

export interface MsgCreateThreadResponse {
  id: number;
}

export interface MsgUpdateThread {
  creator: string;
  id: number;
}

export interface MsgUpdateThreadResponse {}

export interface MsgDeleteThread {
  creator: string;
  id: number;
}

export interface MsgDeleteThreadResponse {}

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

export interface MsgUpdatePostResponse {}

export interface MsgDeletePost {
  creator: string;
  id: number;
}

export interface MsgDeletePostResponse {}

const baseMsgCreateTip: object = { creator: "", postId: 0, amount: 0 };

export const MsgCreateTip = {
  encode(message: MsgCreateTip, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.postId !== 0) {
      writer.uint32(16).uint64(message.postId);
    }
    if (message.amount !== 0) {
      writer.uint32(24).int32(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTip {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTip } as MsgCreateTip;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.postId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.amount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTip {
    const message = { ...baseMsgCreateTip } as MsgCreateTip;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = Number(object.postId);
    } else {
      message.postId = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTip): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.postId !== undefined && (obj.postId = message.postId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateTip>): MsgCreateTip {
    const message = { ...baseMsgCreateTip } as MsgCreateTip;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = object.postId;
    } else {
      message.postId = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },
};

const baseMsgCreateTipResponse: object = { id: 0 };

export const MsgCreateTipResponse = {
  encode(
    message: MsgCreateTipResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateTipResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateTipResponse } as MsgCreateTipResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTipResponse {
    const message = { ...baseMsgCreateTipResponse } as MsgCreateTipResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateTipResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateTipResponse>): MsgCreateTipResponse {
    const message = { ...baseMsgCreateTipResponse } as MsgCreateTipResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateTip: object = { creator: "", id: 0, postId: 0, amount: 0 };

export const MsgUpdateTip = {
  encode(message: MsgUpdateTip, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.postId !== 0) {
      writer.uint32(24).uint64(message.postId);
    }
    if (message.amount !== 0) {
      writer.uint32(32).int32(message.amount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTip {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTip } as MsgUpdateTip;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.postId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.amount = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTip {
    const message = { ...baseMsgUpdateTip } as MsgUpdateTip;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = Number(object.postId);
    } else {
      message.postId = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Number(object.amount);
    } else {
      message.amount = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateTip): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.postId !== undefined && (obj.postId = message.postId);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateTip>): MsgUpdateTip {
    const message = { ...baseMsgUpdateTip } as MsgUpdateTip;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = object.postId;
    } else {
      message.postId = 0;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = 0;
    }
    return message;
  },
};

const baseMsgUpdateTipResponse: object = {};

export const MsgUpdateTipResponse = {
  encode(_: MsgUpdateTipResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTipResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTipResponse } as MsgUpdateTipResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateTipResponse {
    const message = { ...baseMsgUpdateTipResponse } as MsgUpdateTipResponse;
    return message;
  },

  toJSON(_: MsgUpdateTipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateTipResponse>): MsgUpdateTipResponse {
    const message = { ...baseMsgUpdateTipResponse } as MsgUpdateTipResponse;
    return message;
  },
};

const baseMsgDeleteTip: object = { creator: "", id: 0 };

export const MsgDeleteTip = {
  encode(message: MsgDeleteTip, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTip {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteTip } as MsgDeleteTip;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteTip {
    const message = { ...baseMsgDeleteTip } as MsgDeleteTip;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteTip): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteTip>): MsgDeleteTip {
    const message = { ...baseMsgDeleteTip } as MsgDeleteTip;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteTipResponse: object = {};

export const MsgDeleteTipResponse = {
  encode(_: MsgDeleteTipResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteTipResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteTipResponse } as MsgDeleteTipResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteTipResponse {
    const message = { ...baseMsgDeleteTipResponse } as MsgDeleteTipResponse;
    return message;
  },

  toJSON(_: MsgDeleteTipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteTipResponse>): MsgDeleteTipResponse {
    const message = { ...baseMsgDeleteTipResponse } as MsgDeleteTipResponse;
    return message;
  },
};

const baseMsgCreateUsername: object = { creator: "", name: "" };

export const MsgCreateUsername = {
  encode(message: MsgCreateUsername, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUsername {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateUsername } as MsgCreateUsername;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUsername {
    const message = { ...baseMsgCreateUsername } as MsgCreateUsername;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgCreateUsername): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateUsername>): MsgCreateUsername {
    const message = { ...baseMsgCreateUsername } as MsgCreateUsername;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgCreateUsernameResponse: object = { id: 0 };

export const MsgCreateUsernameResponse = {
  encode(
    message: MsgCreateUsernameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateUsernameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateUsernameResponse,
    } as MsgCreateUsernameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateUsernameResponse {
    const message = {
      ...baseMsgCreateUsernameResponse,
    } as MsgCreateUsernameResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateUsernameResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateUsernameResponse>
  ): MsgCreateUsernameResponse {
    const message = {
      ...baseMsgCreateUsernameResponse,
    } as MsgCreateUsernameResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateUsername: object = { creator: "", id: 0, name: "" };

export const MsgUpdateUsername = {
  encode(message: MsgUpdateUsername, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUsername {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateUsername } as MsgUpdateUsername;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateUsername {
    const message = { ...baseMsgUpdateUsername } as MsgUpdateUsername;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateUsername): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateUsername>): MsgUpdateUsername {
    const message = { ...baseMsgUpdateUsername } as MsgUpdateUsername;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseMsgUpdateUsernameResponse: object = {};

export const MsgUpdateUsernameResponse = {
  encode(
    _: MsgUpdateUsernameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateUsernameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateUsernameResponse,
    } as MsgUpdateUsernameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateUsernameResponse {
    const message = {
      ...baseMsgUpdateUsernameResponse,
    } as MsgUpdateUsernameResponse;
    return message;
  },

  toJSON(_: MsgUpdateUsernameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateUsernameResponse>
  ): MsgUpdateUsernameResponse {
    const message = {
      ...baseMsgUpdateUsernameResponse,
    } as MsgUpdateUsernameResponse;
    return message;
  },
};

const baseMsgDeleteUsername: object = { creator: "", id: 0 };

export const MsgDeleteUsername = {
  encode(message: MsgDeleteUsername, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUsername {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteUsername } as MsgDeleteUsername;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteUsername {
    const message = { ...baseMsgDeleteUsername } as MsgDeleteUsername;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteUsername): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteUsername>): MsgDeleteUsername {
    const message = { ...baseMsgDeleteUsername } as MsgDeleteUsername;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteUsernameResponse: object = {};

export const MsgDeleteUsernameResponse = {
  encode(
    _: MsgDeleteUsernameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteUsernameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteUsernameResponse,
    } as MsgDeleteUsernameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteUsernameResponse {
    const message = {
      ...baseMsgDeleteUsernameResponse,
    } as MsgDeleteUsernameResponse;
    return message;
  },

  toJSON(_: MsgDeleteUsernameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteUsernameResponse>
  ): MsgDeleteUsernameResponse {
    const message = {
      ...baseMsgDeleteUsernameResponse,
    } as MsgDeleteUsernameResponse;
    return message;
  },
};

const baseMsgCreateThread: object = { creator: "", body: "", image: "" };

export const MsgCreateThread = {
  encode(message: MsgCreateThread, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    if (message.image !== "") {
      writer.uint32(26).string(message.image);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateThread {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateThread } as MsgCreateThread;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.body = reader.string();
          break;
        case 3:
          message.image = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateThread {
    const message = { ...baseMsgCreateThread } as MsgCreateThread;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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

  toJSON(message: MsgCreateThread): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.body !== undefined && (obj.body = message.body);
    message.image !== undefined && (obj.image = message.image);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateThread>): MsgCreateThread {
    const message = { ...baseMsgCreateThread } as MsgCreateThread;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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

const baseMsgCreateThreadResponse: object = { id: 0 };

export const MsgCreateThreadResponse = {
  encode(
    message: MsgCreateThreadResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateThreadResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateThreadResponse,
    } as MsgCreateThreadResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateThreadResponse {
    const message = {
      ...baseMsgCreateThreadResponse,
    } as MsgCreateThreadResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreateThreadResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateThreadResponse>
  ): MsgCreateThreadResponse {
    const message = {
      ...baseMsgCreateThreadResponse,
    } as MsgCreateThreadResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateThread: object = { creator: "", id: 0 };

export const MsgUpdateThread = {
  encode(message: MsgUpdateThread, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateThread {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateThread } as MsgUpdateThread;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateThread {
    const message = { ...baseMsgUpdateThread } as MsgUpdateThread;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgUpdateThread): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateThread>): MsgUpdateThread {
    const message = { ...baseMsgUpdateThread } as MsgUpdateThread;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdateThreadResponse: object = {};

export const MsgUpdateThreadResponse = {
  encode(_: MsgUpdateThreadResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateThreadResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateThreadResponse,
    } as MsgUpdateThreadResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateThreadResponse {
    const message = {
      ...baseMsgUpdateThreadResponse,
    } as MsgUpdateThreadResponse;
    return message;
  },

  toJSON(_: MsgUpdateThreadResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateThreadResponse>
  ): MsgUpdateThreadResponse {
    const message = {
      ...baseMsgUpdateThreadResponse,
    } as MsgUpdateThreadResponse;
    return message;
  },
};

const baseMsgDeleteThread: object = { creator: "", id: 0 };

export const MsgDeleteThread = {
  encode(message: MsgDeleteThread, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteThread {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteThread } as MsgDeleteThread;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteThread {
    const message = { ...baseMsgDeleteThread } as MsgDeleteThread;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteThread): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteThread>): MsgDeleteThread {
    const message = { ...baseMsgDeleteThread } as MsgDeleteThread;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteThreadResponse: object = {};

export const MsgDeleteThreadResponse = {
  encode(_: MsgDeleteThreadResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteThreadResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteThreadResponse,
    } as MsgDeleteThreadResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteThreadResponse {
    const message = {
      ...baseMsgDeleteThreadResponse,
    } as MsgDeleteThreadResponse;
    return message;
  },

  toJSON(_: MsgDeleteThreadResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteThreadResponse>
  ): MsgDeleteThreadResponse {
    const message = {
      ...baseMsgDeleteThreadResponse,
    } as MsgDeleteThreadResponse;
    return message;
  },
};

const baseMsgCreatePost: object = {
  creator: "",
  thread: 0,
  body: "",
  image: "",
};

export const MsgCreatePost = {
  encode(message: MsgCreatePost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.thread !== 0) {
      writer.uint32(16).uint64(message.thread);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    if (message.image !== "") {
      writer.uint32(34).string(message.image);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.thread = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.body = reader.string();
          break;
        case 4:
          message.image = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePost {
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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

  toJSON(message: MsgCreatePost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.thread !== undefined && (obj.thread = message.thread);
    message.body !== undefined && (obj.body = message.body);
    message.image !== undefined && (obj.image = message.image);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreatePost>): MsgCreatePost {
    const message = { ...baseMsgCreatePost } as MsgCreatePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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

const baseMsgCreatePostResponse: object = { id: 0 };

export const MsgCreatePostResponse = {
  encode(
    message: MsgCreatePostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreatePostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreatePostResponse {
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgCreatePostResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreatePostResponse>
  ): MsgCreatePostResponse {
    const message = { ...baseMsgCreatePostResponse } as MsgCreatePostResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgUpdatePost: object = { creator: "", id: 0, body: "" };

export const MsgUpdatePost = {
  encode(message: MsgUpdatePost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.body !== "") {
      writer.uint32(26).string(message.body);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePost } as MsgUpdatePost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePost {
    const message = { ...baseMsgUpdatePost } as MsgUpdatePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePost>): MsgUpdatePost {
    const message = { ...baseMsgUpdatePost } as MsgUpdatePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    return message;
  },
};

const baseMsgUpdatePostResponse: object = {};

export const MsgUpdatePostResponse = {
  encode(_: MsgUpdatePostResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePostResponse } as MsgUpdatePostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdatePostResponse {
    const message = { ...baseMsgUpdatePostResponse } as MsgUpdatePostResponse;
    return message;
  },

  toJSON(_: MsgUpdatePostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdatePostResponse>): MsgUpdatePostResponse {
    const message = { ...baseMsgUpdatePostResponse } as MsgUpdatePostResponse;
    return message;
  },
};

const baseMsgDeletePost: object = { creator: "", id: 0 };

export const MsgDeletePost = {
  encode(message: MsgDeletePost, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePost {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePost } as MsgDeletePost;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePost {
    const message = { ...baseMsgDeletePost } as MsgDeletePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeletePost): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePost>): MsgDeletePost {
    const message = { ...baseMsgDeletePost } as MsgDeletePost;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeletePostResponse: object = {};

export const MsgDeletePostResponse = {
  encode(_: MsgDeletePostResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePostResponse } as MsgDeletePostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeletePostResponse {
    const message = { ...baseMsgDeletePostResponse } as MsgDeletePostResponse;
    return message;
  },

  toJSON(_: MsgDeletePostResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeletePostResponse>): MsgDeletePostResponse {
    const message = { ...baseMsgDeletePostResponse } as MsgDeletePostResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateTip(request: MsgCreateTip): Promise<MsgCreateTipResponse>;
  UpdateTip(request: MsgUpdateTip): Promise<MsgUpdateTipResponse>;
  DeleteTip(request: MsgDeleteTip): Promise<MsgDeleteTipResponse>;
  CreateUsername(
    request: MsgCreateUsername
  ): Promise<MsgCreateUsernameResponse>;
  UpdateUsername(
    request: MsgUpdateUsername
  ): Promise<MsgUpdateUsernameResponse>;
  DeleteUsername(
    request: MsgDeleteUsername
  ): Promise<MsgDeleteUsernameResponse>;
  CreateThread(request: MsgCreateThread): Promise<MsgCreateThreadResponse>;
  UpdateThread(request: MsgUpdateThread): Promise<MsgUpdateThreadResponse>;
  DeleteThread(request: MsgDeleteThread): Promise<MsgDeleteThreadResponse>;
  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse>;
  UpdatePost(request: MsgUpdatePost): Promise<MsgUpdatePostResponse>;
  DeletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateTip(request: MsgCreateTip): Promise<MsgCreateTipResponse> {
    const data = MsgCreateTip.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Msg",
      "CreateTip",
      data
    );
    return promise.then((data) =>
      MsgCreateTipResponse.decode(new Reader(data))
    );
  }

  UpdateTip(request: MsgUpdateTip): Promise<MsgUpdateTipResponse> {
    const data = MsgUpdateTip.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Msg",
      "UpdateTip",
      data
    );
    return promise.then((data) =>
      MsgUpdateTipResponse.decode(new Reader(data))
    );
  }

  DeleteTip(request: MsgDeleteTip): Promise<MsgDeleteTipResponse> {
    const data = MsgDeleteTip.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Msg",
      "DeleteTip",
      data
    );
    return promise.then((data) =>
      MsgDeleteTipResponse.decode(new Reader(data))
    );
  }

  CreateUsername(
    request: MsgCreateUsername
  ): Promise<MsgCreateUsernameResponse> {
    const data = MsgCreateUsername.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Msg",
      "CreateUsername",
      data
    );
    return promise.then((data) =>
      MsgCreateUsernameResponse.decode(new Reader(data))
    );
  }

  UpdateUsername(
    request: MsgUpdateUsername
  ): Promise<MsgUpdateUsernameResponse> {
    const data = MsgUpdateUsername.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Msg",
      "UpdateUsername",
      data
    );
    return promise.then((data) =>
      MsgUpdateUsernameResponse.decode(new Reader(data))
    );
  }

  DeleteUsername(
    request: MsgDeleteUsername
  ): Promise<MsgDeleteUsernameResponse> {
    const data = MsgDeleteUsername.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Msg",
      "DeleteUsername",
      data
    );
    return promise.then((data) =>
      MsgDeleteUsernameResponse.decode(new Reader(data))
    );
  }

  CreateThread(request: MsgCreateThread): Promise<MsgCreateThreadResponse> {
    const data = MsgCreateThread.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Msg",
      "CreateThread",
      data
    );
    return promise.then((data) =>
      MsgCreateThreadResponse.decode(new Reader(data))
    );
  }

  UpdateThread(request: MsgUpdateThread): Promise<MsgUpdateThreadResponse> {
    const data = MsgUpdateThread.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Msg",
      "UpdateThread",
      data
    );
    return promise.then((data) =>
      MsgUpdateThreadResponse.decode(new Reader(data))
    );
  }

  DeleteThread(request: MsgDeleteThread): Promise<MsgDeleteThreadResponse> {
    const data = MsgDeleteThread.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Msg",
      "DeleteThread",
      data
    );
    return promise.then((data) =>
      MsgDeleteThreadResponse.decode(new Reader(data))
    );
  }

  CreatePost(request: MsgCreatePost): Promise<MsgCreatePostResponse> {
    const data = MsgCreatePost.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Msg",
      "CreatePost",
      data
    );
    return promise.then((data) =>
      MsgCreatePostResponse.decode(new Reader(data))
    );
  }

  UpdatePost(request: MsgUpdatePost): Promise<MsgUpdatePostResponse> {
    const data = MsgUpdatePost.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Msg",
      "UpdatePost",
      data
    );
    return promise.then((data) =>
      MsgUpdatePostResponse.decode(new Reader(data))
    );
  }

  DeletePost(request: MsgDeletePost): Promise<MsgDeletePostResponse> {
    const data = MsgDeletePost.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Msg",
      "DeletePost",
      data
    );
    return promise.then((data) =>
      MsgDeletePostResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
