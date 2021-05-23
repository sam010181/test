const http = require('http');
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

server.listen(port,() => {
  console.log(`Server running at port `+port);
});
