const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()
const port = 4000


app.use(cors());

app.get('/products', (req, res) => {
    const json = fs.readFileSync('./products.json','utf8', (err,content) => {
        if(err){
            console.log(err)
        }else{
            JSON.stringify(content.toString())
        }
    })

    res.send(json);
})


app.listen(port)