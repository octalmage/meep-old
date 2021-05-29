// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgVerifyInvariant } from "./types/cosmos/crisis/v1beta1/tx";
const types = [
    ["/cosmos.crisis.v1beta1.MsgVerifyInvariant", MsgVerifyInvariant],
];
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://159.65.103.150:26657" }) => {
    if (!wallet)
        throw new Error("wallet is required");
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee = defaultFee, memo = null }) => memo ? client.signAndBroadcast(address, msgs, fee, memo) : client.signAndBroadcast(address, msgs, fee),
        msgVerifyInvariant: (data) => ({ typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://159.65.103.150:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
