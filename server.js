const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const fullName = "formanes rencee P";
const section = "BSIT 4102";
const quote = "Yim the man with the millions moves";

app.get("/", (req, res) => {
  res.send(`
    <div style="text-align:center; font-family: Arial, sans-serif; margin-top: 50px;">
      <h1>${fullName}</h1>
      <h2>${section}</h2>
      <p>${quote}</p>
    </div>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
