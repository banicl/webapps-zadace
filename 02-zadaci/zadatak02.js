import express from "express"
import bodyParser from "body-parser"
import { v4 as uuidv4 } from "uuid"

const app = express()
const port = 3000

app.use(bodyParser.json())

var tempStorage = []

app.post("/dodajAutora", (req, res) => {
    var data = req.body
    console.log(data)
    data = { ...data, "id": uuidv4(), "datum": new Date() }
    tempStorage.push(data)
    res.send(tempStorage)
});

app.get("/vratiAutore", (req, res) => {
    let filtriranje = []
    tempStorage.forEach(b => {
        filtriranje.push({
            "naziv": b.naziv,
            "djela": b.djela
        })
    });
    res.send(filtriranje)
})

app.delete("/izbrisiDjeloAutora/:id", (req, res) => {
    var { id } = req.params
    var del = tempStorage.find(au => au.id != id)
    res.send(del)
})

app.listen(port, () => console.log(`Works on port ${port}`));