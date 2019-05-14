const express = require('express');
const app = express();
const port = 3000;
app.get('/aman',(req,res) => 
res.send('Boss!'))
app.get('/vatan',(req,res) => 
res.send('Bhai!'))
app.get('/AK',(req,res) => 
res.send('Good Friend!'))
app.get('/r/:subredditName/comments/:id/:title',(req,res) => 
res.send('Bestie!'))
app.get("*", (req,res) => res.send('Surprise Chirkut!'))
app.listen(port, () => console.log('Server is started'))
