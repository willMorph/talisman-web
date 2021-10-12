import { ApiPromise, WsProvider } from '@polkadot/api'
import * as Comlink from 'comlink'

// async function initWorker() {
//   console.log('INIT WORKER!')
//   return true
// }

// Comlink.expose(initWorker)

ApiPromise.initInWorker = (
  endpoint?: string | string[] | undefined,
  autoConnectMs?: number | false | undefined,
  headers?: Record<string, string> | undefined
) => {
  console.log({ endpoint, autoConnectMs, headers })
  const apiPromise = ApiPromise.create({ provider: new WsProvider(endpoint, autoConnectMs, headers) })

  console.log('apiPromise in worker', apiPromise)

  //   return Comlink.proxy({ one: 'one' })
  return Comlink.proxy(apiPromise)
}

Comlink.expose(ApiPromise)

// const obj = {
//   initInWorker(
//     endpoint?: string | string[] | undefined,
//     autoConnectMs?: number | false | undefined,
//     headers?: Record<string, string> | undefined
//   ) {
//     console.log('initInWorker called', endpoint, autoConnectMs, headers)

//     // const apiPromise = ApiPromise.create({ provider: new WsProvider(endpoint, autoConnectMs, headers) })

//     // console.log('apiPromise in worker', apiPromise)

//     // return Comlink.proxy(apiPromise)
//   },
// }

// Comlink.expose(obj)
