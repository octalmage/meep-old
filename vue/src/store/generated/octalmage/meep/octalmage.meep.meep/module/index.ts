// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreatePost } from "./types/meep/tx";
import { MsgUpdateThread } from "./types/meep/tx";
import { MsgDeleteThread } from "./types/meep/tx";
import { MsgUpdatePost } from "./types/meep/tx";
import { MsgDeletePost } from "./types/meep/tx";
import { MsgCreateThread } from "./types/meep/tx";


const types = [
  ["/octalmage.meep.meep.MsgCreatePost", MsgCreatePost],
  ["/octalmage.meep.meep.MsgUpdateThread", MsgUpdateThread],
  ["/octalmage.meep.meep.MsgDeleteThread", MsgDeleteThread],
  ["/octalmage.meep.meep.MsgUpdatePost", MsgUpdatePost],
  ["/octalmage.meep.meep.MsgDeletePost", MsgDeletePost],
  ["/octalmage.meep.meep.MsgCreateThread", MsgCreateThread],
  
];

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw new Error("wallet is required");

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee=defaultFee, memo=null }: SignAndBroadcastOptions) => memo?client.signAndBroadcast(address, msgs, fee,memo):client.signAndBroadcast(address, msgs, fee),
    msgCreatePost: (data: MsgCreatePost): EncodeObject => ({ typeUrl: "/octalmage.meep.meep.MsgCreatePost", value: data }),
    msgUpdateThread: (data: MsgUpdateThread): EncodeObject => ({ typeUrl: "/octalmage.meep.meep.MsgUpdateThread", value: data }),
    msgDeleteThread: (data: MsgDeleteThread): EncodeObject => ({ typeUrl: "/octalmage.meep.meep.MsgDeleteThread", value: data }),
    msgUpdatePost: (data: MsgUpdatePost): EncodeObject => ({ typeUrl: "/octalmage.meep.meep.MsgUpdatePost", value: data }),
    msgDeletePost: (data: MsgDeletePost): EncodeObject => ({ typeUrl: "/octalmage.meep.meep.MsgDeletePost", value: data }),
    msgCreateThread: (data: MsgCreateThread): EncodeObject => ({ typeUrl: "/octalmage.meep.meep.MsgCreateThread", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};