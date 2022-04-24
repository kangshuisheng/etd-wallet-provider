import { RpcMethods, RpcResponse } from './rpcMethods';

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

export interface ContractParamsOfDepoly {
  abi: string;
  byteCode: string;
}

export interface EtdProvider {
  send(
    method: RpcMethods,
    params?: ParamsOfSendTransaction
  ): Promise<RpcResponse>;
  call(params: ParamsOfContract): Promise<RpcResponse>;
  callContract(params: ParamsOfContract): Promise<RpcResponse>;
  depolyContract(params: ContractParamsOfDepoly): Promise<RpcResponse>;
}

export function getEtdProvider(): EtdProvider {
  const provider = (<any>window).etdProvider || (<any>globalThis).etdProvider;
  return provider as EtdProvider;
}
