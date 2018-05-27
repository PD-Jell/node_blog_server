import { executeQueryWithConnect } from '../config/database'
import { Post, postFromDB } from '../models/Post'
import * as query from './queries/post'
import * as Logger from '../utils/logger';

const logger: Logger.Logger = Logger.getLogger('dao.post')

export const getPostAll = async (): Promise<Post[]> => {
  const results: any[] = await executeQueryWithConnect(query.getPostAll)
  const posts: Post[] = []
  results.forEach(result => {
    posts.push(postFromDB(result))
  })
  return posts
}

export const getPostOne = async (title: string, year: number, month: number, day: number): Promise<Post[]> => {
  const params = [
    title, year, month, day, year, month, day
  ]
  const results: any[] = await executeQueryWithConnect(query.getPostOne, params)
  const posts: Post[] = []
  results.forEach(result => {
    posts.push(postFromDB(result))
  })
  return posts
}
