const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 28106;

// Use
app.use(express.static('public'));
app.use(expressLayouts);

// Set
app.set('view engine', 'ejs');
app.set('views', 'views');
app.set('layout', 'layouts/layout');

// Routes
app.get('/', function(req, res) {
  res.render('index', { title: '3D' });
});



app.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});
