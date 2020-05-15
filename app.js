const express = require("express")

const server = express()

const docs = express.static("docs")

server.use(docs)

server.get("/ofertas.html", function (request, response) {
    response.end("Acá van a mostrarse las ofertas de MercadoTECH")
})

server.post("/enviar", function (req, res) {
    res.end("Aca debo ver el enviar los datos del formulario")
})

server.listen(2000) 