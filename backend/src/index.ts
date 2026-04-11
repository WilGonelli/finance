import "dotenv/config";
import app from "./app";

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("keep alive");
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
