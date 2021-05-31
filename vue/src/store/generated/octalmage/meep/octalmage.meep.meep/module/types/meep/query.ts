/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Username } from "../meep/username";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Thread } from "../meep/thread";
import { Post } from "../meep/post";

export const protobufPackage = "octalmage.meep.meep";

/** this line is used by starport scaffolding # 3 */
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

const baseQueryGetUsernameRequest: object = { id: 0 };

export const QueryGetUsernameRequest = {
  encode(
    message: QueryGetUsernameRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUsernameRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetUsernameRequest,
    } as QueryGetUsernameRequest;
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

  fromJSON(object: any): QueryGetUsernameRequest {
    const message = {
      ...baseQueryGetUsernameRequest,
    } as QueryGetUsernameRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetUsernameRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUsernameRequest>
  ): QueryGetUsernameRequest {
    const message = {
      ...baseQueryGetUsernameRequest,
    } as QueryGetUsernameRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetUsernameResponse: object = {};

export const QueryGetUsernameResponse = {
  encode(
    message: QueryGetUsernameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Username !== undefined) {
      Username.encode(message.Username, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetUsernameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetUsernameResponse,
    } as QueryGetUsernameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Username = Username.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetUsernameResponse {
    const message = {
      ...baseQueryGetUsernameResponse,
    } as QueryGetUsernameResponse;
    if (object.Username !== undefined && object.Username !== null) {
      message.Username = Username.fromJSON(object.Username);
    } else {
      message.Username = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetUsernameResponse): unknown {
    const obj: any = {};
    message.Username !== undefined &&
      (obj.Username = message.Username
        ? Username.toJSON(message.Username)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetUsernameResponse>
  ): QueryGetUsernameResponse {
    const message = {
      ...baseQueryGetUsernameResponse,
    } as QueryGetUsernameResponse;
    if (object.Username !== undefined && object.Username !== null) {
      message.Username = Username.fromPartial(object.Username);
    } else {
      message.Username = undefined;
    }
    return message;
  },
};

const baseQueryAllUsernameRequest: object = {};

export const QueryAllUsernameRequest = {
  encode(
    message: QueryAllUsernameRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUsernameRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllUsernameRequest,
    } as QueryAllUsernameRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUsernameRequest {
    const message = {
      ...baseQueryAllUsernameRequest,
    } as QueryAllUsernameRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUsernameRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUsernameRequest>
  ): QueryAllUsernameRequest {
    const message = {
      ...baseQueryAllUsernameRequest,
    } as QueryAllUsernameRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllUsernameResponse: object = {};

export const QueryAllUsernameResponse = {
  encode(
    message: QueryAllUsernameResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Username) {
      Username.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllUsernameResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllUsernameResponse,
    } as QueryAllUsernameResponse;
    message.Username = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Username.push(Username.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllUsernameResponse {
    const message = {
      ...baseQueryAllUsernameResponse,
    } as QueryAllUsernameResponse;
    message.Username = [];
    if (object.Username !== undefined && object.Username !== null) {
      for (const e of object.Username) {
        message.Username.push(Username.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllUsernameResponse): unknown {
    const obj: any = {};
    if (message.Username) {
      obj.Username = message.Username.map((e) =>
        e ? Username.toJSON(e) : undefined
      );
    } else {
      obj.Username = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllUsernameResponse>
  ): QueryAllUsernameResponse {
    const message = {
      ...baseQueryAllUsernameResponse,
    } as QueryAllUsernameResponse;
    message.Username = [];
    if (object.Username !== undefined && object.Username !== null) {
      for (const e of object.Username) {
        message.Username.push(Username.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetThreadRequest: object = { id: 0 };

export const QueryGetThreadRequest = {
  encode(
    message: QueryGetThreadRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetThreadRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetThreadRequest } as QueryGetThreadRequest;
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

  fromJSON(object: any): QueryGetThreadRequest {
    const message = { ...baseQueryGetThreadRequest } as QueryGetThreadRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetThreadRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetThreadRequest>
  ): QueryGetThreadRequest {
    const message = { ...baseQueryGetThreadRequest } as QueryGetThreadRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetThreadResponse: object = {};

export const QueryGetThreadResponse = {
  encode(
    message: QueryGetThreadResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Thread !== undefined) {
      Thread.encode(message.Thread, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetThreadResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetThreadResponse } as QueryGetThreadResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Thread = Thread.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetThreadResponse {
    const message = { ...baseQueryGetThreadResponse } as QueryGetThreadResponse;
    if (object.Thread !== undefined && object.Thread !== null) {
      message.Thread = Thread.fromJSON(object.Thread);
    } else {
      message.Thread = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetThreadResponse): unknown {
    const obj: any = {};
    message.Thread !== undefined &&
      (obj.Thread = message.Thread ? Thread.toJSON(message.Thread) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetThreadResponse>
  ): QueryGetThreadResponse {
    const message = { ...baseQueryGetThreadResponse } as QueryGetThreadResponse;
    if (object.Thread !== undefined && object.Thread !== null) {
      message.Thread = Thread.fromPartial(object.Thread);
    } else {
      message.Thread = undefined;
    }
    return message;
  },
};

const baseQueryAllThreadRequest: object = {};

export const QueryAllThreadRequest = {
  encode(
    message: QueryAllThreadRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllThreadRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllThreadRequest } as QueryAllThreadRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllThreadRequest {
    const message = { ...baseQueryAllThreadRequest } as QueryAllThreadRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllThreadRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllThreadRequest>
  ): QueryAllThreadRequest {
    const message = { ...baseQueryAllThreadRequest } as QueryAllThreadRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllThreadResponse: object = { count: 0 };

export const QueryAllThreadResponse = {
  encode(
    message: QueryAllThreadResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Thread) {
      Thread.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(24).uint64(message.count);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllThreadResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllThreadResponse } as QueryAllThreadResponse;
    message.Thread = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Thread.push(Thread.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        case 3:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllThreadResponse {
    const message = { ...baseQueryAllThreadResponse } as QueryAllThreadResponse;
    message.Thread = [];
    if (object.Thread !== undefined && object.Thread !== null) {
      for (const e of object.Thread) {
        message.Thread.push(Thread.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: QueryAllThreadResponse): unknown {
    const obj: any = {};
    if (message.Thread) {
      obj.Thread = message.Thread.map((e) =>
        e ? Thread.toJSON(e) : undefined
      );
    } else {
      obj.Thread = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllThreadResponse>
  ): QueryAllThreadResponse {
    const message = { ...baseQueryAllThreadResponse } as QueryAllThreadResponse;
    message.Thread = [];
    if (object.Thread !== undefined && object.Thread !== null) {
      for (const e of object.Thread) {
        message.Thread.push(Thread.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

const baseQueryGetPostRequest: object = { id: 0 };

export const QueryGetPostRequest = {
  encode(
    message: QueryGetPostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest;
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

  fromJSON(object: any): QueryGetPostRequest {
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPostRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPostRequest>): QueryGetPostRequest {
    const message = { ...baseQueryGetPostRequest } as QueryGetPostRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetPostResponse: object = {};

export const QueryGetPostResponse = {
  encode(
    message: QueryGetPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Post !== undefined) {
      Post.encode(message.Post, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Post = Post.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPostResponse {
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse;
    if (object.Post !== undefined && object.Post !== null) {
      message.Post = Post.fromJSON(object.Post);
    } else {
      message.Post = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPostResponse): unknown {
    const obj: any = {};
    message.Post !== undefined &&
      (obj.Post = message.Post ? Post.toJSON(message.Post) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetPostResponse>): QueryGetPostResponse {
    const message = { ...baseQueryGetPostResponse } as QueryGetPostResponse;
    if (object.Post !== undefined && object.Post !== null) {
      message.Post = Post.fromPartial(object.Post);
    } else {
      message.Post = undefined;
    }
    return message;
  },
};

const baseQueryAllPostRequest: object = {};

export const QueryAllPostRequest = {
  encode(
    message: QueryAllPostRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPostRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPostRequest {
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPostRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPostRequest>): QueryAllPostRequest {
    const message = { ...baseQueryAllPostRequest } as QueryAllPostRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllPostResponse: object = {};

export const QueryAllPostResponse = {
  encode(
    message: QueryAllPostResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.Post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllPostResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse;
    message.Post = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Post.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllPostResponse {
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse;
    message.Post = [];
    if (object.Post !== undefined && object.Post !== null) {
      for (const e of object.Post) {
        message.Post.push(Post.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllPostResponse): unknown {
    const obj: any = {};
    if (message.Post) {
      obj.Post = message.Post.map((e) => (e ? Post.toJSON(e) : undefined));
    } else {
      obj.Post = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllPostResponse>): QueryAllPostResponse {
    const message = { ...baseQueryAllPostResponse } as QueryAllPostResponse;
    message.Post = [];
    if (object.Post !== undefined && object.Post !== null) {
      for (const e of object.Post) {
        message.Post.push(Post.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** this line is used by starport scaffolding # 2 */
  Username(request: QueryGetUsernameRequest): Promise<QueryGetUsernameResponse>;
  UsernameAll(
    request: QueryAllUsernameRequest
  ): Promise<QueryAllUsernameResponse>;
  Thread(request: QueryGetThreadRequest): Promise<QueryGetThreadResponse>;
  ThreadAll(request: QueryAllThreadRequest): Promise<QueryAllThreadResponse>;
  Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse>;
  PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Username(
    request: QueryGetUsernameRequest
  ): Promise<QueryGetUsernameResponse> {
    const data = QueryGetUsernameRequest.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Query",
      "Username",
      data
    );
    return promise.then((data) =>
      QueryGetUsernameResponse.decode(new Reader(data))
    );
  }

  UsernameAll(
    request: QueryAllUsernameRequest
  ): Promise<QueryAllUsernameResponse> {
    const data = QueryAllUsernameRequest.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Query",
      "UsernameAll",
      data
    );
    return promise.then((data) =>
      QueryAllUsernameResponse.decode(new Reader(data))
    );
  }

  Thread(request: QueryGetThreadRequest): Promise<QueryGetThreadResponse> {
    const data = QueryGetThreadRequest.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Query",
      "Thread",
      data
    );
    return promise.then((data) =>
      QueryGetThreadResponse.decode(new Reader(data))
    );
  }

  ThreadAll(request: QueryAllThreadRequest): Promise<QueryAllThreadResponse> {
    const data = QueryAllThreadRequest.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Query",
      "ThreadAll",
      data
    );
    return promise.then((data) =>
      QueryAllThreadResponse.decode(new Reader(data))
    );
  }

  Post(request: QueryGetPostRequest): Promise<QueryGetPostResponse> {
    const data = QueryGetPostRequest.encode(request).finish();
    const promise = this.rpc.request("octalmage.meep.meep.Query", "Post", data);
    return promise.then((data) =>
      QueryGetPostResponse.decode(new Reader(data))
    );
  }

  PostAll(request: QueryAllPostRequest): Promise<QueryAllPostResponse> {
    const data = QueryAllPostRequest.encode(request).finish();
    const promise = this.rpc.request(
      "octalmage.meep.meep.Query",
      "PostAll",
      data
    );
    return promise.then((data) =>
      QueryAllPostResponse.decode(new Reader(data))
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
