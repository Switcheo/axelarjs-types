import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { LegacyAminoPubKey } from "../../../cosmos/crypto/multisig/keys";
import { Params } from "../../../axelar/permission/v1beta1/params";
export declare const protobufPackage = "axelar.permission.v1beta1";
export interface UpdateGovernanceKeyRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    governanceKey?: LegacyAminoPubKey;
    sender: string;
}
export interface UpdateGovernanceKeyResponse {
}
/** MsgRegisterController represents a message to register a controller account */
export interface RegisterControllerRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    controller: Uint8Array;
    sender: string;
}
export interface RegisterControllerResponse {
}
/** DeregisterController represents a message to deregister a controller account */
export interface DeregisterControllerRequest {
    /**
     * DEPRECATED: This field is deprecated but must remain to ensure backward
     * compatibility. Removing this field would break decoding of historical
     * transactions. DO NOT use in new code.
     *
     * @deprecated
     */
    senderDeprecated: Uint8Array;
    controller: Uint8Array;
    sender: string;
}
export interface DeregisterControllerResponse {
}
export interface UpdateParamsRequest {
    authority: string;
    params?: Params;
}
export interface UpdateParamsResponse {
}
export declare const UpdateGovernanceKeyRequest: {
    encode(message: UpdateGovernanceKeyRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGovernanceKeyRequest;
    fromJSON(object: any): UpdateGovernanceKeyRequest;
    toJSON(message: UpdateGovernanceKeyRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        governanceKey?: {
            threshold?: number | undefined;
            publicKeys?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        governanceKey?: ({
            threshold?: number | undefined;
            publicKeys?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] | undefined;
        } & {
            threshold?: number | undefined;
            publicKeys?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & Record<Exclude<keyof I["governanceKey"]["publicKeys"][number], keyof import("../../../google/protobuf/any").Any>, never>)[] & Record<Exclude<keyof I["governanceKey"]["publicKeys"], keyof {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["governanceKey"], keyof LegacyAminoPubKey>, never>) | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof UpdateGovernanceKeyRequest>, never>>(object: I): UpdateGovernanceKeyRequest;
};
export declare const UpdateGovernanceKeyResponse: {
    encode(_: UpdateGovernanceKeyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateGovernanceKeyResponse;
    fromJSON(_: any): UpdateGovernanceKeyResponse;
    toJSON(_: UpdateGovernanceKeyResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): UpdateGovernanceKeyResponse;
};
export declare const RegisterControllerRequest: {
    encode(message: RegisterControllerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterControllerRequest;
    fromJSON(object: any): RegisterControllerRequest;
    toJSON(message: RegisterControllerRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        controller?: Uint8Array | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        controller?: Uint8Array | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof RegisterControllerRequest>, never>>(object: I): RegisterControllerRequest;
};
export declare const RegisterControllerResponse: {
    encode(_: RegisterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): RegisterControllerResponse;
    fromJSON(_: any): RegisterControllerResponse;
    toJSON(_: RegisterControllerResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): RegisterControllerResponse;
};
export declare const DeregisterControllerRequest: {
    encode(message: DeregisterControllerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeregisterControllerRequest;
    fromJSON(object: any): DeregisterControllerRequest;
    toJSON(message: DeregisterControllerRequest): unknown;
    fromPartial<I extends {
        senderDeprecated?: Uint8Array | undefined;
        controller?: Uint8Array | undefined;
        sender?: string | undefined;
    } & {
        senderDeprecated?: Uint8Array | undefined;
        controller?: Uint8Array | undefined;
        sender?: string | undefined;
    } & Record<Exclude<keyof I, keyof DeregisterControllerRequest>, never>>(object: I): DeregisterControllerRequest;
};
export declare const DeregisterControllerResponse: {
    encode(_: DeregisterControllerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): DeregisterControllerResponse;
    fromJSON(_: any): DeregisterControllerResponse;
    toJSON(_: DeregisterControllerResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): DeregisterControllerResponse;
};
export declare const UpdateParamsRequest: {
    encode(message: UpdateParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number | undefined): UpdateParamsRequest;
    fromJSON(object: any): UpdateParamsRequest;
    toJSON(message: UpdateParamsRequest): unknown;
    fromPartial<I extends {
        authority?: string | undefined;
        params?: {} | undefined;
    } & {
        authority?: string | undefined;
        params?: ({} & {} & Record<Exclude<keyof I["params"], never>, never>) | undefined;
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
