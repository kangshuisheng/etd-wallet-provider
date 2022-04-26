import {
  ContractParamsOfDepoly,
  EtdProvider,
  ParamsOfContract,
  ParamsOfSendTransaction,
  RpcMethods,
} from './interfaces';

enum CoreMethods {
  etd_deployContract = 'etd_deployContract',
  etd_call = 'etd_call',
  etd_callContract = 'etd_callContract',
}

async function _depolyContract(params: ContractParamsOfDepoly) {
  return _sendToFlutter(CoreMethods.etd_deployContract, params);
}

async function _call(params: ParamsOfContract): Promise<any> {
  return _sendToFlutter(CoreMethods.etd_call, params);
}

async function _callContract(params: ParamsOfContract): Promise<any> {
  return _sendToFlutter(CoreMethods.etd_callContract, params);
}

async function _send(
  rpcMethod: RpcMethods,
  params?: ParamsOfSendTransaction
): Promise<any> {
  return _sendToFlutter(rpcMethod, params);
}

function _sendToFlutter(
  rpcMethod: string,
  params?: ParamsOfSendTransaction | ParamsOfContract | ContractParamsOfDepoly
) {
  return (<any>window || <any>globalThis).flutter_inappwebview.callHandler(rpcMethod, params);
}

export function getEtdProvider(): EtdProvider {
  return {
    send: _send,
    callContract: _callContract,
    call: _call,
    depolyContract: _depolyContract,
  };
}
