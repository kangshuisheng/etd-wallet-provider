import { RpcMethod } from './rpcMethods';

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
  send(method: RpcMethod, params: ParamsOfSendTransaction): Promise<any>;
  call(params: ParamsOfContract): Promise<any>;
  callContract(params: ParamsOfContract): Promise<any>;
  depolyContract(params: string): Promise<any>;
}

export function getEtdProvider(): EtdProvider {
  const provider = (<any>window).etdProvider || (<any>globalThis).etdProvider;
  return provider as EtdProvider;
}
