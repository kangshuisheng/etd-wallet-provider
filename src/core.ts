import { RpcMethods, RpcResponse } from "./rpcMethods";

export interface ParamsOfContract {
  contractAddress: string;
  contract: string;
  func: string;
  params: any[];
}

export interface ParamsOfSendTransaction {
  to: string;
  value: string;
  gasPrice?: string;
  maxGas?: string;
  data?: string;
}

export interface EtdProvider {
  send(method: RpcMethods, params: ParamsOfSendTransaction): Promise<RpcResponse>;
  call(params: ParamsOfContract): Promise<RpcResponse>;
  callContract(params: ParamsOfContract): Promise<RpcResponse>;
  depolyContract(params: string): Promise<RpcResponse>;
}

export const etdProvider: EtdProvider =
  (<any>window).etdProvider || (<any>globalThis).etdProvider;
