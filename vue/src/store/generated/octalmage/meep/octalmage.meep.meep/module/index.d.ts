import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdatePost } from "./types/meep/tx";
import { MsgDeletePost } from "./types/meep/tx";
import { MsgCreatePost } from "./types/meep/tx";
import { MsgCreateThread } from "./types/meep/tx";
import { MsgUpdateThread } from "./types/meep/tx";
import { MsgDeleteThread } from "./types/meep/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgUpdatePost: (data: MsgUpdatePost) => EncodeObject;
    msgDeletePost: (data: MsgDeletePost) => EncodeObject;
    msgCreatePost: (data: MsgCreatePost) => EncodeObject;
    msgCreateThread: (data: MsgCreateThread) => EncodeObject;
    msgUpdateThread: (data: MsgUpdateThread) => EncodeObject;
    msgDeleteThread: (data: MsgDeleteThread) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
