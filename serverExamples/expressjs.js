const express = require("express");
const app = express();
const port = process.env.PORT;

app.get('/', (req, res)=> {
    res.sendFile(``);
    app.use(express.static(``));
})

app.listen(port);
