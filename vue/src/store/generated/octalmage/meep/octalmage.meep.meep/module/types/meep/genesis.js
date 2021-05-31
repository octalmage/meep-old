/* eslint-disable */
import { Tip } from "../meep/tip";
import { Username } from "../meep/username";
import { Thread } from "../meep/thread";
import { Post } from "../meep/post";
import { Writer, Reader } from "protobufjs/minimal";
export const protobufPackage = "octalmage.meep.meep";
const baseGenesisState = {};
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.tipList) {
            Tip.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.usernameList) {
            Username.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.threadList) {
            Thread.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.postList) {
            Post.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
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
    fromJSON(object) {
        const message = { ...baseGenesisState };
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
    toJSON(message) {
        const obj = {};
        if (message.tipList) {
            obj.tipList = message.tipList.map((e) => (e ? Tip.toJSON(e) : undefined));
        }
        else {
            obj.tipList = [];
        }
        if (message.usernameList) {
            obj.usernameList = message.usernameList.map((e) => e ? Username.toJSON(e) : undefined);
        }
        else {
            obj.usernameList = [];
        }
        if (message.threadList) {
            obj.threadList = message.threadList.map((e) => e ? Thread.toJSON(e) : undefined);
        }
        else {
            obj.threadList = [];
        }
        if (message.postList) {
            obj.postList = message.postList.map((e) => e ? Post.toJSON(e) : undefined);
        }
        else {
            obj.postList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
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
