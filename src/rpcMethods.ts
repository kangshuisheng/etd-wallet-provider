export enum RpcMethod {
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