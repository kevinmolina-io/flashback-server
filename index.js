import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import { DB_USERNAME, DB_PASSWORD } from './sensi.js'
import postRoutes from './routes/posts.js'

const app = express()

const dbUsername = DB_USERNAME
const dbPassword = DB_PASSWORD

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors())

const CONNECTION_URL = `mongodb+srv://${dbUsername}:${dbPassword}@flashbackcluster.1ai1u.mongodb.net/<dbname>?retryWrites=true&w=majority`
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
