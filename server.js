const express = require('express');
const app = express();
const PORT = 4000;
const domesticAnimalsController = require('./controllers/domesticAnimals')
const {animals} = require('./models')

app.get('/', (req, res) => {
    // res.send("Hello world")
})
app.set('view engine', 'ejs');

// below needed to use req.body
app.use(express.urlencoded({ extended:false}));

// app.get('/', (req, res) => {
//     res.render('home.ejs', )
// })

app.use('/animals', domesticAnimalsController);



app.listen(PORT, () => {
    console.log(`🦓 Server is listening to PORT 🦇 ${PORT} 🦅`)
})