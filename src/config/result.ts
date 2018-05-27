import { ApiResultCode } from "./enum";

export interface ApiResult {
  result: ApiResultCode
  object?: any | any[]
}
