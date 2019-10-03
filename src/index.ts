import * as http from "http";

const serverPort = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Hello World\n");
});

server.listen(serverPort, () => {
  // tslint:disable-next-line:no-console
  console.info(`Server running on port ${serverPort}`);
});
