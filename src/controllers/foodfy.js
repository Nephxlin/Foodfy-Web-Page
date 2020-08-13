let Data = require('../data')

module.exports = {
  index(req,res){
    return res.render("index",{Data})
  },
  
  about(req,res){
    return res.render("sobre")
  },
  
  recipes(req,res){
    return res.render("receitas",{Data})
  },

  show(req,res){
    const recipes = [...Data]
    const recipeIndex = recipes[req.params.index]
   
    return res.render("show",{ recipeIndex })
  },
}