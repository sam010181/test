const flower = require('./modules/flower.js')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/',flower.getRecipe )

app.listen(port,() => {
  console.log(`Server running at port `+port);
});
