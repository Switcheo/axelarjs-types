import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { KeyInfo } from "../../../axelar/tss/v1beta1/types";
import { KeyRole, SigKeyPair } from "../../../axelar/tss/exported/v1beta1/types";
import { TrafficOut, MessageOut_KeygenResult, MessageOut_SignResult } from "../../../axelar/tss/tofnd/v1beta1/tofnd";
import { PollKey } from "../../../axelar/vote/exported/v1beta1/types";
import { Params } from "../../../axelar/tss/v1beta1/params";
export declare const protobufPackage = "axelar.tss.v1beta1";
/** StartKeygenRequest indicate the start of keygen */
export interface StartKeygenRequest {
    sender: string;
    keyInfo?: KeyInfo;
}
export interface StartKeygenResponse {
}
export interface RotateKeyRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    chain: string;
    keyRole: KeyRole;
    keyId: string;
    sender: string;
}
export interface RotateKeyResponse {
}
/** ProcessKeygenTrafficRequest protocol message */
export interface ProcessKeygenTrafficRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    sessionId: string;
    payload?: TrafficOut;
    sender: string;
}
export interface ProcessKeygenTrafficResponse {
}
/** ProcessSignTrafficRequest protocol message */
export interface ProcessSignTrafficRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    sessionId: string;
    payload?: TrafficOut;
    sender: string;
}
export interface ProcessSignTrafficResponse {
}
/** VotePubKeyRequest represents the message to vote on a public key */
export interface VotePubKeyRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    pollKey?: PollKey;
    result?: MessageOut_KeygenResult;
    sender: string;
}
export interface VotePubKeyResponse {
    log: string;
}
/** VoteSigRequest represents a message to vote for a signature */
export interface VoteSigRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    pollKey?: PollKey;
    result?: MessageOut_SignResult;
    sender: string;
}
export interface VoteSigResponse {
    log: string;
}
export interface HeartBeatRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    /**
     * Deprecated: this field will be removed in the next release
     *
     * @deprecated
     */
    keyIds: string[];
    sender: string;
}
export interface HeartBeatResponse {
}
export interface RegisterExternalKeysRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    chain: string;
    externalKeys: RegisterExternalKeysRequest_ExternalKey[];
    sender: string;
}
export interface RegisterExternalKeysRequest_ExternalKey {
    id: string;
    pubKey: Uint8Array;
}
export interface RegisterExternalKeysResponse {
}
export interface SubmitMultisigPubKeysRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    keyId: string;
    sigKeyPairs: SigKeyPair[];
    sender: string;
}
export interface SubmitMultisigPubKeysResponse {
}
export interface SubmitMultisigSignaturesRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    sigId: string;
    signatures: Uint8Array[];
    sender: string;
}
export interface SubmitMultisigSignaturesResponse {
}
export interface UpdateParamsRequest {
    authority: string;
    params?: Params;
}
export interface UpdateParamsResponse {
}
export declare const StartKeygenRequest: {
    encode(message: StartKeygenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartKeygenRequest;
    fromJSON(object: any): StartKeygenRequest;
    toJSON(message: StartKeygenRequest): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        keyInfo?: {
            keyId?: string | undefined;
            keyRole?: KeyRole | undefined;
            keyType?: import("../../../axelar/tss/exported/v1beta1/types").KeyType | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        keyInfo?: ({
            keyId?: string | undefined;
            keyRole?: KeyRole | undefined;
            keyType?: import("../../../axelar/tss/exported/v1beta1/types").KeyType | undefined;
        } & {
            keyId?: string | undefined;
            keyRole?: KeyRole | undefined;
            keyType?: import("../../../axelar/tss/exported/v1beta1/types").KeyType | undefined;
        } & Record<Exclude<keyof I["keyInfo"], keyof KeyInfo>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof StartKeygenRequest>, never>>(object: I): StartKeygenRequest;
};
export declare const StartKeygenResponse: {
    encode(_: StartKeygenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): StartKeygenResponse;
    fromJSON(_: any): StartKeygenResponse;
    toJSON(_: StartKeygenResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): StartKeygenResponse;
};
export declare const RotateKeyRequest: {
    encode(message: RotateKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RotateKeyRequest;
    fromJSON(object: any): RotateKeyRequest;
    toJSON(message: RotateKeyRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        keyRole?: KeyRole | undefined;
        keyId?: string | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof RotateKeyRequest>, never>>(object: I): RotateKeyRequest;
};
export declare const RotateKeyResponse: {
    encode(_: RotateKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RotateKeyResponse;
    fromJSON(_: any): RotateKeyResponse;
    toJSON(_: RotateKeyResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RotateKeyResponse;
};
export declare const ProcessKeygenTrafficRequest: {
    encode(message: ProcessKeygenTrafficRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessKeygenTrafficRequest;
    fromJSON(object: any): ProcessKeygenTrafficRequest;
    toJSON(message: ProcessKeygenTrafficRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        sessionId?: string | undefined;
        payload?: {
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        sessionId?: string | undefined;
        payload?: ({
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } & {
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } & Record<Exclude<keyof I["payload"], keyof TrafficOut>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof ProcessKeygenTrafficRequest>, never>>(object: I): ProcessKeygenTrafficRequest;
};
export declare const ProcessKeygenTrafficResponse: {
    encode(_: ProcessKeygenTrafficResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessKeygenTrafficResponse;
    fromJSON(_: any): ProcessKeygenTrafficResponse;
    toJSON(_: ProcessKeygenTrafficResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ProcessKeygenTrafficResponse;
};
export declare const ProcessSignTrafficRequest: {
    encode(message: ProcessSignTrafficRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessSignTrafficRequest;
    fromJSON(object: any): ProcessSignTrafficRequest;
    toJSON(message: ProcessSignTrafficRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        sessionId?: string | undefined;
        payload?: {
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        sessionId?: string | undefined;
        payload?: ({
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } & {
            toPartyUid?: string | undefined;
            payload?: Uint8Array | undefined;
            isBroadcast?: boolean | undefined;
        } & Record<Exclude<keyof I["payload"], keyof TrafficOut>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof ProcessSignTrafficRequest>, never>>(object: I): ProcessSignTrafficRequest;
};
export declare const ProcessSignTrafficResponse: {
    encode(_: ProcessSignTrafficResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): ProcessSignTrafficResponse;
    fromJSON(_: any): ProcessSignTrafficResponse;
    toJSON(_: ProcessSignTrafficResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): ProcessSignTrafficResponse;
};
export declare const VotePubKeyRequest: {
    encode(message: VotePubKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VotePubKeyRequest;
    fromJSON(object: any): VotePubKeyRequest;
    toJSON(message: VotePubKeyRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        pollKey?: {
            module?: string | undefined;
            id?: string | undefined;
        } | undefined;
        result?: {
            data?: {
                pubKey?: Uint8Array | undefined;
                groupRecoverInfo?: Uint8Array | undefined;
                privateRecoverInfo?: Uint8Array | undefined;
            } | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        pollKey?: ({
            module?: string | undefined;
            id?: string | undefined;
        } & {
            module?: string | undefined;
            id?: string | undefined;
        } & Record<Exclude<keyof I["pollKey"], keyof PollKey>, never>) | undefined;
        result?: ({
            data?: {
                pubKey?: Uint8Array | undefined;
                groupRecoverInfo?: Uint8Array | undefined;
                privateRecoverInfo?: Uint8Array | undefined;
            } | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            data?: ({
                pubKey?: Uint8Array | undefined;
                groupRecoverInfo?: Uint8Array | undefined;
                privateRecoverInfo?: Uint8Array | undefined;
            } & {
                pubKey?: Uint8Array | undefined;
                groupRecoverInfo?: Uint8Array | undefined;
                privateRecoverInfo?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["result"]["data"], keyof import("../../../axelar/tss/tofnd/v1beta1/tofnd").KeygenOutput>, never>) | undefined;
            criminals?: ({
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } & {
                criminals?: ({
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] & ({
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & Record<Exclude<keyof I["result"]["criminals"]["criminals"][number], keyof import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal>, never>)[] & Record<Exclude<keyof I["result"]["criminals"]["criminals"], keyof {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["result"]["criminals"], "criminals">, never>) | undefined;
        } & Record<Exclude<keyof I["result"], keyof MessageOut_KeygenResult>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof VotePubKeyRequest>, never>>(object: I): VotePubKeyRequest;
};
export declare const VotePubKeyResponse: {
    encode(message: VotePubKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VotePubKeyResponse;
    fromJSON(object: any): VotePubKeyResponse;
    toJSON(message: VotePubKeyResponse): unknown;
    fromPartial<I extends {
        log?: string | undefined;
    } & {
        log?: string | undefined;
    } & Record<Exclude<keyof I, "log">, never>>(object: I): VotePubKeyResponse;
};
export declare const VoteSigRequest: {
    encode(message: VoteSigRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoteSigRequest;
    fromJSON(object: any): VoteSigRequest;
    toJSON(message: VoteSigRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        pollKey?: {
            module?: string | undefined;
            id?: string | undefined;
        } | undefined;
        result?: {
            signature?: Uint8Array | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        pollKey?: ({
            module?: string | undefined;
            id?: string | undefined;
        } & {
            module?: string | undefined;
            id?: string | undefined;
        } & Record<Exclude<keyof I["pollKey"], keyof PollKey>, never>) | undefined;
        result?: ({
            signature?: Uint8Array | undefined;
            criminals?: {
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            signature?: Uint8Array | undefined;
            criminals?: ({
                criminals?: {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] | undefined;
            } & {
                criminals?: ({
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[] & ({
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                } & Record<Exclude<keyof I["result"]["criminals"]["criminals"][number], keyof import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal>, never>)[] & Record<Exclude<keyof I["result"]["criminals"]["criminals"], keyof {
                    partyUid?: string | undefined;
                    crimeType?: import("../../../axelar/tss/tofnd/v1beta1/tofnd").MessageOut_CriminalList_Criminal_CrimeType | undefined;
                }[]>, never>) | undefined;
            } & Record<Exclude<keyof I["result"]["criminals"], "criminals">, never>) | undefined;
        } & Record<Exclude<keyof I["result"], keyof MessageOut_SignResult>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof VoteSigRequest>, never>>(object: I): VoteSigRequest;
};
export declare const VoteSigResponse: {
    encode(message: VoteSigResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): VoteSigResponse;
    fromJSON(object: any): VoteSigResponse;
    toJSON(message: VoteSigResponse): unknown;
    fromPartial<I extends {
        log?: string | undefined;
    } & {
        log?: string | undefined;
    } & Record<Exclude<keyof I, "log">, never>>(object: I): VoteSigResponse;
};
export declare const HeartBeatRequest: {
    encode(message: HeartBeatRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HeartBeatRequest;
    fromJSON(object: any): HeartBeatRequest;
    toJSON(message: HeartBeatRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        keyIds?: string[] | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        keyIds?: (string[] & string[] & Record<Exclude<keyof I["keyIds"], keyof string[]>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof HeartBeatRequest>, never>>(object: I): HeartBeatRequest;
};
export declare const HeartBeatResponse: {
    encode(_: HeartBeatResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): HeartBeatResponse;
    fromJSON(_: any): HeartBeatResponse;
    toJSON(_: HeartBeatResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): HeartBeatResponse;
};
export declare const RegisterExternalKeysRequest: {
    encode(message: RegisterExternalKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterExternalKeysRequest;
    fromJSON(object: any): RegisterExternalKeysRequest;
    toJSON(message: RegisterExternalKeysRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        externalKeys?: {
            id?: string | undefined;
            pubKey?: Uint8Array | undefined;
        }[] | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        chain?: string | undefined;
        externalKeys?: ({
            id?: string | undefined;
            pubKey?: Uint8Array | undefined;
        }[] & ({
            id?: string | undefined;
            pubKey?: Uint8Array | undefined;
        } & {
            id?: string | undefined;
            pubKey?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["externalKeys"][number], keyof RegisterExternalKeysRequest_ExternalKey>, never>)[] & Record<Exclude<keyof I["externalKeys"], keyof {
            id?: string | undefined;
            pubKey?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof RegisterExternalKeysRequest>, never>>(object: I): RegisterExternalKeysRequest;
};
export declare const RegisterExternalKeysRequest_ExternalKey: {
    encode(message: RegisterExternalKeysRequest_ExternalKey, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterExternalKeysRequest_ExternalKey;
    fromJSON(object: any): RegisterExternalKeysRequest_ExternalKey;
    toJSON(message: RegisterExternalKeysRequest_ExternalKey): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        pubKey?: Uint8Array | undefined;
    } & {
        id?: string | undefined;
        pubKey?: Uint8Array | undefined;
    } & Record<Exclude<keyof I, keyof RegisterExternalKeysRequest_ExternalKey>, never>>(object: I): RegisterExternalKeysRequest_ExternalKey;
};
export declare const RegisterExternalKeysResponse: {
    encode(_: RegisterExternalKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterExternalKeysResponse;
    fromJSON(_: any): RegisterExternalKeysResponse;
    toJSON(_: RegisterExternalKeysResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RegisterExternalKeysResponse;
};
export declare const SubmitMultisigPubKeysRequest: {
    encode(message: SubmitMultisigPubKeysRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigPubKeysRequest;
    fromJSON(object: any): SubmitMultisigPubKeysRequest;
    toJSON(message: SubmitMultisigPubKeysRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        keyId?: string | undefined;
        sigKeyPairs?: {
            pubKey?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        keyId?: string | undefined;
        sigKeyPairs?: ({
            pubKey?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            pubKey?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & {
            pubKey?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["sigKeyPairs"][number], keyof SigKeyPair>, never>)[] & Record<Exclude<keyof I["sigKeyPairs"], keyof {
            pubKey?: Uint8Array | undefined;
            signature?: Uint8Array | undefined;
        }[]>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof SubmitMultisigPubKeysRequest>, never>>(object: I): SubmitMultisigPubKeysRequest;
};
export declare const SubmitMultisigPubKeysResponse: {
    encode(_: SubmitMultisigPubKeysResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigPubKeysResponse;
    fromJSON(_: any): SubmitMultisigPubKeysResponse;
    toJSON(_: SubmitMultisigPubKeysResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): SubmitMultisigPubKeysResponse;
};
export declare const SubmitMultisigSignaturesRequest: {
    encode(message: SubmitMultisigSignaturesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigSignaturesRequest;
    fromJSON(object: any): SubmitMultisigSignaturesRequest;
    toJSON(message: SubmitMultisigSignaturesRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        sigId?: string | undefined;
        signatures?: Uint8Array[] | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        sigId?: string | undefined;
        signatures?: (Uint8Array[] & Uint8Array[] & Record<Exclude<keyof I["signatures"], keyof Uint8Array[]>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof SubmitMultisigSignaturesRequest>, never>>(object: I): SubmitMultisigSignaturesRequest;
};
export declare const SubmitMultisigSignaturesResponse: {
    encode(_: SubmitMultisigSignaturesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): SubmitMultisigSignaturesResponse;
    fromJSON(_: any): SubmitMultisigSignaturesResponse;
    toJSON(_: SubmitMultisigSignaturesResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): SubmitMultisigSignaturesResponse;
};
export declare const UpdateParamsRequest: {
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        params?: {
            keyRequirements?: {
                keyRole?: KeyRole | undefined;
                keyType?: import("../../../axelar/tss/exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../../../axelar/tss/exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            }[] | undefined;
            suspendDurationInBlocks?: string | number | Long.Long | undefined;
            heartbeatPeriodInBlocks?: string | number | Long.Long | undefined;
            maxMissedBlocksPerWindow?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            unbondingLockingKeyRotationCount?: string | number | Long.Long | undefined;
            externalMultisigThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            maxSignQueueSize?: string | number | Long.Long | undefined;
            maxSimultaneousSignShares?: string | number | Long.Long | undefined;
            tssSignedBlocksWindow?: string | number | Long.Long | undefined;
        } | undefined;
    } & {
        authority?: string | undefined;
        params?: ({
            keyRequirements?: {
                keyRole?: KeyRole | undefined;
                keyType?: import("../../../axelar/tss/exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../../../axelar/tss/exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            }[] | undefined;
            suspendDurationInBlocks?: string | number | Long.Long | undefined;
            heartbeatPeriodInBlocks?: string | number | Long.Long | undefined;
            maxMissedBlocksPerWindow?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            unbondingLockingKeyRotationCount?: string | number | Long.Long | undefined;
            externalMultisigThreshold?: {
                numerator?: string | number | Long.Long | undefined;
                denominator?: string | number | Long.Long | undefined;
            } | undefined;
            maxSignQueueSize?: string | number | Long.Long | undefined;
            maxSimultaneousSignShares?: string | number | Long.Long | undefined;
            tssSignedBlocksWindow?: string | number | Long.Long | undefined;
        } & {
            keyRequirements?: ({
                keyRole?: KeyRole | undefined;
                keyType?: import("../../../axelar/tss/exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../../../axelar/tss/exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            }[] & ({
                keyRole?: KeyRole | undefined;
                keyType?: import("../../../axelar/tss/exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../../../axelar/tss/exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            } & {
                keyRole?: KeyRole | undefined;
                keyType?: import("../../../axelar/tss/exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: ({
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
                    } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["minKeygenThreshold"]["numerator"], keyof Long.Long>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["minKeygenThreshold"]["denominator"], keyof Long.Long>, never>) | undefined;
                } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["minKeygenThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
                safetyThreshold?: ({
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
                    } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["safetyThreshold"]["numerator"], keyof Long.Long>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["safetyThreshold"]["denominator"], keyof Long.Long>, never>) | undefined;
                } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["safetyThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
                keyShareDistributionPolicy?: import("../../../axelar/tss/exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["maxTotalShareCount"], keyof Long.Long>, never>) | undefined;
                minTotalShareCount?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["minTotalShareCount"], keyof Long.Long>, never>) | undefined;
                keygenVotingThreshold?: ({
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
                    } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["keygenVotingThreshold"]["numerator"], keyof Long.Long>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["keygenVotingThreshold"]["denominator"], keyof Long.Long>, never>) | undefined;
                } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["keygenVotingThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
                signVotingThreshold?: ({
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
                    } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["signVotingThreshold"]["numerator"], keyof Long.Long>, never>) | undefined;
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
                    } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["signVotingThreshold"]["denominator"], keyof Long.Long>, never>) | undefined;
                } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["signVotingThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
                keygenTimeout?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["keygenTimeout"], keyof Long.Long>, never>) | undefined;
                signTimeout?: string | number | (Long.Long & {
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
                } & Record<Exclude<keyof I["params"]["keyRequirements"][number]["signTimeout"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["keyRequirements"][number], keyof import("../../../axelar/tss/exported/v1beta1/types").KeyRequirement>, never>)[] & Record<Exclude<keyof I["params"]["keyRequirements"], keyof {
                keyRole?: KeyRole | undefined;
                keyType?: import("../../../axelar/tss/exported/v1beta1/types").KeyType | undefined;
                minKeygenThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                safetyThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keyShareDistributionPolicy?: import("../../../axelar/tss/exported/v1beta1/types").KeyShareDistributionPolicy | undefined;
                maxTotalShareCount?: string | number | Long.Long | undefined;
                minTotalShareCount?: string | number | Long.Long | undefined;
                keygenVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                signVotingThreshold?: {
                    numerator?: string | number | Long.Long | undefined;
                    denominator?: string | number | Long.Long | undefined;
                } | undefined;
                keygenTimeout?: string | number | Long.Long | undefined;
                signTimeout?: string | number | Long.Long | undefined;
            }[]>, never>) | undefined;
            suspendDurationInBlocks?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["suspendDurationInBlocks"], keyof Long.Long>, never>) | undefined;
            heartbeatPeriodInBlocks?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["heartbeatPeriodInBlocks"], keyof Long.Long>, never>) | undefined;
            maxMissedBlocksPerWindow?: ({
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
                } & Record<Exclude<keyof I["params"]["maxMissedBlocksPerWindow"]["numerator"], keyof Long.Long>, never>) | undefined;
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
                } & Record<Exclude<keyof I["params"]["maxMissedBlocksPerWindow"]["denominator"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["maxMissedBlocksPerWindow"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
            unbondingLockingKeyRotationCount?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["unbondingLockingKeyRotationCount"], keyof Long.Long>, never>) | undefined;
            externalMultisigThreshold?: ({
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
                } & Record<Exclude<keyof I["params"]["externalMultisigThreshold"]["numerator"], keyof Long.Long>, never>) | undefined;
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
                } & Record<Exclude<keyof I["params"]["externalMultisigThreshold"]["denominator"], keyof Long.Long>, never>) | undefined;
            } & Record<Exclude<keyof I["params"]["externalMultisigThreshold"], keyof import("../../utils/v1beta1/threshold").Threshold>, never>) | undefined;
            maxSignQueueSize?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["maxSignQueueSize"], keyof Long.Long>, never>) | undefined;
            maxSimultaneousSignShares?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["maxSimultaneousSignShares"], keyof Long.Long>, never>) | undefined;
            tssSignedBlocksWindow?: string | number | (Long.Long & {
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
            } & Record<Exclude<keyof I["params"]["tssSignedBlocksWindow"], keyof Long.Long>, never>) | undefined;
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
