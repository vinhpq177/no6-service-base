import { Schema, BaseSchema, extend } from 'no6-jov'
import { MongoSchema } from 'no6-mongo/lib/jov'

class AppScheme extends BaseSchema {

  // @JOV((vl) => { // opts: ['date', 'jsonstring']
  //   return EnDecryptToken.encryptPwd(vl)
  // })
  // toPwd() {
  //   return this.addValidator('toPwd')
  // }

}

interface ISchema extends Schema {

  mongoId(): ISchema
  toMongoId(): ISchema
  toMongoObject(): ISchema
}

extend(MongoSchema, AppScheme)

export function vs() {
  return new Schema() as any as ISchema
}
