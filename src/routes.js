const express = require('express')
const routes = express.Router()
const foody = require('./app/controllers/foodfy')

/*Foody Routes */

routes.get("/", foody.index)
routes.get("/sobre", foody.about)
routes.get("/receitas", foody.recipes)
routes.get("/receitas/:index", foody.show)

module.exports = routes