// import { VALIDATOR } from 'no6-bodyparser/lib/validator'
// import { vs } from '@common/VS'
import { TestService } from '@service/TestService'
// import { AUTO_LOG, AUTO_TRACE_ERROR } from 'no6-log/lib/debug'

/************************************************
 ** TestController || 4/10/2017, 10:19:24 AM **
 ************************************************/

// @AUTO_LOG(AppConfig.name)
// @AUTO_TRACE_ERROR()
export default class TestController {

  // @VALIDATOR({
  //   params: {
  //     name: vs().string()
  //   }
  // })
  static async test({ params, ctx }) {
    const rs = await TestService.test(ctx, params.name)
    return rs
  }
}
