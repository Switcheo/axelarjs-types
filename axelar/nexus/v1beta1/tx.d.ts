import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { FeeInfo } from "../../../axelar/nexus/exported/v1beta1/types";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Duration } from "../../../google/protobuf/duration";
import { Params } from "../../../axelar/nexus/v1beta1/params";
export declare const protobufPackage = "axelar.nexus.v1beta1";
export interface RegisterChainMaintainerRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    chains: string[];
    sender: string;
}
export interface RegisterChainMaintainerResponse {
}
export interface DeregisterChainMaintainerRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    chains: string[];
    sender: string;
}
export interface DeregisterChainMaintainerResponse {
}
/** ActivateChainRequest represents a message to activate chains */
export interface ActivateChainRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    chains: string[];
    sender: string;
}
export interface ActivateChainResponse {
}
/** DeactivateChainRequest represents a message to deactivate chains */
export interface DeactivateChainRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    chains: string[];
    sender: string;
}
export interface DeactivateChainResponse {
}
/**
 * RegisterAssetFeeRequest represents a message to register the transfer fee
 * info associated to an asset on a chain
 */
export interface RegisterAssetFeeRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    feeInfo?: FeeInfo;
    sender: string;
}
export interface RegisterAssetFeeResponse {
}
/**
 * SetTransferRateLimitRequest represents a message to set rate limits on
 * transfers
 */
export interface SetTransferRateLimitRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    chain: string;
    limit?: Coin;
    window?: Duration;
    sender: string;
}
export interface SetTransferRateLimitResponse {
}
/**
 * EnableLinkDepositRequest enables the link-deposit protocol for cross-chain
 * transfers. The link-deposit protocol allows users to create deposit addresses
 * and confirm deposits for cross-chain asset transfers on both EVM and Cosmos
 * chains.
 */
export interface EnableLinkDepositRequest {
    authority: string;
}
export interface EnableLinkDepositResponse {
}
/**
 * DisableLinkDepositRequest disables the link-deposit protocol for cross-chain
 * transfers. When disabled, Link, ConfirmDeposit, and CreateBurnTokens
 * operations will be rejected.
 */
