let Data = require('../data')

module.exports = {
  index(req,res){
    return res.render("AdIndex",{Data})
  },
  show(req,res){
    const recipes = [...Data]
    const recipeId = recipes[req.params.id]
   
    return res.render("AdShow",{ recipeId })
  },
  edit(req,res){
    const recipes = [...Data]
    const recipeId = recipes[req.params.id]
   
    return res.render("AdEdit",{ recipeId })
  },
}
