const express = require('express')
const routes = express.Router()
const foodfy = require('./controllers/foodfy')
const admin = require('./controllers/admin')

/*Foody Routes */

routes.get("/", foodfy.index)
routes.get("/sobre", foodfy.about)
routes.get("/receitas", foodfy.recipes)
routes.get("/receitas/:index", foodfy.show)

/*Foody admin Routes */

routes.get("/admin",admin.index)
routes.get("/admin/receitas/:id",admin.show)
routes.get('/admin/receitas/edit/:id',admin.edit)

module.exports = routes