import { AUTO_LOG, AUTO_TRACE_ERROR } from 'no6-log/lib/debug'

@AUTO_LOG(AppConfig.name)
@AUTO_TRACE_ERROR()
export class Startup {

  static async startup() {
    // Init data when server up
  }
}
