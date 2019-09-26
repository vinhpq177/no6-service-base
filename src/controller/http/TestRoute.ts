import { GET } from 'no6-route/lib/route'
import { AUTO_LOG } from 'no6-log/lib/debug'
import TestController from '@controller/TestController'

/************************************************
 ** TestRoute || 4/10/2017, 10:19:24 AM **
 ************************************************/

@AUTO_LOG(AppConfig.name)
export default class TestRoute {

  @GET('/Test/:name') // @AUTHORIZ('###', 'ROLES')
  static test(ctx) {
    return TestController.test(ctx)
  }
}
