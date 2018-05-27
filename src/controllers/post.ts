import { Request, Response } from 'express'
import * as _ from 'lodash'
import * as utils from '../utils'
import { PostService } from '../biz/Post'
import { Post } from '../models/Post'

const postService: PostService = PostService();

export const getPostAll = async (req: Request, res: Response) => {
  const posts: Post[] = await postService.getPostAll()
  res.json(posts);
}

export const getPostOne = async (req: Request, res: Response) => {
  const year: number = _.toInteger(req.params.year)
  const month: number = _.toInteger(req.params.month)
  const day: number = _.toInteger(req.params.day)
  const title: string = utils.lodashToSpace(req.params.title)

  res.json(await postService.getPostOne(title, year, month, day))
}
