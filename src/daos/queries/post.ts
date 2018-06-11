
const curDateTime = "date_format(now(), '%Y%m%d%H%i%s')";

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

export const insertPost =
`
  insert into post (
    category, title, context, writer, cdatetime, udatetime
  ) values (
    ?, ?, ?, ?, ${curDateTime}, ${curDateTime}
  )
`
