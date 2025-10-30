import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3000;

server.use(middlewares);

// ✅ Add this route so Railway can see the app is alive
server.get("/", (req, res) => {
  res.send("✅ JSON Server is running successfully!");
});

server.use(router);

server.listen(PORT, () => {
  console.log(`✅ JSON Server is running on port ${PORT}`);
});
