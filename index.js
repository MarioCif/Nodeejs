const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) =>{
    // res.send("Funcionando........");
    res.render('index');
});

app.listen(3000, () =>{
    console.log("Servidor en el PORT 3000");
});