const express = require('express')
const jsonServer = require('json-server')
const chokidar = require('chokidar')
const cors = require('cors')
const nodemailer = require('nodemailer')
const creds = require('./config/secrets')
const fs = require('fs')
const { buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql')
const queryResolvers = require('./serverQueriesResolver')
const history = require('connect-history-api-fallback')

const fileName = process.argv[2] || './data.js'
const port = process.argv[3] || 3500

const mailRouter = express.Router()
let router = undefined
let graph = undefined

const app = express()

const createServer = () => {
  delete require.cache[require.resolve(fileName)]
  setTimeout(() => {
    router = jsonServer.router(fileName.endsWith('.js')
      ? require(fileName)() : fileName)

    let schema = fs.readFileSync('./serverQueriesSchema.graphql', 'utf-8')
    let resolver = { ...queryResolvers }

    graph = graphqlHTTP({
      schema: buildSchema(schema), rootValue: resolver,
      graphiql: true, context: { db: router.db }
    })
  }, 100)
}

createServer()

//mail
const transport = {
  host: creds.HOST,
  port: 587,
  auth: {
    user: creds.USER, // 
    pass: creds.PASS
  }
}

const contactEmail = nodemailer.createTransport(transport)

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

mailRouter.post('/contact', (req, res) => {
  const name = req.body.name
  const email = req.body.email
  const topic = req.body.topic
  const message = req.body.message
  const content = `name: ${name} \n email: ${email} \n topic: ${topic} \n message: ${message} `

  var mail = {
    from: name,
    to: 'wilinski.piotr@outlook.com',
    subject: 'New Message from Contact Form',
    text: content
  }

  contactEmail.sendMail(mail, (err) => {
    if (err) {
      res.json({
        status: 'failed'
      })
    } else {
      res.json({
        status: 'sent'
      })
    }
  })
})

app.use(history())
app.use('/', express.static('./build'))
app.use(cors())
app.use(jsonServer.bodyParser)
app.use('/api', (req, res, next) => router(req, res, next))

chokidar.watch(fileName).on("change", () => {
  console.log('Loading service...')
  createServer()
  console.log('Service loaded.')
})

app.listen(port, () => console.log(`Service is working on port ${port}`))

app.use(express.json())
app.use('/', mailRouter)
app.use('/graphql', (req, resp, next) => graph(req, resp, next))