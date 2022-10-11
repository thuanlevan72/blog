const express = require("express");
const app = express();
const port = 3000; // định nghĩa tuyến đường của bạn
// router và phương thức của nó bằng arrow function
app.get("/", (req, res) => {
  var a = 1 + 2;
  res.send(a + " đây là a");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
