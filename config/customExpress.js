//Arquivo para configurar tudo o que for necessário dentro no express, qualquer modificação no express deve ser feita dentro desse arquivo.

const express = require('express');
const consign = require('consign');

module.exports = () => {
    const app = express()

    app.use(express.urlencoded({ extended: true}))
    app.use(express.json())

    consign()
        .include('controllers')
        .into(app)

    return app
}