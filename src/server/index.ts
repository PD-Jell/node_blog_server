import * as BodyParser from 'body-parser' // request의 body를 node에서 사용할 수 있게끔 파싱해주는 미들웨어.
import * as Compression from 'compression' // compression, Express에서 GZip, deflate를 사용하기 위한 미들웨어. (순간적으로 압축해서 보내준다.)
import * as Express from 'express' // ExpressJS
import * as Iconv from 'iconv-lite'
import * as Logger from '../utils/logger' // logger

import { createServer } from 'http' // Node http

import { upload, uploadRootPath } from '../config' // multer

import * as post from '../controllers/post'



export const logger = Logger.getLogger('Index')
const port = 4000
const app = Express()

// 미들웨어 설정
app.use(Compression())
app.use(BodyParser({ limit: '100mb' }))
app.use('/uploads', Express.static(uploadRootPath))

app.get('/post', post.getPostAll)
app.get('/post/:year/:month/:day/:title', post.getPostOne)

// const httpServer = createServer(app); // 반환형은 Node의 서버.
app.listen(port, () => {
  logger('App is running at http://localhost:' + port + ' in ' + app.get('env') + ' mode'); // EventHandler.
  // 요즘 추세는 one parameter passing하는 것.
})
