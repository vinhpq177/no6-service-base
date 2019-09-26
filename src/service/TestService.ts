import * as _ from 'lodash'
import { AUTO_TRACE_ERROR, AUTO_LOG } from 'no6-log/lib/debug'
import HttpError from 'no6-utils/lib/HttpError'
import { Context } from 'no6-server'
import { MONGO, Mongo } from 'no6-mongo'
import { Message, getMessage } from '@common/Message'

/************************************************
 ** TestService || 4/10/2017, 10:19:24 AM **
 ************************************************/

@AUTO_LOG(AppConfig.name)
@AUTO_TRACE_ERROR()
export class TestService {

  @MONGO()
  private static mongo: Mongo

  static async test(_ctx: Context, name: string) {
    console.log('name', name)
    if (name === 'world') throw HttpError.BAD_REQUEST(getMessage(Message.ERROR_CODE, name))
    const rs = await TestService.mongo.find('Test')
    return rs
  }
}
