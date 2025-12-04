/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import {
  Asset,
  TransferKeyType,
  TokenDetails,
  transferKeyTypeFromJSON,
  transferKeyTypeToJSON,
} from "../../../axelar/evm/v1beta1/types";
import { KeyType, keyTypeFromJSON, keyTypeToJSON } from "../../../axelar/tss/exported/v1beta1/types";
import { Params } from "../../../axelar/evm/v1beta1/params";

export const protobufPackage = "axelar.evm.v1beta1";

export interface SetGatewayRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  chain: string;
  address: Uint8Array;
  sender: string;
}

export interface SetGatewayResponse {}

/** @deprecated */
export interface ConfirmGatewayTxRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  chain: string;
  txId: Uint8Array;
  sender: string;
}

/** @deprecated */
export interface ConfirmGatewayTxResponse {}

export interface ConfirmGatewayTxsRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  chain: string;
  txIds: Uint8Array[];
  sender: string;
}

export interface ConfirmGatewayTxsResponse {}

/** MsgConfirmDeposit represents an erc20 deposit confirmation message */
export interface ConfirmDepositRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  chain: string;
  txId: Uint8Array;
  /** @deprecated */
  amount: Uint8Array;
  burnerAddress: Uint8Array;
  sender: string;
}

export interface ConfirmDepositResponse {}

/** MsgConfirmToken represents a token deploy confirmation message */
export interface ConfirmTokenRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  chain: string;
  txId: Uint8Array;
  asset?: Asset;
  sender: string;
}

export interface ConfirmTokenResponse {}

export interface ConfirmTransferKeyRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  chain: string;
  txId: Uint8Array;
  /**
   * DEPRECATED: Removed in v0.20, reinstated in v1.3 for backward
   * compatibility. This field must remain to allow decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  transferTypeDeprecated: TransferKeyType;
  /**
   * DEPRECATED: Removed in v0.20, reinstated in v1.3 for backward
   * compatibility. This field must remain to allow decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  keyIdDeprecated: string;
  sender: string;
}

export interface ConfirmTransferKeyResponse {}

/**
 * MsgLink represents the message that links a cross chain address to a burner
 * address
 */
export interface LinkRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  chain: string;
  recipientAddr: string;
  asset: string;
  recipientChain: string;
  sender: string;
}

export interface LinkResponse {
  depositAddr: string;
}

/**
 * CreateBurnTokensRequest represents the message to create commands to burn
 * tokens with AxelarGateway
 */
export interface CreateBurnTokensRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  chain: string;
  sender: string;
}

export interface CreateBurnTokensResponse {}

/**
 * CreateDeployTokenRequest represents the message to create a deploy token
 * command for AxelarGateway
 */
export interface CreateDeployTokenRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  chain: string;
  asset?: Asset;
  tokenDetails?: TokenDetails;
  /**
   * DEPRECATED: Removed in v0.15, reinstated in v1.3 for backward
   * compatibility. This field must remain to allow decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  minAmountDeprecated: Uint8Array;
  address: Uint8Array;
  dailyMintLimit: string;
  sender: string;
}

export interface CreateDeployTokenResponse {}

/**
 * CreatePendingTransfersRequest represents a message to trigger the creation of
 * commands handling all pending transfers
 */
export interface CreatePendingTransfersRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  chain: string;
  sender: string;
}

export interface CreatePendingTransfersResponse {}

/** @deprecated */
export interface CreateTransferOwnershipRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  chain: string;
  keyId: string;
  sender: string;
}

/** @deprecated */
export interface CreateTransferOwnershipResponse {}

export interface CreateTransferOperatorshipRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  chain: string;
  keyId: string;
  sender: string;
}

export interface CreateTransferOperatorshipResponse {}

export interface SignCommandsRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  chain: string;
  sender: string;
}

export interface SignCommandsResponse {
  batchedCommandsId: Uint8Array;
  commandCount: number;
}

export interface AddChainRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  name: string;
  /**
   * DEPRECATED: Removed in v0.14, reinstated in v1.3 for backward
   * compatibility. This field must remain to allow decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  nativeAssetDeprecated: string;
  /** @deprecated */
  keyType: KeyType;
  params: Uint8Array;
  sender: string;
}

export interface AddChainResponse {}

