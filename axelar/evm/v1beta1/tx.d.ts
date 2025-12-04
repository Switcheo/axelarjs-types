import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Asset, TransferKeyType, TokenDetails } from "../../../axelar/evm/v1beta1/types";
import { KeyType } from "../../../axelar/tss/exported/v1beta1/types";
import { Params } from "../../../axelar/evm/v1beta1/params";
export declare const protobufPackage = "axelar.evm.v1beta1";
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
export interface SetGatewayResponse {
}
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
export interface ConfirmGatewayTxResponse {
}
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
export interface ConfirmGatewayTxsResponse {
}
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
export interface ConfirmDepositResponse {
}
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
export interface ConfirmTokenResponse {
}
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
export interface ConfirmTransferKeyResponse {
}
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
export interface CreateBurnTokensResponse {
}
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
export interface CreateDeployTokenResponse {
}
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
export interface CreatePendingTransfersResponse {
}
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
export interface CreateTransferOwnershipResponse {
}
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
export interface CreateTransferOperatorshipResponse {
}
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
export interface AddChainResponse {
}
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
export interface RetryFailedEventResponse {
}
export interface UpdateParamsRequest {
    authority: string;
    params?: Params;
}
export interface UpdateParamsResponse {
}
export declare const SetGatewayRequest: {
    encode(message: SetGatewayRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetGatewayRequest;
    fromJSON(object: any): SetGatewayRequest;
    toJSON(message: SetGatewayRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        address?: Uint8Array | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        address?: Uint8Array | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof SetGatewayRequest>, never>>(object: I): SetGatewayRequest;
};
export declare const SetGatewayResponse: {
    encode(_: SetGatewayResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SetGatewayResponse;
    fromJSON(_: any): SetGatewayResponse;
    toJSON(_: SetGatewayResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): SetGatewayResponse;
};
export declare const ConfirmGatewayTxRequest: {
    encode(message: ConfirmGatewayTxRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmGatewayTxRequest;
    fromJSON(object: any): ConfirmGatewayTxRequest;
    toJSON(message: ConfirmGatewayTxRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        txId?: Uint8Array | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        txId?: Uint8Array | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof ConfirmGatewayTxRequest>, never>>(object: I): ConfirmGatewayTxRequest;
};
export declare const ConfirmGatewayTxResponse: {
    encode(_: ConfirmGatewayTxResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmGatewayTxResponse;
    fromJSON(_: any): ConfirmGatewayTxResponse;
    toJSON(_: ConfirmGatewayTxResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ConfirmGatewayTxResponse;
};
export declare const ConfirmGatewayTxsRequest: {
    encode(message: ConfirmGatewayTxsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmGatewayTxsRequest;
    fromJSON(object: any): ConfirmGatewayTxsRequest;
    toJSON(message: ConfirmGatewayTxsRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        txIds?: Uint8Array[] | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        txIds?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["txIds"], keyof Uint8Array[]>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof ConfirmGatewayTxsRequest>, never>>(object: I): ConfirmGatewayTxsRequest;
};
export declare const ConfirmGatewayTxsResponse: {
    encode(_: ConfirmGatewayTxsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmGatewayTxsResponse;
    fromJSON(_: any): ConfirmGatewayTxsResponse;
    toJSON(_: ConfirmGatewayTxsResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ConfirmGatewayTxsResponse;
};
export declare const ConfirmDepositRequest: {
    encode(message: ConfirmDepositRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmDepositRequest;
    fromJSON(object: any): ConfirmDepositRequest;
    toJSON(message: ConfirmDepositRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        txId?: Uint8Array | undefined;
        amount?: Uint8Array | undefined;
        burnerAddress?: Uint8Array | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        txId?: Uint8Array | undefined;
        amount?: Uint8Array | undefined;
        burnerAddress?: Uint8Array | undefined;
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
export declare const ConfirmTokenRequest: {
    encode(message: ConfirmTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmTokenRequest;
    fromJSON(object: any): ConfirmTokenRequest;
    toJSON(message: ConfirmTokenRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        txId?: Uint8Array | undefined;
        asset?: {
            chain?: string | undefined;
            name?: string | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        txId?: Uint8Array | undefined;
        asset?: ({
            chain?: string | undefined;
            name?: string | undefined;
        } & {
            chain?: string | undefined;
            name?: string | undefined;
        } & Record<Exclude<keyof I["asset"], keyof Asset>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof ConfirmTokenRequest>, never>>(object: I): ConfirmTokenRequest;
};
export declare const ConfirmTokenResponse: {
    encode(_: ConfirmTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmTokenResponse;
    fromJSON(_: any): ConfirmTokenResponse;
    toJSON(_: ConfirmTokenResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ConfirmTokenResponse;
};
export declare const ConfirmTransferKeyRequest: {
    encode(message: ConfirmTransferKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmTransferKeyRequest;
    fromJSON(object: any): ConfirmTransferKeyRequest;
    toJSON(message: ConfirmTransferKeyRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        txId?: Uint8Array | undefined;
        transferTypeDeprecated?: TransferKeyType | undefined;
        keyIdDeprecated?: string | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        txId?: Uint8Array | undefined;
        transferTypeDeprecated?: TransferKeyType | undefined;
        keyIdDeprecated?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof ConfirmTransferKeyRequest>, never>>(object: I): ConfirmTransferKeyRequest;
};
export declare const ConfirmTransferKeyResponse: {
    encode(_: ConfirmTransferKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ConfirmTransferKeyResponse;
    fromJSON(_: any): ConfirmTransferKeyResponse;
    toJSON(_: ConfirmTransferKeyResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ConfirmTransferKeyResponse;
};
export declare const LinkRequest: {
    encode(message: LinkRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): LinkRequest;
    fromJSON(object: any): LinkRequest;
    toJSON(message: LinkRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        recipientAddr?: string | undefined;
        asset?: string | undefined;
        recipientChain?: string | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        recipientAddr?: string | undefined;
        asset?: string | undefined;
        recipientChain?: string | undefined;
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
export declare const CreateBurnTokensRequest: {
    encode(message: CreateBurnTokensRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBurnTokensRequest;
    fromJSON(object: any): CreateBurnTokensRequest;
    toJSON(message: CreateBurnTokensRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof CreateBurnTokensRequest>, never>>(object: I): CreateBurnTokensRequest;
};
export declare const CreateBurnTokensResponse: {
    encode(_: CreateBurnTokensResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateBurnTokensResponse;
    fromJSON(_: any): CreateBurnTokensResponse;
    toJSON(_: CreateBurnTokensResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): CreateBurnTokensResponse;
};
export declare const CreateDeployTokenRequest: {
    encode(message: CreateDeployTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDeployTokenRequest;
    fromJSON(object: any): CreateDeployTokenRequest;
    toJSON(message: CreateDeployTokenRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        asset?: {
            chain?: string | undefined;
            name?: string | undefined;
        } | undefined;
        tokenDetails?: {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Uint8Array | undefined;
        } | undefined;
        minAmountDeprecated?: Uint8Array | undefined;
        address?: Uint8Array | undefined;
        dailyMintLimit?: string | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        asset?: ({
            chain?: string | undefined;
            name?: string | undefined;
        } & {
            chain?: string | undefined;
            name?: string | undefined;
        } & Record<Exclude<keyof I["asset"], keyof Asset>, never>) | undefined;
        tokenDetails?: ({
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Uint8Array | undefined;
        } & {
            tokenName?: string | undefined;
            symbol?: string | undefined;
            decimals?: number | undefined;
            capacity?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["tokenDetails"], keyof TokenDetails>, never>) | undefined;
        minAmountDeprecated?: Uint8Array | undefined;
        address?: Uint8Array | undefined;
        dailyMintLimit?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof CreateDeployTokenRequest>, never>>(object: I): CreateDeployTokenRequest;
};
export declare const CreateDeployTokenResponse: {
    encode(_: CreateDeployTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateDeployTokenResponse;
    fromJSON(_: any): CreateDeployTokenResponse;
    toJSON(_: CreateDeployTokenResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): CreateDeployTokenResponse;
};
export declare const CreatePendingTransfersRequest: {
    encode(message: CreatePendingTransfersRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePendingTransfersRequest;
    fromJSON(object: any): CreatePendingTransfersRequest;
    toJSON(message: CreatePendingTransfersRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof CreatePendingTransfersRequest>, never>>(object: I): CreatePendingTransfersRequest;
};
export declare const CreatePendingTransfersResponse: {
    encode(_: CreatePendingTransfersResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreatePendingTransfersResponse;
    fromJSON(_: any): CreatePendingTransfersResponse;
    toJSON(_: CreatePendingTransfersResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): CreatePendingTransfersResponse;
};
export declare const CreateTransferOwnershipRequest: {
    encode(message: CreateTransferOwnershipRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferOwnershipRequest;
    fromJSON(object: any): CreateTransferOwnershipRequest;
    toJSON(message: CreateTransferOwnershipRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof CreateTransferOwnershipRequest>, never>>(object: I): CreateTransferOwnershipRequest;
};
export declare const CreateTransferOwnershipResponse: {
    encode(_: CreateTransferOwnershipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferOwnershipResponse;
    fromJSON(_: any): CreateTransferOwnershipResponse;
    toJSON(_: CreateTransferOwnershipResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): CreateTransferOwnershipResponse;
};
export declare const CreateTransferOperatorshipRequest: {
    encode(message: CreateTransferOperatorshipRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferOperatorshipRequest;
    fromJSON(object: any): CreateTransferOperatorshipRequest;
    toJSON(message: CreateTransferOperatorshipRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof CreateTransferOperatorshipRequest>, never>>(object: I): CreateTransferOperatorshipRequest;
};
export declare const CreateTransferOperatorshipResponse: {
    encode(_: CreateTransferOperatorshipResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): CreateTransferOperatorshipResponse;
    fromJSON(_: any): CreateTransferOperatorshipResponse;
    toJSON(_: CreateTransferOperatorshipResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): CreateTransferOperatorshipResponse;
};
export declare const SignCommandsRequest: {
    encode(message: SignCommandsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignCommandsRequest;
    fromJSON(object: any): SignCommandsRequest;
    toJSON(message: SignCommandsRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof SignCommandsRequest>, never>>(object: I): SignCommandsRequest;
};
export declare const SignCommandsResponse: {
    encode(message: SignCommandsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SignCommandsResponse;
    fromJSON(object: any): SignCommandsResponse;
    toJSON(message: SignCommandsResponse): unknown;
    fromPartial<I extends {
        batchedCommandsId?: Uint8Array | undefined;
        commandCount?: number | undefined;
    } & {
        batchedCommandsId?: Uint8Array | undefined;
        commandCount?: number | undefined;
    } & Record<Exclude<keyof I, keyof SignCommandsResponse>, never>>(object: I): SignCommandsResponse;
};
export declare const AddChainRequest: {
    encode(message: AddChainRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddChainRequest;
    fromJSON(object: any): AddChainRequest;
    toJSON(message: AddChainRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        name?: string | undefined;
        nativeAssetDeprecated?: string | undefined;
        keyType?: KeyType | undefined;
        params?: Uint8Array | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        name?: string | undefined;
        nativeAssetDeprecated?: string | undefined;
        keyType?: KeyType | undefined;
        params?: Uint8Array | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof AddChainRequest>, never>>(object: I): AddChainRequest;
};
export declare const AddChainResponse: {
    encode(_: AddChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): AddChainResponse;
    fromJSON(_: any): AddChainResponse;
    toJSON(_: AddChainResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): AddChainResponse;
};
export declare const RetryFailedEventRequest: {
    encode(message: RetryFailedEventRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetryFailedEventRequest;
    fromJSON(object: any): RetryFailedEventRequest;
    toJSON(message: RetryFailedEventRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        eventId?: string | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        eventId?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof RetryFailedEventRequest>, never>>(object: I): RetryFailedEventRequest;
};
export declare const RetryFailedEventResponse: {
    encode(_: RetryFailedEventResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RetryFailedEventResponse;
    fromJSON(_: any): RetryFailedEventResponse;
    toJSON(_: RetryFailedEventResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RetryFailedEventResponse;
};
export declare const UpdateParamsRequest: {
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        params?: {
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Uint8Array | undefined;
            burnable?: Uint8Array | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                name?: string | undefined;
                id?: Uint8Array | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        authority?: string | undefined;
        params?: ({
            chain?: string | undefined;
            confirmationHeight?: string | number | Long.Long | undefined;
            network?: string | undefined;
            tokenCode?: Uint8Array | undefined;
            burnable?: Uint8Array | undefined;
            revoteLockingPeriod?: string | number | Long.Long | undefined;
            networks?: {
                name?: string | undefined;
                id?: Uint8Array | undefined;
            }[] | undefined;
            votingThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            minVoterCount?: string | number | Long.Long | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | Long.Long | undefined;
            endBlockerLimit?: string | number | Long.Long | undefined;
            transferLimit?: string | number | Long.Long | undefined;
        } & {
            chain?: string | undefined;
            confirmationHeight?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["confirmationHeight"], keyof Long.Long>, never>) | undefined;
            network?: string | undefined;
            tokenCode?: Uint8Array | undefined;
            burnable?: Uint8Array | undefined;
            revoteLockingPeriod?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["revoteLockingPeriod"], keyof Long.Long>, never>) | undefined;
            networks?: ({
                name?: string | undefined;
                id?: Uint8Array | undefined;
            }[] & ({
                name?: string | undefined;
                id?: Uint8Array | undefined;
            } & {
                name?: string | undefined;
                id?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["params"]["networks"][number], keyof import("../../../axelar/evm/v1beta1/types").NetworkInfo>, never>)[] & Record<Exclude<keyof I["params"]["networks"], keyof {
                name?: string | undefined;
                id?: Uint8Array | undefined;
            }[]>, never>) | undefined;
            votingThreshold?: ({
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
                } & Record<Exclude<keyof I["params"]["votingThreshold"]["numerator"], keyof Long.Long>, never>) | undefined;
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
                } & Record<Exclude<keyof I["params"]["votingThreshold"]["denominator"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["votingThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
            minVoterCount?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["minVoterCount"], keyof Long.Long>, never>) | undefined;
            commandsGasLimit?: number | undefined;
            votingGracePeriod?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["votingGracePeriod"], keyof Long.Long>, never>) | undefined;
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
