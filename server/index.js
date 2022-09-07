const express = require("express");
const cors = require("cors");
require("./db/config");
const Invoices = require("./db/Invoices");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/invoice", async (req, resp) => {
    let invoice = new Invoices(req.body);
    let result = await invoice.save();
    resp.send(result);
})

app.get("/fetchall", (req, resp) => {
    Invoices.find((err,val) => {
        if(err) {
            console.log(err)
        }else {
            resp.json(val);
        }
    })
})

app.listen(5000);