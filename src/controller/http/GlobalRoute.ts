import { ALL, GET } from 'no6-route/lib/route'
import { AUTO_LOG } from 'no6-log/lib/debug'
import { AUTHORIZ, Roles } from 'no6-app-oauth/lib'

/************************************************
 ** GlobalRoute || 4/10/2017, 10:19:24 AM **
 ************************************************/

@AUTO_LOG(AppConfig.name)
export default class GlobalController {

  @ALL('/HealthCheck')
  // tslint:disable-next-line:no-empty
  static healthCheck() { }

  @GET('/29a7e96467b69a9f5a93332e29e9b0de') @AUTHORIZ('###', 'ROLES')
  static getRoles() {
    return Roles
  }

}
