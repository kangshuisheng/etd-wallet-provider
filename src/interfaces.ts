export interface EtdProvider {
  send(
    method: RpcMethods,
    params?: ParamsOfSendTransaction
  ): Promise<RpcResponse>;
  call(params: ParamsOfContract): Promise<RpcResponse>;
  callContract(params: ParamsOfContract): Promise<RpcResponse>;
  depolyContract(params: ContractParamsOfDepoly): Promise<RpcResponse>;
}

export enum RpcMethods {
  etd_accounts = 'etd_accounts',
  etd_chainId = 'etd_chainId',
  etd_balance = 'etd_balance',
  etd_sendTransaction = 'etd_sendTransaction',
  etd_blockNumber = 'etd_blockNumber',
  etd_gasPrice = 'etd_gasPrice',
}

export interface RpcResponse {
  jsonrpc: string;
  id: number;
  result: any;
}

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
