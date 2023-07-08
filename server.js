const fs = require("fs");
let app = require("express")();
console.log("Starting server");
app.listen(3000, async function () {
    console.log("Server started");
});


app.get("/", function (req, res) {
    res.redirect("/register")
});

app.get("/images/:f", function (req, res) {
    res.sendFile(__dirname + "/public/images/" + req.params.f);
});

app.get("/:page", async function (req, res) {
    let p = req.params.page;
    if (fs.existsSync(__dirname + "/public/pages/" + p + ".html")) {
        res.sendFile(__dirname + "/public/pages/" + p + ".html");
    } else {
        res.sendFile(__dirname + "/public/pages/404.html");
    }
});
app.use(function (req, res) {
    res.status(404).sendFile(__dirname + "/public/pages/404.html");
});