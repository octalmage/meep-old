import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteUsername } from "./types/meep/tx";
import { MsgUpdateUsername } from "./types/meep/tx";
import { MsgCreateThread } from "./types/meep/tx";
import { MsgUpdateTip } from "./types/meep/tx";
import { MsgUpdateThread } from "./types/meep/tx";
import { MsgUpdatePost } from "./types/meep/tx";
import { MsgCreateTip } from "./types/meep/tx";
import { MsgCreatePost } from "./types/meep/tx";
import { MsgDeleteTip } from "./types/meep/tx";
import { MsgDeletePost } from "./types/meep/tx";
import { MsgCreateUsername } from "./types/meep/tx";
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
    msgDeleteUsername: (data: MsgDeleteUsername) => EncodeObject;
    msgUpdateUsername: (data: MsgUpdateUsername) => EncodeObject;
    msgCreateThread: (data: MsgCreateThread) => EncodeObject;
    msgUpdateTip: (data: MsgUpdateTip) => EncodeObject;
    msgUpdateThread: (data: MsgUpdateThread) => EncodeObject;
    msgUpdatePost: (data: MsgUpdatePost) => EncodeObject;
    msgCreateTip: (data: MsgCreateTip) => EncodeObject;
    msgCreatePost: (data: MsgCreatePost) => EncodeObject;
    msgDeleteTip: (data: MsgDeleteTip) => EncodeObject;
    msgDeletePost: (data: MsgDeletePost) => EncodeObject;
    msgCreateUsername: (data: MsgCreateUsername) => EncodeObject;
    msgDeleteThread: (data: MsgDeleteThread) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
