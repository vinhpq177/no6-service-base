import * as _ from 'lodash'
import { setLogger, LOGGER_DEV_CONFIG } from 'no6-log'

setLogger(undefined, _.merge(
  {
    name: AppConfig.name
  },
  LOGGER_DEV_CONFIG,
  AppConfig.log,
  {
    transports: [
      ...LOGGER_DEV_CONFIG.transports
    ]
  })
)
logger.debug('[x] Application config', AppConfig)

import { ROUTE, ROUTE_CONFIG } from 'no6-route/lib/route'
import { HASHER_CONFIG } from 'no6-requesthasher'
import { REDIS_CONFIG } from 'no6-redis/lib/redis'
import { MONGO_CONFIG } from 'no6-mongo'
import { HttpServerConfig } from 'no6-server'
import { CORS } from 'no6-server/lib/cors'
import { HTTP_CONFIG } from 'no6-http'
import { OAUTH_CONFIG } from 'no6-app-oauth/lib'

export class ServerConfig extends HttpServerConfig {

  // Inject startup function here
  @MONGO_CONFIG(AppConfig.mongo)
  @REDIS_CONFIG(AppConfig.redis)
  @OAUTH_CONFIG(AppConfig.oauthConfig)
  @HTTP_CONFIG(undefined, undefined, { ctx: true })
  @HASHER_CONFIG(AppConfig.encrypt)
  @ROUTE_CONFIG(() => import('@/controller/http'), { root: AppConfig.path })
  getConfig() {
    return AppConfig
  }

  // Inject middleware here
  @CORS(AppConfig.cors)
  @ROUTE()
  // tslint:disable-next-line:no-empty
  listen() { }

  // tslint:disable-next-line:no-empty
  async onListened() { }
}
