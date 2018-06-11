import { Request, Response } from 'express'
import * as _ from 'lodash'
import * as utils from '../utils'
import { PostService } from '../biz/Post'
import { Post } from '../models/Post'
import { ApiResult } from '../config/result';

const postService: PostService = PostService();

export const getPostAll = async (req: Request, res: Response) => {
  const posts: ApiResult = await postService.getPostAll()
  res.json(posts);
}

export const getPostOne = async (req: Request, res: Response) => {
  const year: number = _.toInteger(req.params.year)
  const month: number = _.toInteger(req.params.month)
  const day: number = _.toInteger(req.params.day)
  const title: string = utils.lodashToSpace(req.params.title)

  res.json(await postService.getPostOne(title, year, month, day))
}

export const insertPost = (req: Request, res: Response) => {
  const category: string = req.body.category
  const title: string = req.body.title
  const context: string = req.body.context
  const writer: string = req.body.writer || 'Jell'
  console.log(JSON.stringify(req.body))

  postService.insertPost(category, title, context, writer)
  .then((result: ApiResult) => {
    res.json(result)
  }).catch((result: ApiResult) => {
    res.status(500).json(result)
  })
}
