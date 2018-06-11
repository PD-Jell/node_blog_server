import * as dao from '../daos/post'
import { Post } from '../models/Post';
import { ApiResult } from '../config/result';
import { ApiResultCode } from '../config/enum';

export interface PostService {
  getPostAll: () => Promise<ApiResult>
  getPostOne: (title: string, year: number, month: number, day: number) => Promise<ApiResult>
  insertPost: (category: string, title: string, context: string, writer: string) => Promise<ApiResult>
}

export const PostService = () => {
  return new PostImpl()
}

class PostImpl implements PostService {
  getPostAll = async (): Promise<ApiResult> => {
    const result = await dao.getPostAll()
    return {
      result: ApiResultCode.success,
      object: result
    }
  }

  getPostOne = async (title: string, year: number, month: number, day: number): Promise<ApiResult> => {
    const posts: Post[] = await dao.getPostOne(title, year, month, day)
    if (posts.length > 1)
      return {
          result: ApiResultCode.internal_error
        }
    else {
      return {
        result: ApiResultCode.success,
        object: posts[0]
      }
    }
  }

  insertPost = async (category: string, title: string, context: string, writer: string='jell'): Promise<ApiResult> => {
    const result: any = await dao.insertPost(category, title, context, writer)
    console.log('result', JSON.stringify(result))
    if (result.errno) {
      throw {
        result: ApiResultCode.internal_error,
        object: undefined
      }
    }
    return {
      result: ApiResultCode.success,
      object: result
    }
 }}
