
export interface Post {
  id?: number
  div: string
  title: string
  context: string
  writer: string
  deleted?: string
}

export const postFromDB = (post: any): Post => {
  return {
    id: post.id,
    div: post.div,
    title: post.title,
    context: post.context,
    writer: post.writer
  }
}
