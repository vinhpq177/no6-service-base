declare const logger: any
declare const AppConfig: {
  env?: 'production' | 'development'
  url: string
  path: string
  name: string
  port?: number
  host?: string
  log?: {
    level: 'verbose' | 'silly' | 'error' | 'debug' | 'warn'
  }
  oauthConfig: {
    redisName: string
    localCachedTimeOut?: number
  }
  mongo?: {
    [key: string]: {
      ref?: string
      url: string
      dbname?: string
      query?: string
      autoConnect?: boolean
      opts?: any
    }
  }
  redis?: {
    [key: string]: {
      host: string
      port: number
      db?: number
      opts?: any
    }
  }
  cors: {
    allowMethods?: string[] | string
    exposeHeaders?: string[] | string
    allowHeaders?: string[] | string
    origin?: Function | string
    maxAge?: number | string
    credentials?: boolean
    keepHeadersOnError?: boolean
  }
  encrypt?: {
    pwd?: string
    algorithm?: 'AES-CTR'
    mode?: Array<'query' | 'body' | 'response'>
    baseOnRequest?: boolean
  }
  services: {
    oauth: string
  }
  app: {}
} 
