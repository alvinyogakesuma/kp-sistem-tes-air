const express = require('express');
const fire = require('./routes/fire.js');

const app = express();

app.listen(3000);

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {css_path: "index.css", title: "index"});
})

app.get('/access-control', (req, res) => {
    res.render('access-control', {css_path: "access-control.css", title: "access-control"});
})

app.get('/login', (req, res) => {
    res.render('login', {css_path: "login.css", title: "login"});
})

app.get('/profile', (req, res) => {
    res.render('profile', {css_path: "profile.css", title: "profile"});
})

app.get('/report', (req, res) => {
    res.render('report', {css_path: "report.css", title: "report"});
})

app.use((req, res) => {
    res.status(404).render('404', {css_path: "404.css", title: "404"})
})