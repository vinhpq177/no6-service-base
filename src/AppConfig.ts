import * as path from 'path'
import * as url from 'url'
import ConfigLoader from 'no6-utils/lib/ConfigLoader'

export default async function () {
  global['AppConfig'] = await ConfigLoader<any>(path.resolve('package.json'))
  if (AppConfig.url) {
    Object.defineProperties(AppConfig, {
      host: {
        get() {
          return url.parse(AppConfig.url).hostname
        }
      },
      port: {
        get() {
          return +url.parse(AppConfig.url).port
        }
      }
    })
  }
}
