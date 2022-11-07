import express from "express"
import bodyParser from "body-parser"
import { v4 as uuidv4 } from "uuid"

const app = express()
const port = 3000

app.use(bodyParser.json())

var tempStorage = []

app.post("/dodajObavjest", (req, res) => {
    var data = req.body
    console.log(data)
    data = { ...data, "id": uuidv4(), "datum": new Date() }
    tempStorage.push(data)
    res.send(tempStorage)
})
app.get("/vratiObavijesti", (req, res) => {
    let filtriranje = []
    tempStorage.forEach(a => {
        filtriranje.push({
            "naziv": a.naziv,
            "datum": a.datum
        })
    });
    res.send(filtriranje)
});
app.get("/vratiObavijest/:id", (req, res) => {
    var { id } = req.params
    var ob = tempStorage.find((a) => a.id == id)
    res.send({
        "naziv": ob.naziv,
        "datum": ob.datum,
        "sadrzaj": ob.sadrzaj
    })
})
app.patch("/izmjeniObavijest/:id", (req, res) => {
    var { id } = req.params
    var ob = tempStorage.find((a) => a.id == id)
    var { sadrzaj } = req.body
    ob.sadrzaj = sadrzaj
    res.send(ob)
})

app.listen(port, () => console.log(`Works on port ${port}`));
