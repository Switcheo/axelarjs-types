"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateParamsResponse = exports.UpdateParamsRequest = exports.VoteResponse = exports.VoteRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const types_1 = require("../../../axelar/vote/exported/v1beta1/types");
const any_1 = require("../../../google/protobuf/any");
const params_1 = require("../../../axelar/vote/v1beta1/params");
exports.protobufPackage = "axelar.vote.v1beta1";
function createBaseVoteRequest() {
    return {
        senderDeprecated: new Uint8Array(),
        pollKey: undefined,
        voteDeprecated: undefined,
        pollId: long_1.default.UZERO,
        vote: undefined,
        sender: "",
    };
}
exports.VoteRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderDeprecated.length !== 0) {
            writer.uint32(10).bytes(message.senderDeprecated);
        }
        if (message.pollKey !== undefined) {
            types_1.PollKey.encode(message.pollKey, writer.uint32(18).fork()).ldelim();
        }
        if (message.voteDeprecated !== undefined) {
            types_1.Vote.encode(message.voteDeprecated, writer.uint32(26).fork()).ldelim();
        }
        if (!message.pollId.isZero()) {
            writer.uint32(32).uint64(message.pollId);
        }
        if (message.vote !== undefined) {
            any_1.Any.encode(message.vote, writer.uint32(42).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(50).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderDeprecated = reader.bytes();
                    break;
                case 2:
                    message.pollKey = types_1.PollKey.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.voteDeprecated = types_1.Vote.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.pollId = reader.uint64();
                    break;
                case 5:
                    message.vote = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.sender = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            senderDeprecated: isSet(object.senderDeprecated)
                ? bytesFromBase64(object.senderDeprecated)
                : new Uint8Array(),
            pollKey: isSet(object.pollKey) ? types_1.PollKey.fromJSON(object.pollKey) : undefined,
            voteDeprecated: isSet(object.voteDeprecated) ? types_1.Vote.fromJSON(object.voteDeprecated) : undefined,
            pollId: isSet(object.pollId) ? long_1.default.fromValue(object.pollId) : long_1.default.UZERO,
            vote: isSet(object.vote) ? any_1.Any.fromJSON(object.vote) : undefined,
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderDeprecated !== undefined &&
            (obj.senderDeprecated = base64FromBytes(message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array()));
        message.pollKey !== undefined &&
            (obj.pollKey = message.pollKey ? types_1.PollKey.toJSON(message.pollKey) : undefined);
        message.voteDeprecated !== undefined &&
            (obj.voteDeprecated = message.voteDeprecated ? types_1.Vote.toJSON(message.voteDeprecated) : undefined);
        message.pollId !== undefined && (obj.pollId = (message.pollId || long_1.default.UZERO).toString());
        message.vote !== undefined && (obj.vote = message.vote ? any_1.Any.toJSON(message.vote) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseVoteRequest();
        message.senderDeprecated = (_a = object.senderDeprecated) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.pollKey =
            object.pollKey !== undefined && object.pollKey !== null
                ? types_1.PollKey.fromPartial(object.pollKey)
                : undefined;
        message.voteDeprecated =
            object.voteDeprecated !== undefined && object.voteDeprecated !== null
                ? types_1.Vote.fromPartial(object.voteDeprecated)
                : undefined;
        message.pollId =
            object.pollId !== undefined && object.pollId !== null ? long_1.default.fromValue(object.pollId) : long_1.default.UZERO;
        message.vote =
            object.vote !== undefined && object.vote !== null ? any_1.Any.fromPartial(object.vote) : undefined;
        message.sender = (_b = object.sender) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseVoteResponse() {
    return { log: "" };
}
exports.VoteResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.log !== "") {
            writer.uint32(10).string(message.log);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseVoteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.log = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            log: isSet(object.log) ? String(object.log) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.log !== undefined && (obj.log = message.log);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseVoteResponse();
        message.log = (_a = object.log) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateParamsRequest() {
    return { authority: "", params: undefined };
}
exports.UpdateParamsRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.authority !== "") {
            writer.uint32(10).string(message.authority);
        }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateParamsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.authority = reader.string();
                    break;
                case 2:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            authority: isSet(object.authority) ? String(object.authority) : "",
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.authority !== undefined && (obj.authority = message.authority);
        message.params !== undefined && (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateParamsRequest();
        message.authority = (_a = object.authority) !== null && _a !== void 0 ? _a : "";
        message.params =
            object.params !== undefined && object.params !== null ? params_1.Params.fromPartial(object.params) : undefined;
        return message;
    },
};
function createBaseUpdateParamsResponse() {
    return {};
}
exports.UpdateParamsResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateParamsResponse();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseUpdateParamsResponse();
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    arr.forEach((byte) => {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(""));
}
if (_m0.util.Long !== long_1.default) {
    _m0.util.Long = long_1.default;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map