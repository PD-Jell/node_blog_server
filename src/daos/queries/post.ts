export const getPostAll =
`
  select * from post
`

export const getPostOne =
`
  select * from post
  where title=?
  and cdatetime
  between '?-?-?:00:00:00' and '?-?-?:23:59:59'
`