export interface DisableLinkDepositRequest {
    authority: string;
}
export interface DisableLinkDepositResponse {
}
export interface UpdateParamsRequest {
    authority: string;
    params?: Params;
}
export interface UpdateParamsResponse {
}
export declare const RegisterChainMaintainerRequest: {
    encode(message: RegisterChainMaintainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterChainMaintainerRequest;
    fromJSON(object: any): RegisterChainMaintainerRequest;
    toJSON(message: RegisterChainMaintainerRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chains?: string[] | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chains?: (string[] & string[] & Record<Exclude<keyof I["chains"], keyof string[]>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof RegisterChainMaintainerRequest>, never>>(object: I): RegisterChainMaintainerRequest;
};
export declare const RegisterChainMaintainerResponse: {
    encode(_: RegisterChainMaintainerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterChainMaintainerResponse;
    fromJSON(_: any): RegisterChainMaintainerResponse;
    toJSON(_: RegisterChainMaintainerResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RegisterChainMaintainerResponse;
};
export declare const DeregisterChainMaintainerRequest: {
    encode(message: DeregisterChainMaintainerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeregisterChainMaintainerRequest;
    fromJSON(object: any): DeregisterChainMaintainerRequest;
    toJSON(message: DeregisterChainMaintainerRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chains?: string[] | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chains?: (string[] & string[] & Record<Exclude<keyof I["chains"], keyof string[]>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof DeregisterChainMaintainerRequest>, never>>(object: I): DeregisterChainMaintainerRequest;
};
export declare const DeregisterChainMaintainerResponse: {
    encode(_: DeregisterChainMaintainerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeregisterChainMaintainerResponse;
    fromJSON(_: any): DeregisterChainMaintainerResponse;
    toJSON(_: DeregisterChainMaintainerResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): DeregisterChainMaintainerResponse;
};
export declare const ActivateChainRequest: {
    encode(message: ActivateChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateChainRequest;
    fromJSON(object: any): ActivateChainRequest;
    toJSON(message: ActivateChainRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chains?: string[] | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chains?: (string[] & string[] & Record<Exclude<keyof I["chains"], keyof string[]>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof ActivateChainRequest>, never>>(object: I): ActivateChainRequest;
};
export declare const ActivateChainResponse: {
    encode(_: ActivateChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ActivateChainResponse;
    fromJSON(_: any): ActivateChainResponse;
    toJSON(_: ActivateChainResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ActivateChainResponse;
};
export declare const DeactivateChainRequest: {
    encode(message: DeactivateChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateChainRequest;
    fromJSON(object: any): DeactivateChainRequest;
    toJSON(message: DeactivateChainRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chains?: string[] | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chains?: (string[] & string[] & Record<Exclude<keyof I["chains"], keyof string[]>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof DeactivateChainRequest>, never>>(object: I): DeactivateChainRequest;
};
export declare const DeactivateChainResponse: {
    encode(_: DeactivateChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeactivateChainResponse;
    fromJSON(_: any): DeactivateChainResponse;
    toJSON(_: DeactivateChainResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): DeactivateChainResponse;
};
export declare const RegisterAssetFeeRequest: {
    encode(message: RegisterAssetFeeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterAssetFeeRequest;
    fromJSON(object: any): RegisterAssetFeeRequest;
    toJSON(message: RegisterAssetFeeRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        feeInfo?: {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Uint8Array | undefined;
            minFee?: Uint8Array | undefined;
            maxFee?: Uint8Array | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        feeInfo?: ({
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Uint8Array | undefined;
            minFee?: Uint8Array | undefined;
            maxFee?: Uint8Array | undefined;
        } & {
            chain?: string | undefined;
            asset?: string | undefined;
            feeRate?: Uint8Array | undefined;
            minFee?: Uint8Array | undefined;
            maxFee?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["feeInfo"], keyof FeeInfo>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof RegisterAssetFeeRequest>, never>>(object: I): RegisterAssetFeeRequest;
};
export declare const RegisterAssetFeeResponse: {
    encode(_: RegisterAssetFeeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterAssetFeeResponse;
    fromJSON(_: any): RegisterAssetFeeResponse;
    toJSON(_: RegisterAssetFeeResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RegisterAssetFeeResponse;
};
export declare const SetTransferRateLimitRequest: {
    encode(message: SetTransferRateLimitRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetTransferRateLimitRequest;
    fromJSON(object: any): SetTransferRateLimitRequest;
    toJSON(message: SetTransferRateLimitRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        limit?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        window?: {
            seconds?: string | number | Long.Long | undefined;
            nanos?: number | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        limit?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["limit"], keyof Coin>, never>) | undefined;
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
    } & Record<Exclude<keyof I, keyof SetTransferRateLimitRequest>, never>>(object: I): SetTransferRateLimitRequest;
};
export declare const SetTransferRateLimitResponse: {
    encode(_: SetTransferRateLimitResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetTransferRateLimitResponse;
    fromJSON(_: any): SetTransferRateLimitResponse;
    toJSON(_: SetTransferRateLimitResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): SetTransferRateLimitResponse;
};
export declare const EnableLinkDepositRequest: {
    encode(message: EnableLinkDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EnableLinkDepositRequest;
    fromJSON(object: any): EnableLinkDepositRequest;
    toJSON(message: EnableLinkDepositRequest): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
    } & {
        authority?: string | undefined;
    } & Record<Exclude<keyof I, "authority">, never>>(object: I): EnableLinkDepositRequest;
};
export declare const EnableLinkDepositResponse: {
    encode(_: EnableLinkDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): EnableLinkDepositResponse;
    fromJSON(_: any): EnableLinkDepositResponse;
    toJSON(_: EnableLinkDepositResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): EnableLinkDepositResponse;
};
export declare const DisableLinkDepositRequest: {
    encode(message: DisableLinkDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DisableLinkDepositRequest;
    fromJSON(object: any): DisableLinkDepositRequest;
    toJSON(message: DisableLinkDepositRequest): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
    } & {
        authority?: string | undefined;
    } & Record<Exclude<keyof I, "authority">, never>>(object: I): DisableLinkDepositRequest;
};
export declare const DisableLinkDepositResponse: {
    encode(_: DisableLinkDepositResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DisableLinkDepositResponse;
    fromJSON(_: any): DisableLinkDepositResponse;
    toJSON(_: DisableLinkDepositResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): DisableLinkDepositResponse;
};
export declare const UpdateParamsRequest: {
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        params?: {
            chainActivationThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerMissingVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerIncorrectVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerCheckWindow?: number | undefined;
            gateway?: Uint8Array | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        authority?: string | undefined;
        params?: ({
            chainActivationThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerMissingVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerIncorrectVoteThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            chainMaintainerCheckWindow?: number | undefined;
            gateway?: Uint8Array | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
        } & {
            chainActivationThreshold?: ({
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } & {
                numerator?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["chainActivationThreshold"]["numerator"], keyof Long.Long>, never>) | undefined;
                denominator?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["chainActivationThreshold"]["denominator"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["chainActivationThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
            chainMaintainerMissingVoteThreshold?: ({
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } & {
                numerator?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"]["numerator"], keyof Long.Long>, never>) | undefined;
                denominator?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"]["denominator"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["chainMaintainerMissingVoteThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
            chainMaintainerIncorrectVoteThreshold?: ({
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } & {
                numerator?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"]["numerator"], keyof Long.Long>, never>) | undefined;
                denominator?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"]["denominator"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["chainMaintainerIncorrectVoteThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
            chainMaintainerCheckWindow?: number | undefined;
            gateway?: Uint8Array | undefined;
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
