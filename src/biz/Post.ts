import * as dao from '../daos/post'
import { Post } from '../models/Post';
import { ApiResult } from '../config/result';
import { ApiResultCode } from '../config/enum';

export interface PostService {
  getPostAll: () => Promise<Post[]>
  getPostOne: (title: string, year: number, month: number, day: number) => Promise<ApiResult>
}

export const PostService = () => {
  return new PostImpl()
}

class PostImpl implements PostService {
  getPostAll = (): Promise<Post[]> => {
    return dao.getPostAll()
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
}
