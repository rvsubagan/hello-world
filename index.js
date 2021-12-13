import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/birthday', (req, res) => {
    res.send('Happy Birthday!')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Server running...'))