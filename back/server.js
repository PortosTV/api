import express from 'express'
import cors from 'cors'
import {getNotes, addNote} from './model/supabase.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/api/v1', async (req, res) => {
  const {data, error} = await getNotes()
  res.json(data)
})

app.get('/api/v1/note', async (req, res) => {
    const id = req.query.id
    const {data, error} = await getNote(id)
    res.json(data)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/api/v1/note', async (req,res) => {
  const {data, error} = await addNote(req.body)
  res.json(data)
})