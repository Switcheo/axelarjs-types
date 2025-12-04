import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Chain, Asset } from "../../../axelar/nexus/exported/v1beta1/types";
import { Duration } from "../../../google/protobuf/duration";
import { Fee } from "../../../axelar/axelarnet/v1beta1/types";
import { Params } from "../../../axelar/axelarnet/v1beta1/params";
export declare const protobufPackage = "axelar.axelarnet.v1beta1";
/**
 * MsgLink represents a message to link a cross-chain address to an Axelar
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
    recipientAddr: string;
    recipientChain: string;
    asset: string;
    sender: string;
}
export interface LinkResponse {
    depositAddr: string;
}
/** MsgConfirmDeposit represents a deposit confirmation message */
export interface ConfirmDepositRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    /**
     * DEPRECATED: Removed in v0.14, reinstated in v1.3 for backward
     * compatibility. This field must remain to allow decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    txIdDeprecated: Uint8Array;
    /**
     * DEPRECATED: Removed in v0.15, reinstated in v1.3 for backward
     * compatibility. This field must remain to allow decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    tokenDeprecated?: Coin;
    depositAddress: Uint8Array;
    denom: string;
    sender: string;
}
export interface ConfirmDepositResponse {
}
/**
 * MsgExecutePendingTransfers represents a message to trigger transfer all
 * pending transfers
 */
export interface ExecutePendingTransfersRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    sender: string;
}
export interface ExecutePendingTransfersResponse {
}
/**
 * MSgRegisterIBCPath represents a message to register an IBC tracing path for
 * a cosmos chain
 *
 * @deprecated
 */
export interface RegisterIBCPathRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    chain: string;
    path: string;
    sender: string;
}
export interface RegisterIBCPathResponse {
}
/**
 * MsgAddCosmosBasedChain represents a message to register a cosmos based chain
 * to nexus
 */
export interface AddCosmosBasedChainRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    /**
     * chain was deprecated in v0.27
     *
     * @deprecated
     */
    chain?: Chain;
    addrPrefix: string;
    /**
     * DEPRECATED: Removed in v0.15, reinstated in v1.3 for backward
     * compatibility. This field must remain to allow decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    minAmountDeprecated: Uint8Array;
    /**
     * native_assets was deprecated in v0.27
     *
     * @deprecated
     */
    nativeAssets: Asset[];
    /** TODO: Rename this to `chain` after v1beta1 -> v1 version bump */
    cosmosChain: string;
    ibcPath: string;
    sender: string;
}
export interface AddCosmosBasedChainResponse {
}
/**
 * RegisterAssetRequest represents a message to register an asset to a cosmos
 * based chain
 */
export interface RegisterAssetRequest {
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
    limit: Uint8Array;
    window?: Duration;
    sender: string;
}
export interface RegisterAssetResponse {
}
/**
 * RouteIBCTransfersRequest represents a message to route pending transfers to
 * cosmos based chains
 */
export interface RouteIBCTransfersRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    sender: string;
}
export interface RouteIBCTransfersResponse {
}
/**
 * RegisterFeeCollectorRequest represents a message to register axelarnet fee
 * collector account
 */
