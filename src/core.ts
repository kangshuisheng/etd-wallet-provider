import {
  ContractParamsOfDepoly,
  ParamsOfContract,
  ParamsOfSendTransaction,
  RpcMethods,
  RpcResponse,
} from './rpcMethods';
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
