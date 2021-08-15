const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  user: 'root',
  host: '127.0.0.1',
  password: 'adminadmin',
  database: 'share_pyoco'
})

app.post('/create', (req, res) => {
  console.log('api')
  const title = req.body.title;
  const price = req.body.price;

  db.query(
    'INSERT INTO items (title, price) VALUES (?, ?)',
    [title, price],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send('Values Inserted')
      }
    }
  )
})

app.get('/expences', (req, res) => {
  console.log('get')
  db.query(
    'SELECT * FROM share_pyoco.expence;',
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    }
  )
})

app.listen(3002, () => {
  console.log('yayyyy server is running on port 3002')
})