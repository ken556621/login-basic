const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const userList = require('./userlist.json');
const loginCheck = require('./public/javascripts/login-check.js');
const app = new express();
const port = 3000;

//setting engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

//setting route
app.get('/', (req, res) => {
    res.render('index');
})


app.post('/', (req, res) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    const membership = userList.results
    const membershipChecked = loginCheck(userEmail, userPassword, membership);
    let defaultMessage = false;

    if(membershipChecked){
        defaultMessage = false;
        res.render('welcomepage', { membership: membershipChecked[0] });
    }else{
        defaultMessage = true;
        res.render('index', { defaultMessage: defaultMessage });
    }
})

//listen 
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
})