export interface RetryFailedEventRequest {
  /**
   * DEPRECATED: This field is deprecated but must remain to ensure backward
   * compatibility. Removing this field would break decoding of historical
   * transactions. DO NOT use in new code.
   *
   * @deprecated
   */
  senderDeprecated: Uint8Array;
  chain: string;
  eventId: string;
  sender: string;
}

export interface RetryFailedEventResponse {}

export interface UpdateParamsRequest {
  authority: string;
  params?: Params;
}

export interface UpdateParamsResponse {}

function createBaseSetGatewayRequest(): SetGatewayRequest {
  return { senderDeprecated: new Uint8Array(), chain: "", address: new Uint8Array(), sender: "" };
}

export const SetGatewayRequest = {
  encode(message: SetGatewayRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.address.length !== 0) {
      writer.uint32(26).bytes(message.address);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGatewayRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGatewayRequest();
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
          message.address = reader.bytes();
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

  fromJSON(object: any): SetGatewayRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: SetGatewayRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.chain !== undefined && (obj.chain = message.chain);
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGatewayRequest>, I>>(object: I): SetGatewayRequest {
    const message = createBaseSetGatewayRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.address = object.address ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseSetGatewayResponse(): SetGatewayResponse {
  return {};
}

export const SetGatewayResponse = {
  encode(_: SetGatewayResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SetGatewayResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetGatewayResponse();
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

  fromJSON(_: any): SetGatewayResponse {
    return {};
  },

  toJSON(_: SetGatewayResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SetGatewayResponse>, I>>(_: I): SetGatewayResponse {
    const message = createBaseSetGatewayResponse();
    return message;
  },
};

function createBaseConfirmGatewayTxRequest(): ConfirmGatewayTxRequest {
  return { senderDeprecated: new Uint8Array(), chain: "", txId: new Uint8Array(), sender: "" };
}

export const ConfirmGatewayTxRequest = {
  encode(message: ConfirmGatewayTxRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(26).bytes(message.txId);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmGatewayTxRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmGatewayTxRequest();
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
          message.txId = reader.bytes();
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

  fromJSON(object: any): ConfirmGatewayTxRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: ConfirmGatewayTxRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.chain !== undefined && (obj.chain = message.chain);
    message.txId !== undefined &&
      (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmGatewayTxRequest>, I>>(object: I): ConfirmGatewayTxRequest {
    const message = createBaseConfirmGatewayTxRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseConfirmGatewayTxResponse(): ConfirmGatewayTxResponse {
  return {};
}

export const ConfirmGatewayTxResponse = {
  encode(_: ConfirmGatewayTxResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmGatewayTxResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmGatewayTxResponse();
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

  fromJSON(_: any): ConfirmGatewayTxResponse {
    return {};
  },

  toJSON(_: ConfirmGatewayTxResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmGatewayTxResponse>, I>>(_: I): ConfirmGatewayTxResponse {
    const message = createBaseConfirmGatewayTxResponse();
    return message;
  },
};

function createBaseConfirmGatewayTxsRequest(): ConfirmGatewayTxsRequest {
  return { senderDeprecated: new Uint8Array(), chain: "", txIds: [], sender: "" };
}

export const ConfirmGatewayTxsRequest = {
  encode(message: ConfirmGatewayTxsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    for (const v of message.txIds) {
      writer.uint32(26).bytes(v!);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmGatewayTxsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmGatewayTxsRequest();
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
          message.txIds.push(reader.bytes());
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

  fromJSON(object: any): ConfirmGatewayTxsRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      txIds: Array.isArray(object?.txIds) ? object.txIds.map((e: any) => bytesFromBase64(e)) : [],
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: ConfirmGatewayTxsRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.chain !== undefined && (obj.chain = message.chain);
    if (message.txIds) {
      obj.txIds = message.txIds.map((e) => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.txIds = [];
    }
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmGatewayTxsRequest>, I>>(
    object: I,
  ): ConfirmGatewayTxsRequest {
    const message = createBaseConfirmGatewayTxsRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.txIds = object.txIds?.map((e) => e) || [];
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseConfirmGatewayTxsResponse(): ConfirmGatewayTxsResponse {
  return {};
}

export const ConfirmGatewayTxsResponse = {
  encode(_: ConfirmGatewayTxsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmGatewayTxsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmGatewayTxsResponse();
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

  fromJSON(_: any): ConfirmGatewayTxsResponse {
    return {};
  },

  toJSON(_: ConfirmGatewayTxsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmGatewayTxsResponse>, I>>(_: I): ConfirmGatewayTxsResponse {
    const message = createBaseConfirmGatewayTxsResponse();
    return message;
  },
};

function createBaseConfirmDepositRequest(): ConfirmDepositRequest {
  return {
    senderDeprecated: new Uint8Array(),
    chain: "",
    txId: new Uint8Array(),
    amount: new Uint8Array(),
    burnerAddress: new Uint8Array(),
    sender: "",
  };
}

export const ConfirmDepositRequest = {
  encode(message: ConfirmDepositRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(26).bytes(message.txId);
    }
    if (message.amount.length !== 0) {
      writer.uint32(34).bytes(message.amount);
    }
    if (message.burnerAddress.length !== 0) {
      writer.uint32(42).bytes(message.burnerAddress);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmDepositRequest {
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
          message.chain = reader.string();
          break;
        case 3:
          message.txId = reader.bytes();
          break;
        case 4:
          message.amount = reader.bytes();
          break;
        case 5:
          message.burnerAddress = reader.bytes();
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

  fromJSON(object: any): ConfirmDepositRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
      burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: ConfirmDepositRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.chain !== undefined && (obj.chain = message.chain);
    message.txId !== undefined &&
      (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    message.amount !== undefined &&
      (obj.amount = base64FromBytes(message.amount !== undefined ? message.amount : new Uint8Array()));
    message.burnerAddress !== undefined &&
      (obj.burnerAddress = base64FromBytes(
        message.burnerAddress !== undefined ? message.burnerAddress : new Uint8Array(),
      ));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmDepositRequest>, I>>(object: I): ConfirmDepositRequest {
    const message = createBaseConfirmDepositRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    message.amount = object.amount ?? new Uint8Array();
    message.burnerAddress = object.burnerAddress ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseConfirmDepositResponse(): ConfirmDepositResponse {
  return {};
}

export const ConfirmDepositResponse = {
  encode(_: ConfirmDepositResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmDepositResponse {
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

  fromJSON(_: any): ConfirmDepositResponse {
    return {};
  },

  toJSON(_: ConfirmDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmDepositResponse>, I>>(_: I): ConfirmDepositResponse {
    const message = createBaseConfirmDepositResponse();
    return message;
  },
};

function createBaseConfirmTokenRequest(): ConfirmTokenRequest {
  return {
    senderDeprecated: new Uint8Array(),
    chain: "",
    txId: new Uint8Array(),
    asset: undefined,
    sender: "",
  };
}

export const ConfirmTokenRequest = {
  encode(message: ConfirmTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(26).bytes(message.txId);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(34).fork()).ldelim();
    }
    if (message.sender !== "") {
      writer.uint32(42).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmTokenRequest();
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
          message.txId = reader.bytes();
          break;
        case 4:
          message.asset = Asset.decode(reader, reader.uint32());
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

  fromJSON(object: any): ConfirmTokenRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: ConfirmTokenRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.chain !== undefined && (obj.chain = message.chain);
    message.txId !== undefined &&
      (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmTokenRequest>, I>>(object: I): ConfirmTokenRequest {
    const message = createBaseConfirmTokenRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    message.asset =
      object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseConfirmTokenResponse(): ConfirmTokenResponse {
  return {};
}

export const ConfirmTokenResponse = {
  encode(_: ConfirmTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmTokenResponse();
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

  fromJSON(_: any): ConfirmTokenResponse {
    return {};
  },

  toJSON(_: ConfirmTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmTokenResponse>, I>>(_: I): ConfirmTokenResponse {
    const message = createBaseConfirmTokenResponse();
    return message;
  },
};

function createBaseConfirmTransferKeyRequest(): ConfirmTransferKeyRequest {
  return {
    senderDeprecated: new Uint8Array(),
    chain: "",
    txId: new Uint8Array(),
    transferTypeDeprecated: 0,
    keyIdDeprecated: "",
    sender: "",
  };
}

export const ConfirmTransferKeyRequest = {
  encode(message: ConfirmTransferKeyRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.txId.length !== 0) {
      writer.uint32(26).bytes(message.txId);
    }
    if (message.transferTypeDeprecated !== 0) {
      writer.uint32(32).int32(message.transferTypeDeprecated);
    }
    if (message.keyIdDeprecated !== "") {
      writer.uint32(42).string(message.keyIdDeprecated);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTransferKeyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmTransferKeyRequest();
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
          message.txId = reader.bytes();
          break;
        case 4:
          message.transferTypeDeprecated = reader.int32() as any;
          break;
        case 5:
          message.keyIdDeprecated = reader.string();
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

  fromJSON(object: any): ConfirmTransferKeyRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
      transferTypeDeprecated: isSet(object.transferTypeDeprecated)
        ? transferKeyTypeFromJSON(object.transferTypeDeprecated)
        : 0,
      keyIdDeprecated: isSet(object.keyIdDeprecated) ? String(object.keyIdDeprecated) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: ConfirmTransferKeyRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.chain !== undefined && (obj.chain = message.chain);
    message.txId !== undefined &&
      (obj.txId = base64FromBytes(message.txId !== undefined ? message.txId : new Uint8Array()));
    message.transferTypeDeprecated !== undefined &&
      (obj.transferTypeDeprecated = transferKeyTypeToJSON(message.transferTypeDeprecated));
    message.keyIdDeprecated !== undefined && (obj.keyIdDeprecated = message.keyIdDeprecated);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmTransferKeyRequest>, I>>(
    object: I,
  ): ConfirmTransferKeyRequest {
    const message = createBaseConfirmTransferKeyRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.txId = object.txId ?? new Uint8Array();
    message.transferTypeDeprecated = object.transferTypeDeprecated ?? 0;
    message.keyIdDeprecated = object.keyIdDeprecated ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseConfirmTransferKeyResponse(): ConfirmTransferKeyResponse {
  return {};
}

export const ConfirmTransferKeyResponse = {
  encode(_: ConfirmTransferKeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ConfirmTransferKeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConfirmTransferKeyResponse();
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

  fromJSON(_: any): ConfirmTransferKeyResponse {
    return {};
  },

  toJSON(_: ConfirmTransferKeyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ConfirmTransferKeyResponse>, I>>(_: I): ConfirmTransferKeyResponse {
    const message = createBaseConfirmTransferKeyResponse();
    return message;
  },
};

function createBaseLinkRequest(): LinkRequest {
  return {
    senderDeprecated: new Uint8Array(),
    chain: "",
    recipientAddr: "",
    asset: "",
    recipientChain: "",
    sender: "",
  };
}

export const LinkRequest = {
  encode(message: LinkRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.recipientAddr !== "") {
      writer.uint32(26).string(message.recipientAddr);
    }
    if (message.asset !== "") {
      writer.uint32(34).string(message.asset);
    }
    if (message.recipientChain !== "") {
      writer.uint32(42).string(message.recipientChain);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkRequest {
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
          message.chain = reader.string();
          break;
        case 3:
          message.recipientAddr = reader.string();
          break;
        case 4:
          message.asset = reader.string();
          break;
        case 5:
          message.recipientChain = reader.string();
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

  fromJSON(object: any): LinkRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      recipientAddr: isSet(object.recipientAddr) ? String(object.recipientAddr) : "",
      asset: isSet(object.asset) ? String(object.asset) : "",
      recipientChain: isSet(object.recipientChain) ? String(object.recipientChain) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: LinkRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.chain !== undefined && (obj.chain = message.chain);
    message.recipientAddr !== undefined && (obj.recipientAddr = message.recipientAddr);
    message.asset !== undefined && (obj.asset = message.asset);
    message.recipientChain !== undefined && (obj.recipientChain = message.recipientChain);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LinkRequest>, I>>(object: I): LinkRequest {
    const message = createBaseLinkRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.recipientAddr = object.recipientAddr ?? "";
    message.asset = object.asset ?? "";
    message.recipientChain = object.recipientChain ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseLinkResponse(): LinkResponse {
  return { depositAddr: "" };
}

export const LinkResponse = {
  encode(message: LinkResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.depositAddr !== "") {
      writer.uint32(10).string(message.depositAddr);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LinkResponse {
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

  fromJSON(object: any): LinkResponse {
    return {
      depositAddr: isSet(object.depositAddr) ? String(object.depositAddr) : "",
    };
  },

  toJSON(message: LinkResponse): unknown {
    const obj: any = {};
    message.depositAddr !== undefined && (obj.depositAddr = message.depositAddr);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LinkResponse>, I>>(object: I): LinkResponse {
    const message = createBaseLinkResponse();
    message.depositAddr = object.depositAddr ?? "";
    return message;
  },
};

function createBaseCreateBurnTokensRequest(): CreateBurnTokensRequest {
  return { senderDeprecated: new Uint8Array(), chain: "", sender: "" };
}

export const CreateBurnTokensRequest = {
  encode(message: CreateBurnTokensRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBurnTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBurnTokensRequest();
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
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreateBurnTokensRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: CreateBurnTokensRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.chain !== undefined && (obj.chain = message.chain);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBurnTokensRequest>, I>>(object: I): CreateBurnTokensRequest {
    const message = createBaseCreateBurnTokensRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseCreateBurnTokensResponse(): CreateBurnTokensResponse {
  return {};
}

export const CreateBurnTokensResponse = {
  encode(_: CreateBurnTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateBurnTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateBurnTokensResponse();
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

  fromJSON(_: any): CreateBurnTokensResponse {
    return {};
  },

  toJSON(_: CreateBurnTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateBurnTokensResponse>, I>>(_: I): CreateBurnTokensResponse {
    const message = createBaseCreateBurnTokensResponse();
    return message;
  },
};

function createBaseCreateDeployTokenRequest(): CreateDeployTokenRequest {
  return {
    senderDeprecated: new Uint8Array(),
    chain: "",
    asset: undefined,
    tokenDetails: undefined,
    minAmountDeprecated: new Uint8Array(),
    address: new Uint8Array(),
    dailyMintLimit: "",
    sender: "",
  };
}

export const CreateDeployTokenRequest = {
  encode(message: CreateDeployTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.asset !== undefined) {
      Asset.encode(message.asset, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenDetails !== undefined) {
      TokenDetails.encode(message.tokenDetails, writer.uint32(34).fork()).ldelim();
    }
    if (message.minAmountDeprecated.length !== 0) {
      writer.uint32(42).bytes(message.minAmountDeprecated);
    }
    if (message.address.length !== 0) {
      writer.uint32(50).bytes(message.address);
    }
    if (message.dailyMintLimit !== "") {
      writer.uint32(58).string(message.dailyMintLimit);
    }
    if (message.sender !== "") {
      writer.uint32(66).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDeployTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDeployTokenRequest();
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
          message.asset = Asset.decode(reader, reader.uint32());
          break;
        case 4:
          message.tokenDetails = TokenDetails.decode(reader, reader.uint32());
          break;
        case 5:
          message.minAmountDeprecated = reader.bytes();
          break;
        case 6:
          message.address = reader.bytes();
          break;
        case 7:
          message.dailyMintLimit = reader.string();
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

  fromJSON(object: any): CreateDeployTokenRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      asset: isSet(object.asset) ? Asset.fromJSON(object.asset) : undefined,
      tokenDetails: isSet(object.tokenDetails) ? TokenDetails.fromJSON(object.tokenDetails) : undefined,
      minAmountDeprecated: isSet(object.minAmountDeprecated)
        ? bytesFromBase64(object.minAmountDeprecated)
        : new Uint8Array(),
      address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array(),
      dailyMintLimit: isSet(object.dailyMintLimit) ? String(object.dailyMintLimit) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: CreateDeployTokenRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.chain !== undefined && (obj.chain = message.chain);
    message.asset !== undefined && (obj.asset = message.asset ? Asset.toJSON(message.asset) : undefined);
    message.tokenDetails !== undefined &&
      (obj.tokenDetails = message.tokenDetails ? TokenDetails.toJSON(message.tokenDetails) : undefined);
    message.minAmountDeprecated !== undefined &&
      (obj.minAmountDeprecated = base64FromBytes(
        message.minAmountDeprecated !== undefined ? message.minAmountDeprecated : new Uint8Array(),
      ));
    message.address !== undefined &&
      (obj.address = base64FromBytes(message.address !== undefined ? message.address : new Uint8Array()));
    message.dailyMintLimit !== undefined && (obj.dailyMintLimit = message.dailyMintLimit);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDeployTokenRequest>, I>>(
    object: I,
  ): CreateDeployTokenRequest {
    const message = createBaseCreateDeployTokenRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.asset =
      object.asset !== undefined && object.asset !== null ? Asset.fromPartial(object.asset) : undefined;
    message.tokenDetails =
      object.tokenDetails !== undefined && object.tokenDetails !== null
        ? TokenDetails.fromPartial(object.tokenDetails)
        : undefined;
    message.minAmountDeprecated = object.minAmountDeprecated ?? new Uint8Array();
    message.address = object.address ?? new Uint8Array();
    message.dailyMintLimit = object.dailyMintLimit ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseCreateDeployTokenResponse(): CreateDeployTokenResponse {
  return {};
}

export const CreateDeployTokenResponse = {
  encode(_: CreateDeployTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDeployTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDeployTokenResponse();
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

  fromJSON(_: any): CreateDeployTokenResponse {
    return {};
  },

  toJSON(_: CreateDeployTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateDeployTokenResponse>, I>>(_: I): CreateDeployTokenResponse {
    const message = createBaseCreateDeployTokenResponse();
    return message;
  },
};

function createBaseCreatePendingTransfersRequest(): CreatePendingTransfersRequest {
  return { senderDeprecated: new Uint8Array(), chain: "", sender: "" };
}

export const CreatePendingTransfersRequest = {
  encode(message: CreatePendingTransfersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePendingTransfersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePendingTransfersRequest();
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
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePendingTransfersRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: CreatePendingTransfersRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.chain !== undefined && (obj.chain = message.chain);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePendingTransfersRequest>, I>>(
    object: I,
  ): CreatePendingTransfersRequest {
    const message = createBaseCreatePendingTransfersRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseCreatePendingTransfersResponse(): CreatePendingTransfersResponse {
  return {};
}

export const CreatePendingTransfersResponse = {
  encode(_: CreatePendingTransfersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePendingTransfersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePendingTransfersResponse();
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

  fromJSON(_: any): CreatePendingTransfersResponse {
    return {};
  },

  toJSON(_: CreatePendingTransfersResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePendingTransfersResponse>, I>>(
    _: I,
  ): CreatePendingTransfersResponse {
    const message = createBaseCreatePendingTransfersResponse();
    return message;
  },
};

function createBaseCreateTransferOwnershipRequest(): CreateTransferOwnershipRequest {
  return { senderDeprecated: new Uint8Array(), chain: "", keyId: "", sender: "" };
}

export const CreateTransferOwnershipRequest = {
  encode(message: CreateTransferOwnershipRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOwnershipRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTransferOwnershipRequest();
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
          message.keyId = reader.string();
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

  fromJSON(object: any): CreateTransferOwnershipRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: CreateTransferOwnershipRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.chain !== undefined && (obj.chain = message.chain);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTransferOwnershipRequest>, I>>(
    object: I,
  ): CreateTransferOwnershipRequest {
    const message = createBaseCreateTransferOwnershipRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseCreateTransferOwnershipResponse(): CreateTransferOwnershipResponse {
  return {};
}

export const CreateTransferOwnershipResponse = {
  encode(_: CreateTransferOwnershipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOwnershipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTransferOwnershipResponse();
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

  fromJSON(_: any): CreateTransferOwnershipResponse {
    return {};
  },

  toJSON(_: CreateTransferOwnershipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTransferOwnershipResponse>, I>>(
    _: I,
  ): CreateTransferOwnershipResponse {
    const message = createBaseCreateTransferOwnershipResponse();
    return message;
  },
};

function createBaseCreateTransferOperatorshipRequest(): CreateTransferOperatorshipRequest {
  return { senderDeprecated: new Uint8Array(), chain: "", keyId: "", sender: "" };
}

export const CreateTransferOperatorshipRequest = {
  encode(message: CreateTransferOperatorshipRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.keyId !== "") {
      writer.uint32(26).string(message.keyId);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOperatorshipRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTransferOperatorshipRequest();
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
          message.keyId = reader.string();
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

  fromJSON(object: any): CreateTransferOperatorshipRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      keyId: isSet(object.keyId) ? String(object.keyId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: CreateTransferOperatorshipRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.chain !== undefined && (obj.chain = message.chain);
    message.keyId !== undefined && (obj.keyId = message.keyId);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTransferOperatorshipRequest>, I>>(
    object: I,
  ): CreateTransferOperatorshipRequest {
    const message = createBaseCreateTransferOperatorshipRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.keyId = object.keyId ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseCreateTransferOperatorshipResponse(): CreateTransferOperatorshipResponse {
  return {};
}

export const CreateTransferOperatorshipResponse = {
  encode(_: CreateTransferOperatorshipResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateTransferOperatorshipResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateTransferOperatorshipResponse();
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

  fromJSON(_: any): CreateTransferOperatorshipResponse {
    return {};
  },

  toJSON(_: CreateTransferOperatorshipResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreateTransferOperatorshipResponse>, I>>(
    _: I,
  ): CreateTransferOperatorshipResponse {
    const message = createBaseCreateTransferOperatorshipResponse();
    return message;
  },
};

function createBaseSignCommandsRequest(): SignCommandsRequest {
  return { senderDeprecated: new Uint8Array(), chain: "", sender: "" };
}

export const SignCommandsRequest = {
  encode(message: SignCommandsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignCommandsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignCommandsRequest();
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
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignCommandsRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: SignCommandsRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.chain !== undefined && (obj.chain = message.chain);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignCommandsRequest>, I>>(object: I): SignCommandsRequest {
    const message = createBaseSignCommandsRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseSignCommandsResponse(): SignCommandsResponse {
  return { batchedCommandsId: new Uint8Array(), commandCount: 0 };
}

export const SignCommandsResponse = {
  encode(message: SignCommandsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchedCommandsId.length !== 0) {
      writer.uint32(10).bytes(message.batchedCommandsId);
    }
    if (message.commandCount !== 0) {
      writer.uint32(16).uint32(message.commandCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SignCommandsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignCommandsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchedCommandsId = reader.bytes();
          break;
        case 2:
          message.commandCount = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SignCommandsResponse {
    return {
      batchedCommandsId: isSet(object.batchedCommandsId)
        ? bytesFromBase64(object.batchedCommandsId)
        : new Uint8Array(),
      commandCount: isSet(object.commandCount) ? Number(object.commandCount) : 0,
    };
  },

  toJSON(message: SignCommandsResponse): unknown {
    const obj: any = {};
    message.batchedCommandsId !== undefined &&
      (obj.batchedCommandsId = base64FromBytes(
        message.batchedCommandsId !== undefined ? message.batchedCommandsId : new Uint8Array(),
      ));
    message.commandCount !== undefined && (obj.commandCount = Math.round(message.commandCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SignCommandsResponse>, I>>(object: I): SignCommandsResponse {
    const message = createBaseSignCommandsResponse();
    message.batchedCommandsId = object.batchedCommandsId ?? new Uint8Array();
    message.commandCount = object.commandCount ?? 0;
    return message;
  },
};

function createBaseAddChainRequest(): AddChainRequest {
  return {
    senderDeprecated: new Uint8Array(),
    name: "",
    nativeAssetDeprecated: "",
    keyType: 0,
    params: new Uint8Array(),
    sender: "",
  };
}

export const AddChainRequest = {
  encode(message: AddChainRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.nativeAssetDeprecated !== "") {
      writer.uint32(26).string(message.nativeAssetDeprecated);
    }
    if (message.keyType !== 0) {
      writer.uint32(32).int32(message.keyType);
    }
    if (message.params.length !== 0) {
      writer.uint32(42).bytes(message.params);
    }
    if (message.sender !== "") {
      writer.uint32(50).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddChainRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddChainRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderDeprecated = reader.bytes();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.nativeAssetDeprecated = reader.string();
          break;
        case 4:
          message.keyType = reader.int32() as any;
          break;
        case 5:
          message.params = reader.bytes();
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

  fromJSON(object: any): AddChainRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      name: isSet(object.name) ? String(object.name) : "",
      nativeAssetDeprecated: isSet(object.nativeAssetDeprecated) ? String(object.nativeAssetDeprecated) : "",
      keyType: isSet(object.keyType) ? keyTypeFromJSON(object.keyType) : 0,
      params: isSet(object.params) ? bytesFromBase64(object.params) : new Uint8Array(),
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: AddChainRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.name !== undefined && (obj.name = message.name);
    message.nativeAssetDeprecated !== undefined &&
      (obj.nativeAssetDeprecated = message.nativeAssetDeprecated);
    message.keyType !== undefined && (obj.keyType = keyTypeToJSON(message.keyType));
    message.params !== undefined &&
      (obj.params = base64FromBytes(message.params !== undefined ? message.params : new Uint8Array()));
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddChainRequest>, I>>(object: I): AddChainRequest {
    const message = createBaseAddChainRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.name = object.name ?? "";
    message.nativeAssetDeprecated = object.nativeAssetDeprecated ?? "";
    message.keyType = object.keyType ?? 0;
    message.params = object.params ?? new Uint8Array();
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseAddChainResponse(): AddChainResponse {
  return {};
}

export const AddChainResponse = {
  encode(_: AddChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AddChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddChainResponse();
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

  fromJSON(_: any): AddChainResponse {
    return {};
  },

  toJSON(_: AddChainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AddChainResponse>, I>>(_: I): AddChainResponse {
    const message = createBaseAddChainResponse();
    return message;
  },
};

function createBaseRetryFailedEventRequest(): RetryFailedEventRequest {
  return { senderDeprecated: new Uint8Array(), chain: "", eventId: "", sender: "" };
}

export const RetryFailedEventRequest = {
  encode(message: RetryFailedEventRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderDeprecated.length !== 0) {
      writer.uint32(10).bytes(message.senderDeprecated);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.eventId !== "") {
      writer.uint32(26).string(message.eventId);
    }
    if (message.sender !== "") {
      writer.uint32(34).string(message.sender);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetryFailedEventRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetryFailedEventRequest();
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
          message.eventId = reader.string();
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

  fromJSON(object: any): RetryFailedEventRequest {
    return {
      senderDeprecated: isSet(object.senderDeprecated)
        ? bytesFromBase64(object.senderDeprecated)
        : new Uint8Array(),
      chain: isSet(object.chain) ? String(object.chain) : "",
      eventId: isSet(object.eventId) ? String(object.eventId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
    };
  },

  toJSON(message: RetryFailedEventRequest): unknown {
    const obj: any = {};
    message.senderDeprecated !== undefined &&
      (obj.senderDeprecated = base64FromBytes(
        message.senderDeprecated !== undefined ? message.senderDeprecated : new Uint8Array(),
      ));
    message.chain !== undefined && (obj.chain = message.chain);
    message.eventId !== undefined && (obj.eventId = message.eventId);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RetryFailedEventRequest>, I>>(object: I): RetryFailedEventRequest {
    const message = createBaseRetryFailedEventRequest();
    message.senderDeprecated = object.senderDeprecated ?? new Uint8Array();
    message.chain = object.chain ?? "";
    message.eventId = object.eventId ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};

function createBaseRetryFailedEventResponse(): RetryFailedEventResponse {
  return {};
}

export const RetryFailedEventResponse = {
  encode(_: RetryFailedEventResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RetryFailedEventResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRetryFailedEventResponse();
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

  fromJSON(_: any): RetryFailedEventResponse {
    return {};
  },

  toJSON(_: RetryFailedEventResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RetryFailedEventResponse>, I>>(_: I): RetryFailedEventResponse {
    const message = createBaseRetryFailedEventResponse();
    return message;
  },
};

function createBaseUpdateParamsRequest(): UpdateParamsRequest {
  return { authority: "", params: undefined };
}

export const UpdateParamsRequest = {
  encode(message: UpdateParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateParamsRequest {
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdateParamsRequest {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: UpdateParamsRequest): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateParamsRequest>, I>>(object: I): UpdateParamsRequest {
    const message = createBaseUpdateParamsRequest();
    message.authority = object.authority ?? "";
    message.params =
      object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
};

function createBaseUpdateParamsResponse(): UpdateParamsResponse {
  return {};
}

export const UpdateParamsResponse = {
  encode(_: UpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateParamsResponse {
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

  fromJSON(_: any): UpdateParamsResponse {
    return {};
  },

  toJSON(_: UpdateParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdateParamsResponse>, I>>(_: I): UpdateParamsResponse {
    const message = createBaseUpdateParamsResponse();
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  arr.forEach((byte) => {
    bin.push(String.fromCharCode(byte));
  });
  return btoa(bin.join(""));
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
