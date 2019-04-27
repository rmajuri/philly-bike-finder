// const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const PORT = 8080;

const init = () => {
  server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init()
