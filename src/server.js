//Importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./server.js')

//iniciando o express
const server = express()
server
//utilizar o body do request
.use(express.urlencoded({extended: true}))
//utilizando os arquivos estaticos
.use(express.static('public'))

//Configurar template engine hbs-Handlebars
//dirname para mostrar o diretorio onde estou
.set('views', path.join(__dirname, "viwes"))
.set('view engine', 'hbs')

//criar uma rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage'.pages.saveOrphanage)

//ligar o servidor
server.listen(5500)