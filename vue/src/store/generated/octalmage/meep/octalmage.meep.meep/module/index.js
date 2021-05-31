// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateThread } from "./types/meep/tx";
import { MsgDeleteUsername } from "./types/meep/tx";
import { MsgCreatePost } from "./types/meep/tx";
import { MsgUpdatePost } from "./types/meep/tx";
import { MsgDeleteThread } from "./types/meep/tx";
import { MsgDeletePost } from "./types/meep/tx";
import { MsgCreateUsername } from "./types/meep/tx";
import { MsgUpdateThread } from "./types/meep/tx";
import { MsgUpdateUsername } from "./types/meep/tx";
const types = [
    ["/octalmage.meep.meep.MsgCreateThread", MsgCreateThread],
    ["/octalmage.meep.meep.MsgDeleteUsername", MsgDeleteUsername],
    ["/octalmage.meep.meep.MsgCreatePost", MsgCreatePost],
    ["/octalmage.meep.meep.MsgUpdatePost", MsgUpdatePost],
    ["/octalmage.meep.meep.MsgDeleteThread", MsgDeleteThread],
    ["/octalmage.meep.meep.MsgDeletePost", MsgDeletePost],
    ["/octalmage.meep.meep.MsgCreateUsername", MsgCreateUsername],
    ["/octalmage.meep.meep.MsgUpdateThread", MsgUpdateThread],
    ["/octalmage.meep.meep.MsgUpdateUsername", MsgUpdateUsername],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgCreateThread: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgCreateThread", value: data }),
        msgDeleteUsername: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgDeleteUsername", value: data }),
        msgCreatePost: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgCreatePost", value: data }),
        msgUpdatePost: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgUpdatePost", value: data }),
        msgDeleteThread: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgDeleteThread", value: data }),
        msgDeletePost: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgDeletePost", value: data }),
        msgCreateUsername: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgCreateUsername", value: data }),
        msgUpdateThread: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgUpdateThread", value: data }),
        msgUpdateUsername: (data) => ({ typeUrl: "/octalmage.meep.meep.MsgUpdateUsername", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
