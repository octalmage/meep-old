import { StdFee } from "@cosmjs/launchpad";
import { OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateThread } from "./types/meep/tx";
import { MsgDeletePost } from "./types/meep/tx";
import { MsgUpdateUsername } from "./types/meep/tx";
import { MsgCreateTip } from "./types/meep/tx";
import { MsgCreatePost } from "./types/meep/tx";
import { MsgUpdateThread } from "./types/meep/tx";
import { MsgUpdatePost } from "./types/meep/tx";
import { MsgCreateUsername } from "./types/meep/tx";
import { MsgDeleteThread } from "./types/meep/tx";
import { MsgUpdateTip } from "./types/meep/tx";
import { MsgDeleteTip } from "./types/meep/tx";
import { MsgDeleteUsername } from "./types/meep/tx";
interface TxClientOptions {
    addr: string;
}
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
declare const txClient: (wallet: OfflineSigner, { addr: addr }?: TxClientOptions) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").BroadcastTxResponse>;
    msgCreateThread: (data: MsgCreateThread) => EncodeObject;
    msgDeletePost: (data: MsgDeletePost) => EncodeObject;
    msgUpdateUsername: (data: MsgUpdateUsername) => EncodeObject;
    msgCreateTip: (data: MsgCreateTip) => EncodeObject;
    msgCreatePost: (data: MsgCreatePost) => EncodeObject;
    msgUpdateThread: (data: MsgUpdateThread) => EncodeObject;
    msgUpdatePost: (data: MsgUpdatePost) => EncodeObject;
    msgCreateUsername: (data: MsgCreateUsername) => EncodeObject;
    msgDeleteThread: (data: MsgDeleteThread) => EncodeObject;
    msgUpdateTip: (data: MsgUpdateTip) => EncodeObject;
    msgDeleteTip: (data: MsgDeleteTip) => EncodeObject;
    msgDeleteUsername: (data: MsgDeleteUsername) => EncodeObject;
}>;
interface QueryClientOptions {
    addr: string;
}
declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Promise<Api<unknown>>;
export { txClient, queryClient, };
