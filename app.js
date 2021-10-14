const app = require('express')();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./routes/main'));
app.use('/', require('./routes/scheduleEdit'));
app.use('/', require('./routes/scheduleList'));

http.listen(3000, () => {
	console.log('Connect at 3000');
});