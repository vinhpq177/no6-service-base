import * as _ from 'lodash'
import { setLogger, LOGGER_PROD_CONFIG } from 'no6-log'
import { MongoTransport } from 'no6-log/lib/MongoTransport'
import { Mongo, MONGO_CONFIG } from 'no6-mongo'
import { hostname } from 'os'

setLogger(undefined, _.merge(
  {
    name: AppConfig.name,
    defaultMeta: {
      pid: process.pid,
      host_name: hostname(),
      service_name: AppConfig.name
    }
  },
  LOGGER_PROD_CONFIG,
  AppConfig.log,
  {
    transports: [
      ...LOGGER_PROD_CONFIG.transports,
      new MongoTransport({
        mongo: Mongo.pool,
        collection: 'log',
        key: 'SYSLOGS'
      })
    ]
  })
)

import { ROUTE, ROUTE_CONFIG } from 'no6-route/lib/route'
import { HASHER_CONFIG } from 'no6-requesthasher'
import { REDIS_CONFIG } from 'no6-redis/lib/redis'
import { HttpServerConfig } from 'no6-server'
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
  @ROUTE()
  // tslint:disable-next-line:no-empty
  listen() { }

  // tslint:disable-next-line:no-empty
  onListened() { }
}
