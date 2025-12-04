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
exports.UpdateParamsResponse = exports.UpdateParamsRequest = exports.CallContractResponse = exports.CallContractRequest = exports.RouteMessageResponse = exports.RouteMessageRequest = exports.RetryIBCTransferResponse = exports.RetryIBCTransferRequest = exports.RegisterFeeCollectorResponse = exports.RegisterFeeCollectorRequest = exports.RouteIBCTransfersResponse = exports.RouteIBCTransfersRequest = exports.RegisterAssetResponse = exports.RegisterAssetRequest = exports.AddCosmosBasedChainResponse = exports.AddCosmosBasedChainRequest = exports.RegisterIBCPathResponse = exports.RegisterIBCPathRequest = exports.ExecutePendingTransfersResponse = exports.ExecutePendingTransfersRequest = exports.ConfirmDepositResponse = exports.ConfirmDepositRequest = exports.LinkResponse = exports.LinkRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const _m0 = __importStar(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
const types_1 = require("../../../axelar/nexus/exported/v1beta1/types");
const duration_1 = require("../../../google/protobuf/duration");
const types_2 = require("../../../axelar/axelarnet/v1beta1/types");
const params_1 = require("../../../axelar/axelarnet/v1beta1/params");
exports.protobufPackage = "axelar.axelarnet.v1beta1";
function createBaseLinkRequest() {
    return { senderDeprecated: new Uint8Array(), recipientAddr: "", recipientChain: "", asset: "", sender: "" };
}
exports.LinkRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderDeprecated.length !== 0) {
            writer.uint32(10).bytes(message.senderDeprecated);
        }
        if (message.recipientAddr !== "") {
            writer.uint32(18).string(message.recipientAddr);
        }
        if (message.recipientChain !== "") {
            writer.uint32(26).string(message.recipientChain);
        }
        if (message.asset !== "") {
            writer.uint32(34).string(message.asset);
        }
        if (message.sender !== "") {
            writer.uint32(42).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLinkRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderDeprecated = reader.bytes();
                    break;
                case 2:
                    message.recipientAddr = reader.string();
                    break;
                case 3:
                    message.recipientChain = reader.string();
                    break;
                case 4:
                    message.asset = reader.string();
                    break;
                case 5:
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
            recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
            recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderDeprecated !== undefined &&
            (obj.senderDeprecated = base64FromBytes(message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array()));
        message.recipientAddr !== undefined && (obj.recipientAddr = message.recipientAddr);
        message.recipientChain !== undefined && (obj.recipientChain = message.recipientChain);
        message.asset !== undefined && (obj.asset = message.asset);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseLinkRequest();
        message.senderDeprecated = (_a = object.senderDeprecated) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.recipientAddr = (_b = object.recipientAddr) !== null && _b !== void 0 ? _b : "";
        message.recipientChain = (_c = object.recipientChain) !== null && _c !== void 0 ? _c : "";
        message.asset = (_d = object.asset) !== null && _d !== void 0 ? _d : "";
        message.sender = (_e = object.sender) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseLinkResponse() {
    return { depositAddr: "" };
}
exports.LinkResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.depositAddr !== "") {
            writer.uint32(10).string(message.depositAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseLinkResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositAddr = reader.string();
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
            depositAddr: isSet(object.depositAddr) ? String(object.depositAddr) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.depositAddr !== undefined && (obj.depositAddr = message.depositAddr);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseLinkResponse();
        message.depositAddr = (_a = object.depositAddr) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseConfirmDepositRequest() {
    return {
        senderDeprecated: new Uint8Array(),
        txIdDeprecated: new Uint8Array(),
        tokenDeprecated: undefined,
        depositAddress: new Uint8Array(),
        denom: "",
        sender: "",
    };
}
exports.ConfirmDepositRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderDeprecated.length !== 0) {
            writer.uint32(10).bytes(message.senderDeprecated);
        }
        if (message.txIdDeprecated.length !== 0) {
            writer.uint32(18).bytes(message.txIdDeprecated);
        }
        if (message.tokenDeprecated !== undefined) {
            coin_1.Coin.encode(message.tokenDeprecated, writer.uint32(26).fork()).ldelim();
        }
        if (message.depositAddress.length !== 0) {
            writer.uint32(34).bytes(message.depositAddress);
        }
        if (message.denom !== "") {
            writer.uint32(42).string(message.denom);
        }
        if (message.sender !== "") {
            writer.uint32(50).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmDepositRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderDeprecated = reader.bytes();
                    break;
                case 2:
                    message.txIdDeprecated = reader.bytes();
                    break;
                case 3:
                    message.tokenDeprecated = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.depositAddress = reader.bytes();
                    break;
                case 5:
                    message.denom = reader.string();
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
            txIdDeprecated: isSet(object.txIdDeprecated)
                ? bytesFromBase64(object.txIdDeprecated)
                : new Uint8Array(),
            tokenDeprecated: isSet(object.tokenDeprecated) ? coin_1.Coin.fromJSON(object.tokenDeprecated) : undefined,
            depositAddress: isSet(object.depositAddress)
                ? bytesFromBase64(object.depositAddress)
                : new Uint8Array(),
            denom: isSet(object.denom) ? String(object.denom) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderDeprecated !== undefined &&
            (obj.senderDeprecated = base64FromBytes(message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array()));
        message.txIdDeprecated !== undefined &&
            (obj.txIdDeprecated = base64FromBytes(message.txIdDeprecated !== undefined ? message.txIdDeprecated : new Uint8Array()));
        message.tokenDeprecated !== undefined &&
            (obj.tokenDeprecated = message.tokenDeprecated ? coin_1.Coin.toJSON(message.tokenDeprecated) : undefined);
        message.depositAddress !== undefined &&
            (obj.depositAddress = base64FromBytes(message.depositAddress !== undefined ? message.depositAddress : new Uint8Array()));
        message.denom !== undefined && (obj.denom = message.denom);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseConfirmDepositRequest();
        message.senderDeprecated = (_a = object.senderDeprecated) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.txIdDeprecated = (_b = object.txIdDeprecated) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.tokenDeprecated =
            object.tokenDeprecated !== undefined && object.tokenDeprecated !== null
                ? coin_1.Coin.fromPartial(object.tokenDeprecated)
                : undefined;
        message.depositAddress = (_c = object.depositAddress) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.denom = (_d = object.denom) !== null && _d !== void 0 ? _d : "";
        message.sender = (_e = object.sender) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseConfirmDepositResponse() {
    return {};
}
exports.ConfirmDepositResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfirmDepositResponse();
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
        const message = createBaseConfirmDepositResponse();
        return message;
    },
};
function createBaseExecutePendingTransfersRequest() {
    return { senderDeprecated: new Uint8Array(), sender: "" };
}
exports.ExecutePendingTransfersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderDeprecated.length !== 0) {
            writer.uint32(10).bytes(message.senderDeprecated);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecutePendingTransfersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderDeprecated = reader.bytes();
                    break;
                case 2:
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
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderDeprecated !== undefined &&
            (obj.senderDeprecated = base64FromBytes(message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseExecutePendingTransfersRequest();
        message.senderDeprecated = (_a = object.senderDeprecated) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.sender = (_b = object.sender) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseExecutePendingTransfersResponse() {
    return {};
}
exports.ExecutePendingTransfersResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseExecutePendingTransfersResponse();
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
        const message = createBaseExecutePendingTransfersResponse();
        return message;
    },
};
function createBaseRegisterIBCPathRequest() {
    return { senderDeprecated: new Uint8Array(), chain: "", path: "", sender: "" };
}
exports.RegisterIBCPathRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderDeprecated.length !== 0) {
            writer.uint32(10).bytes(message.senderDeprecated);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.path !== "") {
            writer.uint32(26).string(message.path);
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterIBCPathRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderDeprecated = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.path = reader.string();
                    break;
                case 4:
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            path: isSet(object.path) ? String(object.path) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderDeprecated !== undefined &&
            (obj.senderDeprecated = base64FromBytes(message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.path !== undefined && (obj.path = message.path);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseRegisterIBCPathRequest();
        message.senderDeprecated = (_a = object.senderDeprecated) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.path = (_c = object.path) !== null && _c !== void 0 ? _c : "";
        message.sender = (_d = object.sender) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseRegisterIBCPathResponse() {
    return {};
}
exports.RegisterIBCPathResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterIBCPathResponse();
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
        const message = createBaseRegisterIBCPathResponse();
        return message;
    },
};
function createBaseAddCosmosBasedChainRequest() {
    return {
        senderDeprecated: new Uint8Array(),
        chain: undefined,
        addrPrefix: "",
        minAmountDeprecated: new Uint8Array(),
        nativeAssets: [],
        cosmosChain: "",
        ibcPath: "",
        sender: "",
    };
}
exports.AddCosmosBasedChainRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderDeprecated.length !== 0) {
            writer.uint32(10).bytes(message.senderDeprecated);
        }
        if (message.chain !== undefined) {
            types_1.Chain.encode(message.chain, writer.uint32(18).fork()).ldelim();
        }
        if (message.addrPrefix !== "") {
            writer.uint32(26).string(message.addrPrefix);
        }
        if (message.minAmountDeprecated.length !== 0) {
            writer.uint32(34).bytes(message.minAmountDeprecated);
        }
        for (const v of message.nativeAssets) {
            types_1.Asset.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.cosmosChain !== "") {
            writer.uint32(50).string(message.cosmosChain);
        }
        if (message.ibcPath !== "") {
            writer.uint32(58).string(message.ibcPath);
        }
        if (message.sender !== "") {
            writer.uint32(66).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddCosmosBasedChainRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderDeprecated = reader.bytes();
                    break;
                case 2:
                    message.chain = types_1.Chain.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.addrPrefix = reader.string();
                    break;
                case 4:
                    message.minAmountDeprecated = reader.bytes();
                    break;
                case 5:
                    message.nativeAssets.push(types_1.Asset.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.cosmosChain = reader.string();
                    break;
                case 7:
                    message.ibcPath = reader.string();
                    break;
                case 8:
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
            chain: isSet(object.chain) ? types_1.Chain.fromJSON(object.chain) : undefined,
            addrPrefix: isSet(object.addrPrefix) ? String(object.addrPrefix) : "",
            minAmountDeprecated: isSet(object.minAmountDeprecated)
                ? bytesFromBase64(object.minAmountDeprecated)
                : new Uint8Array(),
            nativeAssets: Array.isArray(object === null || object === void 0 ? void 0 : object.nativeAssets)
                ? object.nativeAssets.map((e) => types_1.Asset.fromJSON(e))
                : [],
            cosmosChain: isSet(object.cosmosChain) ? String(object.cosmosChain) : "",
            ibcPath: isSet(object.ibcPath) ? String(object.ibcPath) : "",
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderDeprecated !== undefined &&
            (obj.senderDeprecated = base64FromBytes(message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain ? types_1.Chain.toJSON(message.chain) : undefined);
        message.addrPrefix !== undefined && (obj.addrPrefix = message.addrPrefix);
        message.minAmountDeprecated !== undefined &&
            (obj.minAmountDeprecated = base64FromBytes(message.minAmountDeprecated !== undefined ? message.minAmountDeprecated : new Uint8Array()));
        if (message.nativeAssets) {
            obj.nativeAssets = message.nativeAssets.map((e) => (e ? types_1.Asset.toJSON(e) : undefined));
        }
        else {
            obj.nativeAssets = [];
        }
        message.cosmosChain !== undefined && (obj.cosmosChain = message.cosmosChain);
        message.ibcPath !== undefined && (obj.ibcPath = message.ibcPath);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseAddCosmosBasedChainRequest();
        message.senderDeprecated = (_a = object.senderDeprecated) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain =
            object.chain !== undefined && object.chain !== null ? types_1.Chain.fromPartial(object.chain) : undefined;
        message.addrPrefix = (_b = object.addrPrefix) !== null && _b !== void 0 ? _b : "";
        message.minAmountDeprecated = (_c = object.minAmountDeprecated) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.nativeAssets = ((_d = object.nativeAssets) === null || _d === void 0 ? void 0 : _d.map((e) => types_1.Asset.fromPartial(e))) || [];
        message.cosmosChain = (_e = object.cosmosChain) !== null && _e !== void 0 ? _e : "";
        message.ibcPath = (_f = object.ibcPath) !== null && _f !== void 0 ? _f : "";
        message.sender = (_g = object.sender) !== null && _g !== void 0 ? _g : "";
        return message;
    },
};
function createBaseAddCosmosBasedChainResponse() {
    return {};
}
exports.AddCosmosBasedChainResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddCosmosBasedChainResponse();
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
        const message = createBaseAddCosmosBasedChainResponse();
        return message;
    },
};
function createBaseRegisterAssetRequest() {
    return {
        senderDeprecated: new Uint8Array(),
        chain: "",
        asset: undefined,
        limit: new Uint8Array(),
        window: undefined,
        sender: "",
    };
}
exports.RegisterAssetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderDeprecated.length !== 0) {
            writer.uint32(10).bytes(message.senderDeprecated);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.asset !== undefined) {
            types_1.Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
        }
        if (message.limit.length !== 0) {
            writer.uint32(34).bytes(message.limit);
        }
        if (message.window !== undefined) {
            duration_1.Duration.encode(message.window, writer.uint32(42).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(50).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterAssetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderDeprecated = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.asset = types_1.Asset.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.limit = reader.bytes();
                    break;
                case 5:
                    message.window = duration_1.Duration.decode(reader, reader.uint32());
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            asset: isSet(object.asset) ? types_1.Asset.fromJSON(object.asset) : undefined,
            limit: isSet(object.limit) ? bytesFromBase64(object.limit) : new Uint8Array(),
            window: isSet(object.window) ? duration_1.Duration.fromJSON(object.window) : undefined,
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderDeprecated !== undefined &&
            (obj.senderDeprecated = base64FromBytes(message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.asset !== undefined && (obj.asset = message.asset ? types_1.Asset.toJSON(message.asset) : undefined);
        message.limit !== undefined &&
            (obj.limit = base64FromBytes(message.limit !== undefined ? message.limit : new Uint8Array()));
        message.window !== undefined &&
            (obj.window = message.window ? duration_1.Duration.toJSON(message.window) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseRegisterAssetRequest();
        message.senderDeprecated = (_a = object.senderDeprecated) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.asset =
            object.asset !== undefined && object.asset !== null ? types_1.Asset.fromPartial(object.asset) : undefined;
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.window =
            object.window !== undefined && object.window !== null ? duration_1.Duration.fromPartial(object.window) : undefined;
        message.sender = (_d = object.sender) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseRegisterAssetResponse() {
    return {};
}
exports.RegisterAssetResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterAssetResponse();
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
        const message = createBaseRegisterAssetResponse();
        return message;
    },
};
function createBaseRouteIBCTransfersRequest() {
    return { senderDeprecated: new Uint8Array(), sender: "" };
}
exports.RouteIBCTransfersRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderDeprecated.length !== 0) {
            writer.uint32(10).bytes(message.senderDeprecated);
        }
        if (message.sender !== "") {
            writer.uint32(18).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRouteIBCTransfersRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderDeprecated = reader.bytes();
                    break;
                case 2:
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
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderDeprecated !== undefined &&
            (obj.senderDeprecated = base64FromBytes(message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRouteIBCTransfersRequest();
        message.senderDeprecated = (_a = object.senderDeprecated) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.sender = (_b = object.sender) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRouteIBCTransfersResponse() {
    return {};
}
exports.RouteIBCTransfersResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRouteIBCTransfersResponse();
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
        const message = createBaseRouteIBCTransfersResponse();
        return message;
    },
};
function createBaseRegisterFeeCollectorRequest() {
    return { senderDeprecated: new Uint8Array(), feeCollector: new Uint8Array(), sender: "" };
}
exports.RegisterFeeCollectorRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderDeprecated.length !== 0) {
            writer.uint32(10).bytes(message.senderDeprecated);
        }
        if (message.feeCollector.length !== 0) {
            writer.uint32(18).bytes(message.feeCollector);
        }
        if (message.sender !== "") {
            writer.uint32(26).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterFeeCollectorRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderDeprecated = reader.bytes();
                    break;
                case 2:
                    message.feeCollector = reader.bytes();
                    break;
                case 3:
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
            feeCollector: isSet(object.feeCollector) ? bytesFromBase64(object.feeCollector) : new Uint8Array(),
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderDeprecated !== undefined &&
            (obj.senderDeprecated = base64FromBytes(message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array()));
        message.feeCollector !== undefined &&
            (obj.feeCollector = base64FromBytes(message.feeCollector !== undefined ? message.feeCollector : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRegisterFeeCollectorRequest();
        message.senderDeprecated = (_a = object.senderDeprecated) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.feeCollector = (_b = object.feeCollector) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRegisterFeeCollectorResponse() {
    return {};
}
exports.RegisterFeeCollectorResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRegisterFeeCollectorResponse();
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
        const message = createBaseRegisterFeeCollectorResponse();
        return message;
    },
};
function createBaseRetryIBCTransferRequest() {
    return { senderDeprecated: new Uint8Array(), chain: "", id: long_1.default.UZERO, sender: "" };
}
exports.RetryIBCTransferRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderDeprecated.length !== 0) {
            writer.uint32(10).bytes(message.senderDeprecated);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (!message.id.isZero()) {
            writer.uint32(24).uint64(message.id);
        }
        if (message.sender !== "") {
            writer.uint32(34).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRetryIBCTransferRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderDeprecated = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.id = reader.uint64();
                    break;
                case 4:
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            id: isSet(object.id) ? long_1.default.fromValue(object.id) : long_1.default.UZERO,
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderDeprecated !== undefined &&
            (obj.senderDeprecated = base64FromBytes(message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRetryIBCTransferRequest();
        message.senderDeprecated = (_a = object.senderDeprecated) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.id = object.id !== undefined && object.id !== null ? long_1.default.fromValue(object.id) : long_1.default.UZERO;
        message.sender = (_c = object.sender) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRetryIBCTransferResponse() {
    return {};
}
exports.RetryIBCTransferResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRetryIBCTransferResponse();
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
        const message = createBaseRetryIBCTransferResponse();
        return message;
    },
};
function createBaseRouteMessageRequest() {
    return {
        senderDeprecated: new Uint8Array(),
        id: "",
        payload: new Uint8Array(),
        feegranter: new Uint8Array(),
        sender: "",
    };
}
exports.RouteMessageRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderDeprecated.length !== 0) {
            writer.uint32(10).bytes(message.senderDeprecated);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.payload.length !== 0) {
            writer.uint32(26).bytes(message.payload);
        }
        if (message.feegranter.length !== 0) {
            writer.uint32(34).bytes(message.feegranter);
        }
        if (message.sender !== "") {
            writer.uint32(42).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRouteMessageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderDeprecated = reader.bytes();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.payload = reader.bytes();
                    break;
                case 4:
                    message.feegranter = reader.bytes();
                    break;
                case 5:
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
            id: isSet(object.id) ? String(object.id) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            feegranter: isSet(object.feegranter) ? bytesFromBase64(object.feegranter) : new Uint8Array(),
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderDeprecated !== undefined &&
            (obj.senderDeprecated = base64FromBytes(message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array()));
        message.id !== undefined && (obj.id = message.id);
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        message.feegranter !== undefined &&
            (obj.feegranter = base64FromBytes(message.feegranter !== undefined ? message.feegranter : new Uint8Array()));
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseRouteMessageRequest();
        message.senderDeprecated = (_a = object.senderDeprecated) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.payload = (_c = object.payload) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.feegranter = (_d = object.feegranter) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.sender = (_e = object.sender) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseRouteMessageResponse() {
    return {};
}
exports.RouteMessageResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRouteMessageResponse();
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
        const message = createBaseRouteMessageResponse();
        return message;
    },
};
function createBaseCallContractRequest() {
    return {
        senderDeprecated: new Uint8Array(),
        chain: "",
        contractAddress: "",
        payload: new Uint8Array(),
        fee: undefined,
        sender: "",
    };
}
exports.CallContractRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.senderDeprecated.length !== 0) {
            writer.uint32(10).bytes(message.senderDeprecated);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(26).string(message.contractAddress);
        }
        if (message.payload.length !== 0) {
            writer.uint32(34).bytes(message.payload);
        }
        if (message.fee !== undefined) {
            types_2.Fee.encode(message.fee, writer.uint32(42).fork()).ldelim();
        }
        if (message.sender !== "") {
            writer.uint32(50).string(message.sender);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCallContractRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.senderDeprecated = reader.bytes();
                    break;
                case 2:
                    message.chain = reader.string();
                    break;
                case 3:
                    message.contractAddress = reader.string();
                    break;
                case 4:
                    message.payload = reader.bytes();
                    break;
                case 5:
                    message.fee = types_2.Fee.decode(reader, reader.uint32());
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
            chain: isSet(object.chain) ? String(object.chain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payload: isSet(object.payload) ? bytesFromBase64(object.payload) : new Uint8Array(),
            fee: isSet(object.fee) ? types_2.Fee.fromJSON(object.fee) : undefined,
            sender: isSet(object.sender) ? String(object.sender) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.senderDeprecated !== undefined &&
            (obj.senderDeprecated = base64FromBytes(message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array()));
        message.chain !== undefined && (obj.chain = message.chain);
        message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
        message.payload !== undefined &&
            (obj.payload = base64FromBytes(message.payload !== undefined ? message.payload : new Uint8Array()));
        message.fee !== undefined && (obj.fee = message.fee ? types_2.Fee.toJSON(message.fee) : undefined);
        message.sender !== undefined && (obj.sender = message.sender);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = createBaseCallContractRequest();
        message.senderDeprecated = (_a = object.senderDeprecated) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.chain = (_b = object.chain) !== null && _b !== void 0 ? _b : "";
        message.contractAddress = (_c = object.contractAddress) !== null && _c !== void 0 ? _c : "";
        message.payload = (_d = object.payload) !== null && _d !== void 0 ? _d : new Uint8Array();
        message.fee = object.fee !== undefined && object.fee !== null ? types_2.Fee.fromPartial(object.fee) : undefined;
        message.sender = (_e = object.sender) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
function createBaseCallContractResponse() {
    return {};
}
exports.CallContractResponse = {
    encode(_, writer = _m0.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCallContractResponse();
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
        const message = createBaseCallContractResponse();
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