const app = require("express")()
app.get("/nav1", (req, res) => {
    let data = ["首页", "免费课", "实战课", "体系课"]
    res.send(data)
})
app.get("/nav2", (req, res) => {
    let data = ["专栏", "手记", "慕课教程"]
    res.send(data)
})
app.listen(5000)