import { HttpServer } from 'no6-server'
import LoadAppConfig from '@/AppConfig'

(async function () {
  await LoadAppConfig()

  const { ServerConfig } = await import(`@/env.${HttpServer.env}`)
  await HttpServer.load(ServerConfig)

  const { Startup } = await import('@service/index')
  await Startup.startup()
})().catch(err => {
  err.exit = true
  HttpServer.handleError(err)
})