export interface RegisterFeeCollectorRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    feeCollector: Uint8Array;
    sender: string;
}
export interface RegisterFeeCollectorResponse {
}
export interface RetryIBCTransferRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    /** @deprecated */
    chain: string;
    id: Long;
    sender: string;
}
export interface RetryIBCTransferResponse {
}
export interface RouteMessageRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    id: string;
    payload: Uint8Array;
    feegranter: Uint8Array;
    sender: string;
}
export interface RouteMessageResponse {
}
export interface CallContractRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    chain: string;
    contractAddress: string;
    payload: Uint8Array;
    fee?: Fee;
    sender: string;
}
export interface CallContractResponse {
}
export interface UpdateParamsRequest {
    authority: string;
    params?: Params;
}
export interface UpdateParamsResponse {
}
export declare const LinkRequest: {
    encode(message: LinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkRequest;
    fromJSON(object: any): LinkRequest;
    toJSON(message: LinkRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        asset?: string | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        recipientAddr?: string | undefined;
        recipientChain?: string | undefined;
        asset?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof LinkRequest>, never>>(object: I): LinkRequest;
};
export declare const LinkResponse: {
    encode(message: LinkResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkResponse;
    fromJSON(object: any): LinkResponse;
    toJSON(message: LinkResponse): unknown;
    fromPartial<I extends {
        depositAddr?: string | undefined;
    } & {
        depositAddr?: string | undefined;
    } & Record<Exclude<keyof I, "depositAddr">, never>>(object: I): LinkResponse;
};
export declare const ConfirmDepositRequest: {
    encode(message: ConfirmDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmDepositRequest;
    fromJSON(object: any): ConfirmDepositRequest;
    toJSON(message: ConfirmDepositRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        txIdDeprecated?: Uint8Array | undefined;
        tokenDeprecated?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        depositAddress?: Uint8Array | undefined;
        denom?: string | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        txIdDeprecated?: Uint8Array | undefined;
        tokenDeprecated?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["tokenDeprecated"], keyof Coin>, never>) | undefined;
        depositAddress?: Uint8Array | undefined;
        denom?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof ConfirmDepositRequest>, never>>(object: I): ConfirmDepositRequest;
};
export declare const ConfirmDepositResponse: {
    encode(_: ConfirmDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmDepositResponse;
    fromJSON(_: any): ConfirmDepositResponse;
    toJSON(_: ConfirmDepositResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ConfirmDepositResponse;
};
export declare const ExecutePendingTransfersRequest: {
    encode(message: ExecutePendingTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExecutePendingTransfersRequest;
    fromJSON(object: any): ExecutePendingTransfersRequest;
    toJSON(message: ExecutePendingTransfersRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof ExecutePendingTransfersRequest>, never>>(object: I): ExecutePendingTransfersRequest;
};
export declare const ExecutePendingTransfersResponse: {
    encode(_: ExecutePendingTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ExecutePendingTransfersResponse;
    fromJSON(_: any): ExecutePendingTransfersResponse;
    toJSON(_: ExecutePendingTransfersResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ExecutePendingTransfersResponse;
};
export declare const RegisterIBCPathRequest: {
    encode(message: RegisterIBCPathRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterIBCPathRequest;
    fromJSON(object: any): RegisterIBCPathRequest;
    toJSON(message: RegisterIBCPathRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        path?: string | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        path?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof RegisterIBCPathRequest>, never>>(object: I): RegisterIBCPathRequest;
};
export declare const RegisterIBCPathResponse: {
    encode(_: RegisterIBCPathResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterIBCPathResponse;
    fromJSON(_: any): RegisterIBCPathResponse;
    toJSON(_: RegisterIBCPathResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RegisterIBCPathResponse;
};
export declare const AddCosmosBasedChainRequest: {
    encode(message: AddCosmosBasedChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddCosmosBasedChainRequest;
    fromJSON(object: any): AddCosmosBasedChainRequest;
    toJSON(message: AddCosmosBasedChainRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: {
            name?: string | undefined;
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } | undefined;
        addrPrefix?: string | undefined;
        minAmountDeprecated?: Uint8Array | undefined;
        nativeAssets?: {
            denom?: string | undefined;
            minAmountDeprecated?: Uint8Array | undefined;
            isNativeAsset?: boolean | undefined;
        }[] | undefined;
        cosmosChain?: string | undefined;
        ibcPath?: string | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: ({
            name?: string | undefined;
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } & {
            name?: string | undefined;
            nativeAssetDeprecated?: string | undefined;
            supportsForeignAssets?: boolean | undefined;
            keyType?: import("../../tss/exported/v1beta1/types").KeyType | undefined;
            module?: string | undefined;
        } & Record<Exclude<keyof I["chain"], keyof Chain>, never>) | undefined;
        addrPrefix?: string | undefined;
        minAmountDeprecated?: Uint8Array | undefined;
        nativeAssets?: ({
            denom?: string | undefined;
            minAmountDeprecated?: Uint8Array | undefined;
            isNativeAsset?: boolean | undefined;
        }[] & ({
            denom?: string | undefined;
            minAmountDeprecated?: Uint8Array | undefined;
            isNativeAsset?: boolean | undefined;
        } & {
            denom?: string | undefined;
            minAmountDeprecated?: Uint8Array | undefined;
            isNativeAsset?: boolean | undefined;
        } & Record<Exclude<keyof I["nativeAssets"][number], keyof Asset>, never>)[] & Record<Exclude<keyof I["nativeAssets"], keyof {
            denom?: string | undefined;
            minAmountDeprecated?: Uint8Array | undefined;
            isNativeAsset?: boolean | undefined;
        }[]>, never>) | undefined;
        cosmosChain?: string | undefined;
        ibcPath?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof AddCosmosBasedChainRequest>, never>>(object: I): AddCosmosBasedChainRequest;
};
export declare const AddCosmosBasedChainResponse: {
    encode(_: AddCosmosBasedChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddCosmosBasedChainResponse;
    fromJSON(_: any): AddCosmosBasedChainResponse;
    toJSON(_: AddCosmosBasedChainResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): AddCosmosBasedChainResponse;
};
export declare const RegisterAssetRequest: {
    encode(message: RegisterAssetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterAssetRequest;
    fromJSON(object: any): RegisterAssetRequest;
    toJSON(message: RegisterAssetRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        asset?: {
            denom?: string | undefined;
            minAmountDeprecated?: Uint8Array | undefined;
            isNativeAsset?: boolean | undefined;
        } | undefined;
        limit?: Uint8Array | undefined;
        window?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        asset?: ({
            denom?: string | undefined;
            minAmountDeprecated?: Uint8Array | undefined;
            isNativeAsset?: boolean | undefined;
        } & {
            denom?: string | undefined;
            minAmountDeprecated?: Uint8Array | undefined;
            isNativeAsset?: boolean | undefined;
        } & Record<Exclude<keyof I["asset"], keyof Asset>, never>) | undefined;
        limit?: Uint8Array | undefined;
        window?: ({
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } & {
            seconds?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["window"]["seconds"], keyof Long.Long>, never>) | undefined;
            nanos?: number | undefined;
        } & Record<Exclude<keyof I["window"], keyof Duration>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof RegisterAssetRequest>, never>>(object: I): RegisterAssetRequest;
};
export declare const RegisterAssetResponse: {
    encode(_: RegisterAssetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterAssetResponse;
    fromJSON(_: any): RegisterAssetResponse;
    toJSON(_: RegisterAssetResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RegisterAssetResponse;
};
export declare const RouteIBCTransfersRequest: {
    encode(message: RouteIBCTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteIBCTransfersRequest;
    fromJSON(object: any): RouteIBCTransfersRequest;
    toJSON(message: RouteIBCTransfersRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof RouteIBCTransfersRequest>, never>>(object: I): RouteIBCTransfersRequest;
};
export declare const RouteIBCTransfersResponse: {
    encode(_: RouteIBCTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteIBCTransfersResponse;
    fromJSON(_: any): RouteIBCTransfersResponse;
    toJSON(_: RouteIBCTransfersResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RouteIBCTransfersResponse;
};
export declare const RegisterFeeCollectorRequest: {
    encode(message: RegisterFeeCollectorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterFeeCollectorRequest;
    fromJSON(object: any): RegisterFeeCollectorRequest;
    toJSON(message: RegisterFeeCollectorRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        feeCollector?: Uint8Array | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        feeCollector?: Uint8Array | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof RegisterFeeCollectorRequest>, never>>(object: I): RegisterFeeCollectorRequest;
};
export declare const RegisterFeeCollectorResponse: {
    encode(_: RegisterFeeCollectorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterFeeCollectorResponse;
    fromJSON(_: any): RegisterFeeCollectorResponse;
    toJSON(_: RegisterFeeCollectorResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RegisterFeeCollectorResponse;
};
export declare const RetryIBCTransferRequest: {
    encode(message: RetryIBCTransferRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetryIBCTransferRequest;
    fromJSON(object: any): RetryIBCTransferRequest;
    toJSON(message: RetryIBCTransferRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        id?: string | number | Long.Long | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        id?: string | number | (Long.Long & {
            high: number;
            low: number;
            unsigned: boolean;
            add: (addend: string | number | Long.Long) => Long.Long;
            and: (other: string | number | Long.Long) => Long.Long;
            compare: (other: string | number | Long.Long) => number;
            comp: (other: string | number | Long.Long) => number;
            divide: (divisor: string | number | Long.Long) => Long.Long;
            div: (divisor: string | number | Long.Long) => Long.Long;
            equals: (other: string | number | Long.Long) => boolean;
            eq: (other: string | number | Long.Long) => boolean;
            getHighBits: () => number;
            getHighBitsUnsigned: () => number;
            getLowBits: () => number;
            getLowBitsUnsigned: () => number;
            getNumBitsAbs: () => number;
            greaterThan: (other: string | number | Long.Long) => boolean;
            gt: (other: string | number | Long.Long) => boolean;
            greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
            gte: (other: string | number | Long.Long) => boolean;
            isEven: () => boolean;
            isNegative: () => boolean;
            isOdd: () => boolean;
            isPositive: () => boolean;
            isZero: () => boolean;
            lessThan: (other: string | number | Long.Long) => boolean;
            lt: (other: string | number | Long.Long) => boolean;
            lessThanOrEqual: (other: string | number | Long.Long) => boolean;
            lte: (other: string | number | Long.Long) => boolean;
            modulo: (other: string | number | Long.Long) => Long.Long;
            mod: (other: string | number | Long.Long) => Long.Long;
            multiply: (multiplier: string | number | Long.Long) => Long.Long;
            mul: (multiplier: string | number | Long.Long) => Long.Long;
            negate: () => Long.Long;
            neg: () => Long.Long;
            not: () => Long.Long;
            notEquals: (other: string | number | Long.Long) => boolean;
            neq: (other: string | number | Long.Long) => boolean;
            or: (other: string | number | Long.Long) => Long.Long;
            shiftLeft: (numBits: number | Long.Long) => Long.Long;
            shl: (numBits: number | Long.Long) => Long.Long;
            shiftRight: (numBits: number | Long.Long) => Long.Long;
            shr: (numBits: number | Long.Long) => Long.Long;
            shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
            shru: (numBits: number | Long.Long) => Long.Long;
            subtract: (subtrahend: string | number | Long.Long) => Long.Long;
            sub: (subtrahend: string | number | Long.Long) => Long.Long;
            toInt: () => number;
            toNumber: () => number;
            toBytes: (le?: boolean | undefined) => number[];
            toBytesLE: () => number[];
            toBytesBE: () => number[];
            toSigned: () => Long.Long;
            toString: (radix?: number | undefined) => string;
            toUnsigned: () => Long.Long;
            xor: (other: string | number | Long.Long) => Long.Long;
        } & Record<Exclude<keyof I["id"], keyof Long.Long>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof RetryIBCTransferRequest>, never>>(object: I): RetryIBCTransferRequest;
};
export declare const RetryIBCTransferResponse: {
    encode(_: RetryIBCTransferResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetryIBCTransferResponse;
    fromJSON(_: any): RetryIBCTransferResponse;
    toJSON(_: RetryIBCTransferResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RetryIBCTransferResponse;
};
export declare const RouteMessageRequest: {
    encode(message: RouteMessageRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteMessageRequest;
    fromJSON(object: any): RouteMessageRequest;
    toJSON(message: RouteMessageRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        id?: string | undefined;
        payload?: Uint8Array | undefined;
        feegranter?: Uint8Array | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        id?: string | undefined;
        payload?: Uint8Array | undefined;
        feegranter?: Uint8Array | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof RouteMessageRequest>, never>>(object: I): RouteMessageRequest;
};
export declare const RouteMessageResponse: {
    encode(_: RouteMessageResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RouteMessageResponse;
    fromJSON(_: any): RouteMessageResponse;
    toJSON(_: RouteMessageResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RouteMessageResponse;
};
export declare const CallContractRequest: {
    encode(message: CallContractRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CallContractRequest;
    fromJSON(object: any): CallContractRequest;
    toJSON(message: CallContractRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        contractAddress?: string | undefined;
        payload?: Uint8Array | undefined;
        fee?: {
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: Uint8Array | undefined;
            refundRecipient?: Uint8Array | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        contractAddress?: string | undefined;
        payload?: Uint8Array | undefined;
        fee?: ({
            amount?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            recipient?: Uint8Array | undefined;
            refundRecipient?: Uint8Array | undefined;
        } & {
            amount?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & Record<Exclude<keyof I["fee"]["amount"], keyof Coin>, never>) | undefined;
            recipient?: Uint8Array | undefined;
            refundRecipient?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["fee"], keyof Fee>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof CallContractRequest>, never>>(object: I): CallContractRequest;
};
export declare const CallContractResponse: {
    encode(_: CallContractResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CallContractResponse;
    fromJSON(_: any): CallContractResponse;
    toJSON(_: CallContractResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): CallContractResponse;
};
export declare const UpdateParamsRequest: {
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        params?: {
            routeTimeoutWindow?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            callContractsProposalMinDeposits?: {
                chain?: string | undefined;
                contractAddress?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        authority?: string | undefined;
        params?: ({
            routeTimeoutWindow?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            callContractsProposalMinDeposits?: {
                chain?: string | undefined;
                contractAddress?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            routeTimeoutWindow?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["params"]["routeTimeoutWindow"], keyof Long.Long>, never>) | undefined;
            transferLimit?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["params"]["transferLimit"], keyof Long.Long>, never>) | undefined;
            endBlockerLimit?: string | number | (Long.Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long.Long) => Long.Long;
                and: (other: string | number | Long.Long) => Long.Long;
                compare: (other: string | number | Long.Long) => number;
                comp: (other: string | number | Long.Long) => number;
                divide: (divisor: string | number | Long.Long) => Long.Long;
                div: (divisor: string | number | Long.Long) => Long.Long;
                equals: (other: string | number | Long.Long) => boolean;
                eq: (other: string | number | Long.Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long.Long) => boolean;
                gt: (other: string | number | Long.Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long.Long) => boolean;
                gte: (other: string | number | Long.Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long.Long) => boolean;
                lt: (other: string | number | Long.Long) => boolean;
                lessThanOrEqual: (other: string | number | Long.Long) => boolean;
                lte: (other: string | number | Long.Long) => boolean;
                modulo: (other: string | number | Long.Long) => Long.Long;
                mod: (other: string | number | Long.Long) => Long.Long;
                multiply: (multiplier: string | number | Long.Long) => Long.Long;
                mul: (multiplier: string | number | Long.Long) => Long.Long;
                negate: () => Long.Long;
                neg: () => Long.Long;
                not: () => Long.Long;
                notEquals: (other: string | number | Long.Long) => boolean;
                neq: (other: string | number | Long.Long) => boolean;
                or: (other: string | number | Long.Long) => Long.Long;
                shiftLeft: (numBits: number | Long.Long) => Long.Long;
                shl: (numBits: number | Long.Long) => Long.Long;
                shiftRight: (numBits: number | Long.Long) => Long.Long;
                shr: (numBits: number | Long.Long) => Long.Long;
                shiftRightUnsigned: (numBits: number | Long.Long) => Long.Long;
                shru: (numBits: number | Long.Long) => Long.Long;
                subtract: (subtrahend: string | number | Long.Long) => Long.Long;
                sub: (subtrahend: string | number | Long.Long) => Long.Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long.Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long.Long;
                xor: (other: string | number | Long.Long) => Long.Long;
            } & Record<Exclude<keyof I["params"]["endBlockerLimit"], keyof Long.Long>, never>) | undefined;
            callContractsProposalMinDeposits?: ({
                chain?: string | undefined;
                contractAddress?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[] & ({
                chain?: string | undefined;
                contractAddress?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            } & {
                chain?: string | undefined;
                contractAddress?: string | undefined;
                minDeposits?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] & ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I["params"]["callContractsProposalMinDeposits"][number]["minDeposits"][number], keyof Coin>, never>)[] & Record<Exclude<keyof I["params"]["callContractsProposalMinDeposits"][number]["minDeposits"], keyof {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["callContractsProposalMinDeposits"][number], keyof import("../../../axelar/axelarnet/v1beta1/params").CallContractProposalMinDeposit>, never>)[] & Record<Exclude<keyof I["params"]["callContractsProposalMinDeposits"], keyof {
                chain?: string | undefined;
                contractAddress?: string | undefined;
                minDeposits?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                }[] | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof UpdateParamsRequest>, never>>(object: I): UpdateParamsRequest;
};
export declare const UpdateParamsResponse: {
    encode(_: UpdateParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsResponse;
    fromJSON(_: any): UpdateParamsResponse;
    toJSON(_: UpdateParamsResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): UpdateParamsResponse;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
