const express = require('express')
const app = express()

// Ну тут короче все наши файлики красоты
app.use(express.static('public'))

// А тута у нас главная страница
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

// Тута все остальные страницы
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/public/404.html')
})

app.listen(8000)
console.log('Сервер запущен!')