
export interface Post {
  id?: number
  category: string
  title: string
  context: string
  writer: string
  deleted?: string
}

export const postFromDB = (post: any): Post => {
  return {
    id: post.id,
    category: post.category,
    title: post.title,
    context: post.context,
    writer: post.writer
  }
}
