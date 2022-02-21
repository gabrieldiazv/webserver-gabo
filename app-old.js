const http = require("http");

http
  .createServer((req, res) => {
    console.log(req);
    res.writeHead(200, { "Content-Type": "application/json" });
    const persona = {
      id: 1,
      nombre: "gabo",
    };
    res.write(JSON.stringify(persona));
    // res.write("404 | Not Found");
    res.end();
  })
  .listen(8081);

console.log("escuchando el puerto", 8081);
