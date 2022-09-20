import express                  from "express";


const app = express();

const PORT = process.env.PORT || 8080

app.use(express.json())

const server = app.listen(PORT, () => {
    console.log(`server funcionando en port http://localhost:${PORT}`);
  });
  server.on("error", (err) => console.error(err));
  
