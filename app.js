const app = require('express')();

app.set('view engine', 'ejs');
app.set('views', './views');

http.listen(3000, () => {
	console.log('Connect at 3000');
});